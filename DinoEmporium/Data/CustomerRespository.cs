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

        public Customer AddCustomer(string firstName, string lastName, DateTime date, string email)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                // var addCustomerInformation = db.CreateCommand();

                var addCustomerInformation= db.QueryFirstOrDefault<Customer>(@"
                    Insert into customer (firstName,lastName, date, email)
                    Output inserted.*
                    Values(@firstName,@lastName,@date,@email)",
                    new { firstName, lastName, date, email });             

                if (addCustomerInformation != null)
                {
                    return addCustomerInformation;
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

        public Customer UpdateCustomer(Customer CustomerInformation)
        {
            using (var db = new SqlConnection(ConnectionString))
            {

                var updateCustomer = @"Update Customer
                            Set firstName = @firstName,
                                lastName = @lastName,
                                date = @date,
                                email = @email
                            Where id = @id";
           
                var numberOfRowsUpdated = db.Execute(updateCustomer, CustomerInformation);

                throw new Exception("Could not update user");
            }
        }
    }
}
