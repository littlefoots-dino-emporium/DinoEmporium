using Dapper;
using DinoEmporium.Models;
using DinoEmporium.Models.CustomerProduct;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Data.CustomerProductRepo.cs
{
    public class CustomerProductRepository
    {
        const string ConnectionString = "Server=localhost;Database=Littlefoots;Trusted_Connection=True;";

        public CustomerProduct AddCustomerToProduct(int customerId, int productId)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var joinCustomerWithProduct = db.QueryFirstOrDefault<CustomerProduct>(@"insert into [CustomerProduct](customerId, productId)
                                                                                        Output inserted.*
                                                                                        Values (@customerId, @productId)",
                                                                                        new { customerId, productId });

                if (joinCustomerWithProduct != null)
                {
                    return joinCustomerWithProduct;
                }
            }

            throw new Exception("could not add product and customer");
        }

        public IEnumerable<CustomerProduct> GetAllCustomerProduct()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getCustomerProduct = db.Query<CustomerProduct>(@"select * from customerProduct").ToList();
                return getCustomerProduct;
            }

        }

        public CustomerProduct GetSingleCustomerProduct(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getSingleCustomerProduct = db.QueryFirstOrDefault<CustomerProduct>(@"select * from customerProduct 
                                                                                        where id = @id",
                                                                                        new { id });
                return getSingleCustomerProduct;
            }
        }

        public CustomerProduct UpdateCustomerProduct(CustomerProduct CustomerProductInfo)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var updateCustomerProduct = db.QueryFirstOrDefault<CustomerProduct>(@"update CustomerProduct
                                                                                    Set customerId = @customerId,
                                                                                        productId = @productid
                                                                                        output inserted.*
                                                                                        where id = @id",
                                                                                        new { id = CustomerProductInfo.Id, customerId = CustomerProductInfo.CustomerId, productId = CustomerProductInfo.ProductId });
                return updateCustomerProduct;
            }
            throw new Exception("could not update");
        }

        public CustomerProduct DeleteCustomerProduct(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var deleteCustomerProduct = db.QueryFirstOrDefault<CustomerProduct>(@"delete
                                                                       from customerProduct
                                                                       where id = @id",
                                                                       new { id });
                return deleteCustomerProduct;
            }

        }

        public IEnumerable<CustomerProduct> GetCustomerProduct(string customerUid)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getSingleCustomerProduct = db.Query<CustomerProduct>(@"select * From CustomerProduct cp
                                                                                        Join Customer c on cp.CustomerId = c.id
                                                                                        join Product p on cp.ProductId = p.id
                                                                                        where c.customerUid = @customerUid",
                                                                                        new { customerUid }).ToList();
                return getSingleCustomerProduct;
            }
        }
    }
}
