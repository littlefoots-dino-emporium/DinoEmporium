using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Models
{
    public class CreateOrderRequest
    {
        public int Price { get; set; }
        public int CustomerId { get; set; }
        public int PaymentInformationId { get; set; }
    }
}
