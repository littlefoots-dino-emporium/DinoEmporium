using Dapper;
using DinoEmporium.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Data
{
    public class OrderRepository
    {
        const string ConnectionString = "Server=localhost;Database=Littlefoots;Trusted_Connection=True;";

        public Order AddOrder(int price)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newOrder = db.QueryFirstOrDefault<Order>(@"
                    Insert into [Order] (price)
                    Output inserted.*
                    Values(@price)",
                    new { price });

                if (newOrder != null)
                {
                    return newOrder;
                }
            }
            throw new Exception("No order created");
        }
    }
}
