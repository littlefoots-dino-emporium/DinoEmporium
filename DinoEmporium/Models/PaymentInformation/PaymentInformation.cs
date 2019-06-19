using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Models
{
    public class PaymentInformation
    {
        public int Id { get; set; }
        public PaymentType PaymentType { get; set; }
        public int AccountNumber { get; set; }
        public int CustomerId { get; set; }
        public string CustomerUid { get; set; }
        public string NameOnCard { get; set; }
        public DateTime ExpirationDate { get; set; }

    }
}
