﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using DinoEmporium.Models;

namespace DinoEmporium.Data
{
    public class ProductRepository
    {
        const string ConnectionString = "Server=localhost;Database=Littlefoots;Trusted_Connection=True;";

        public Product AddProduct(decimal price, int productTypeId, string title, string description, int quantity, string size, string image)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newProduct = db.QueryFirstOrDefault<Product>(
                                                                @"insert into Product (price, title, productTypeId, description, quantity, size, image)
                                                                Output inserted.*
                                                                values (@price, @title, @productTypeId, @description, @quantity, @size, @image)
                                                                select * from Product",
                                                                new { price, title, productTypeId, description, quantity, size, image });

                if(newProduct != null)
                {
                    return newProduct;
                }
            }
            throw new System.Exception("No new product found.");
        }

        public IEnumerable<Product> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var products = db.Query<Product>("select * from Product").ToList();

                return products;
            }
        }

        public Product GetSingleProduct(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var singleProduct = db.QueryFirstOrDefault<Product>(@"select *
                                                                    from Product
                                                                    where id = @id",
                                                                    new { id });
                return singleProduct;
            }
        }


        public Product UpdateSingleProduct(Product singleProduct)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var updatedProduct = db.QueryFirstOrDefault <Product>(@"update product
                                        set quantity = @quantity,
                                            price = @price,
                                            title = @title,
                                            productTypeId = @productTypeId,
                                            description = @description,
                                            size = @size,
                                            image = @image
                                            output inserted.*
                                            where id = @id",
                                                            new {
                                                                 id = singleProduct.Id,
                                                                 quantity = singleProduct.Quantity,
                                                                 title = singleProduct.Title,
                                                                 price = singleProduct.Price,
                                                                 productTypeId = singleProduct.ProductTypeId,
                                                                 description = singleProduct.Description,
                                                                 size = singleProduct.Size,
                                                                 image = singleProduct.Image
                                                                 });
                return updatedProduct;
            }
            throw new System.Exception("Could not update product.");
        }

        public Product DeleteSingleProduct(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var deletedProduct = db.QueryFirstOrDefault<Product>(@"delete
                                                                       from Product
                                                                       where id = @id",
                                                                       new { id });
                return deletedProduct;
            }
        }
    }
}
