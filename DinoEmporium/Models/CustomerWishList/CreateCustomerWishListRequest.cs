using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Models.ProductWishList
{
    public class CreateCustomerWishListRequest
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int CustomerId { get; set; }
    }
}
