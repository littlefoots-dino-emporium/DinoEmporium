using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using DinoEmporium.Models;

namespace DinoEmporium.Data
{
    public class ProductTypeRepository
    {
        const string ConnectionString = "Server=localhost;Database=Littlefoots;Trusted_Connection=True;";

        public ProductType AddProductType(string productName)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newProductType = db.QueryFirstOrDefault<ProductType>(
                                                                    @"insert into ProductType(ProductName)
                                                                      values (@ProductName)
                                                                      select * from ProductType",
                                                                    new { productName });

                if(newProductType != null)
                {
                    return newProductType;
                }
            }

            throw new System.Exception("No new product type found.");
        }

        public IEnumerable<ProductType> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var productTypes = db.Query<ProductType>("select * from ProductType").ToList();

                return productTypes;
            }
        }

        public IEnumerable<Product> GetDinos()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getDinoWinos = db.Query<Product>(@"select *
                                                     from Product p, ProductType pt
                                                     where p.ProductTypeId = 2
                                                     and pt.Id = 2").ToList();

                return getDinoWinos;
            }
        }

        public IEnumerable<Product> GetSweaters()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getSweaters = db.Query<Product>(@"select *
                                                     from Product p, ProductType pt
                                                     where p.ProductTypeId = 1
                                                     and pt.Id = 1").ToList();

                return getSweaters;
            }
        }

        public IEnumerable<Product> GetFences()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getFences = db.Query<Product>(@"select *
                                                     from Product p, ProductType pt
                                                     where p.ProductTypeId = 3
                                                     and pt.Id = 3").ToList();

                return getFences;
            }
        }

        public ProductType GetSingleProductType(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var singleProductType = db.QueryFirstOrDefault<ProductType>(@"select *
                                                                              from ProductType
                                                                              where id = @id",
                                                                              new { id });
                return singleProductType;
            }
        }

        public ProductType UpdateProductType(ProductType singleProductType)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var updateProductType = db.QueryFirstOrDefault<ProductType>(@"update productType
                                                                              set productName = @productName
                                                                              output inserted.*
                                                                              where id = @id",
                                                                               new {
                                                                                  id = singleProductType.Id,
                                                                                  productName = singleProductType.ProductName
                                                                                  });
                return updateProductType;
            }
            throw new System.Exception("Could not update the product type.");
        }

        public ProductType DeleteSingleType(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var deleteProductType = db.QueryFirstOrDefault<ProductType>(@"delete
                                                                              from ProductType
                                                                              where id = @id",
                                                                              new { id });
                return deleteProductType;
            }
        }
    }
}
