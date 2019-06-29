using Dapper;
using DinoEmporium.Models.ProductWishList;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Data
{
    public class CustomerWishListRepository
    {
        const string ConnectionString = "Server=localhost;Database=Littlefoots;Trusted_Connection=True;";

        public CustomerWishList AddProductToWishList(int customerId, int productId)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var joinProductWithWishList = db.QueryFirstOrDefault<CustomerWishList>(@"insert into [CustomerWishList](customerId, productId)
                                                                                        Output inserted.*
                                                                                        Values (@customerId, @productId)",
                                                                                        new { customerId, productId });

                if (joinProductWithWishList != null)
                {
                    return joinProductWithWishList;
                }
            }

            throw new Exception("could not add product and customer");
        }

        public IEnumerable<CustomerWishList> GetCustomerWishList(string customerUid)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getSingleCustomerWishList = db.Query<CustomerWishList>(@"select * From CustomerWishList wl
                                                                                        Join Customer c on wl.CustomerId = c.id
                                                                                        join Product p on wl.ProductId = p.id
                                                                                        where c.customerUid = @customerUid",
                                                                                        new { customerUid }).ToList();
                return getSingleCustomerWishList;
            }
        }
    }
}
