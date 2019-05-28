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
