using System;
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
        public Product AddProduct(decimal price, string title, string description, int quantity)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newProduct = db.QueryFirstOrDefault<Product>(
                                                                @"insert into Product (price, title, description, quantity)
                                                                values (@price, @title, @description, @quantity)
                                                                select * from Product",
                                                                new { price, title, description, quantity });

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
    }
}
