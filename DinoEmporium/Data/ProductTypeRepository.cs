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
    }
}
