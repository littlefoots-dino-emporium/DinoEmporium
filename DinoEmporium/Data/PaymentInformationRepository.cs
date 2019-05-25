using Dapper;
using DinoEmporium.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace DinoEmporium.Data
{
    public class PaymentInformationRepository
    {
        const string ConnectionString = "Server=localhost;Database=Littlefoots;Trusted_Connection=True;";

        public PaymentInformation AddPaymentInformation(PaymentType paymentType, int accountNumber, string paymentFirstName, string paymentLastName)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newPaymentInformation = db.QueryFirstOrDefault<PaymentInformation>(@"
                    Insert into paymentinformation (paymentType,accountNumber, paymentFirstName,paymentLastName)
                    Output inserted.*
                    Values(@paymentType,@accountNumber,@paymentFirstName,@paymentLastName)",
                    new { paymentType, accountNumber, paymentFirstName, paymentLastName });

                if (newPaymentInformation != null)
                {
                    return newPaymentInformation;
                }
            }

            throw new Exception("No user created");
        }

        public IEnumerable<PaymentInformation> GetAllPaymentInformation()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allPaymentInformation = db.Query<PaymentInformation>("Select * from paymentinformation").ToList();

                return allPaymentInformation;
            }
        }

        public IEnumerable<PaymentInformation> LastUsedPaymentInformation()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var lastUsedPaymentInformation = db.Query<PaymentInformation>("SELECT TOP 1 * FROM paymentinformation ORDER BY ID DESC").ToList();

                return lastUsedPaymentInformation;
            }
        }
    }
}
