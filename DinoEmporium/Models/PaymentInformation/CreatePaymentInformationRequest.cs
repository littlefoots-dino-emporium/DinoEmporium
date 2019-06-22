using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Models
{
    public class CreatePaymentInformationRequest
    {
        public PaymentType PaymentType { get; set; }
        public int AccountNumber { get; set; }
        public int CustomerId { get; set; }
        public string NameOnCard { get; set; }
        public string CustomerUid { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string Address { get; set; }

    }

    public enum PaymentType
    {
        Mastercard,
        Visa,
        AmericanExpress,
        Discover,
        BankAccount,
        PayPal,
    }
}
