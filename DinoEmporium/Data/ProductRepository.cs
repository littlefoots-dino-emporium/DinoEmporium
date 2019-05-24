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
        const string ConnectionString = "Server=localhost;Database=SwordAndFather;Trusted_Connection=True;";
        public Product AddProduct(decimal price, string title, string description, decimal quantity)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newProduct = db.QueryFirstOrDefault<Product>(
                                                                @"Insert into products(price, title, description, quantity)
                                                                Output inserted.*
                                                                Values(@price, @title, @description, @quantity)",
                                                                new { price, title, description, quantity });

                if(newProduct != null)
                {
                    return newProduct;
                }
            }
            throw new System.Exception("No new product found.");
        }
    }
}
