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

        public IEnumerable<Customer> GetCustomers()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allCustomers = db.Query<Customer>(@"Select * from Customer").ToList();
                
                return allCustomers;
            }
        }


        public Customer GetSingleCustomer(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allCustomers = db.QueryFirstOrDefault<Customer>(@"Select * 
                                                      from Customer
                                                       Where Id = @id",
                                                       new { id });

                return allCustomers;
            }
        }

        public Customer UpdateCustomer(int id, string firstName, string lastName, DateTime date, string email)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var updateCustomerCommand = db.CreateCommand();
                updateCustomerCommand.Parameters.AddWithValue("@id", id);
                updateCustomerCommand.CommandText = @"Update Customer
                            Set firstName = @firstName,
                                lastName = @lastName,
                                date = @date,
                                email = @email
                            Where id = @id";
                updateCustomerCommand.Parameters.AddWithValue("firstName", firstName);
                updateCustomerCommand.Parameters.AddWithValue("lastName", lastName);
                updateCustomerCommand.Parameters.AddWithValue("date", date);
                updateCustomerCommand.Parameters.AddWithValue("email", email);
                var numberOfRowsUpdated = updateCustomerCommand.ExecuteNonQuery();

                throw new Exception("Could not update user");
            }
        }
    }
}
