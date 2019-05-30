using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using DinoEmporium.Models.ProductOrder;

namespace DinoEmporium.Data
{
    public class ProductOrderRepository
    {
        const string ConnectionString = "Server=localhost;Database=Littlefoots;Trusted_Connection=True;";

        public ProductOrder AddProductToOrder(int productId, int orderId, bool isInCart)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var joinProductToOrder = db.QueryFirstOrDefault<ProductOrder>(
                                                                              @"insert into ProductOrder(ProductId, OrderId, IsInCart)
                                                                              output inserted.*
                                                                              values (@productId, @orderId, @isInCart)",
                                                                              new { productId, orderId, isInCart });

                if (joinProductToOrder != null)
                {
                    return joinProductToOrder;
                }
            }
            throw new System.Exception("All information is required.");
        }
    
        

        public IEnumerable<ProductOrder> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var products = db.Query<ProductOrder>("select * from ProductOrder").ToList();

                return products;
            }
        }
    }
}
