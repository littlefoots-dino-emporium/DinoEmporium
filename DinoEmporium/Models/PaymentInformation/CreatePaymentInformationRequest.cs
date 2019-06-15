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
        public string PaymentFirstName { get; set; }
        public string PaymentLastName { get; set; }
        public string CustomerUid { get; set; }

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
