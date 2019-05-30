using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Models.ProductOrder
{
    public class CreateProductOrderRequest
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int OrderId { get; set; }
        public bool IsInCart { get; set; }
    }
}
