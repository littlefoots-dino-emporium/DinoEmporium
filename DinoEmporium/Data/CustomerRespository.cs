using System;
using Dapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DinoEmporium.Models;
using System.Data.SqlClient;

namespace DinoEmporium.Data
{
    public class CustomerRespository
    {
        const string ConnectionString = "Server=localhost;Database=Littlefoots;Trusted_Connection=True;";

        public Customer AddCustomer(string firstName, string lastName, DateTime dateTime, string email)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newCustomer = db.QueryFirstOrDefault<Customer>(@"
                    Insert into users (firstName,lastName, dateTime, email)
                    Output inserted.*
                    Values(@firstName,@lastName,@dateTime,@email)",
                    new { firstName, lastName, dateTime, email });

                if (newCustomer != null)
                {
                    return newCustomer;
                }
            }

            throw new Exception("No user created");
        }

        public Customer GetCustomers()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allCustomers = db.QueryFirstOrDefault<Customer>(@"Select * from Customer");
                return allCustomers;
            }
        }
    }
}
