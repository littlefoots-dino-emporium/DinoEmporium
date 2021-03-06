﻿using Dapper;
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

        public Order AddOrder(int price, int customerId, int paymentInformationId)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newOrder = db.QueryFirstOrDefault<Order>(@"
                    Insert into [Order] (price, customerId, paymentInformationId)
                    Output inserted.*
                    Values(@price, @customerId, @paymentInformationId)",
                    new { price, customerId, paymentInformationId });

                if (newOrder != null)
                {
                    return newOrder;
                }
            }
            throw new Exception("No order created");
        }

        //public IEnumerable<Order> GetAllOrders()
        //{
        //    using (var db = new SqlConnection(ConnectionString))
        //    {
        //        var allOrders = db.Query<Order>("Select * from [Order]").ToList();

        //        return allOrders;
        //    }
        //}

        public IEnumerable<Order> GetAllOrders(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allCustomerOrders = db.Query<Order>("Select * from [order] where customerId = @id", new { id }).ToList();

                return allCustomerOrders;
            }
        }

        public Order GetSingleOrder(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var singleOrder = db.QueryFirstOrDefault<Order>(@"select * from [Order] where customerId = @id", new { id });

                return singleOrder;
            }
        }

        public Order UpdateSingleOrder(Order singleOrder)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var updatedOrder = db.QueryFirstOrDefault<Order>(@"update [Order]
                                                                        set price = @price
                                                                        output inserted.*
                                                                        where id = @id",
                                                                        new
                                                                        {
                                                                            id = singleOrder.Id,
                                                                            price = singleOrder.Price,
                                                                        });
                return updatedOrder;
            }
            throw new System.Exception("Could not update order.");
        }
    }
}
