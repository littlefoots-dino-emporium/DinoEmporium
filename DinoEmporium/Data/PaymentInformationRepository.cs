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

        public PaymentInformation AddPaymentInformation(PaymentType paymentType, int accountNumber, string nameOnCard, DateTime expirationDate)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newPaymentInformation = db.QueryFirstOrDefault<PaymentInformation>(@"
                    Insert into paymentinformation (paymentType,accountNumber, nameOnCard, expirationDate)
                    Output inserted.*
                    Values(@paymentType,@accountNumber,@nameOnCard, @expirationDate)",
                    new { paymentType, accountNumber, nameOnCard, expirationDate});

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

        public PaymentInformation GetSinglePayment(string customerId)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var singlePayment = db.QueryFirstOrDefault<PaymentInformation>(@"select * from paymentinformation where customerId = @customerId", new { customerId });

                return singlePayment;
            }
        }


        public PaymentInformation DeleteSinglePayment(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var deletedPayment = db.QueryFirstOrDefault<PaymentInformation>(@"delete
                                                                       from PaymentInformation
                                                                       where id = @id",
                                                                       new { id });
                return deletedPayment;
            }
        }

        public PaymentInformation UpdateSinglePayment(PaymentInformation singlePayment)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var updatedPayment = db.QueryFirstOrDefault<PaymentInformation>(@"update PaymentInformation
                                                                        set paymentType = @paymentType,
                                                                        accountNumber = @accountNumber,
                                                                        paymentFirstName = @paymentFirstName,
                                                                        paymentLastName = @paymentLastName
                                                                        output inserted.*
                                                                        where id = @id",
                                                                        new
                                                                        {
                                                                            id = singlePayment.Id,
                                                                            paymentType = singlePayment.PaymentType,
                                                                            accountNumber = singlePayment.AccountNumber,
                                                                            paymentFirstName = singlePayment.PaymentFirstName,
                                                                            paymentLastName = singlePayment.PaymentLastName
                                                                        });
                return updatedPayment;
            }
            throw new System.Exception("Could not update Payment.");
        }
    }
}
