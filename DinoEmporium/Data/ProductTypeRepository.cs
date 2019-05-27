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
    }
}
