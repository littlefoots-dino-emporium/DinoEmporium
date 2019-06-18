using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DinoEmporium.Data;
using DinoEmporium.Models;

namespace DinoEmporium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentInformationController : ControllerBase
    {
        readonly PaymentInformationRepository _repository;
        readonly CreatePaymentInformationRequestValidator _validator;

        public PaymentInformationController(PaymentInformationRepository repository)
        {
            _repository = repository;
            _validator = new CreatePaymentInformationRequestValidator();
        }

        [HttpPost("register")]
        public ActionResult AddPaymentInformation(CreatePaymentInformationRequest createRequest)
        {
            if (_validator.Validate(createRequest))
            {
                return BadRequest(new { error = "users must have a username and password" });
            }

            var newPaymentInformation = _repository.AddPaymentInformation(createRequest.PaymentType, createRequest.AccountNumber, createRequest.NameOnCard, createRequest.ExpirationDate);

            return Created($"api/paymentinformation/{newPaymentInformation.Id}", newPaymentInformation);

        }

        [HttpGet("allpayments")]
        public ActionResult GetAllPaymentInformation()
        {
            var paymentInformation = _repository.GetAllPaymentInformation();

            return Ok(paymentInformation);
        }

        [HttpGet("{customerUid}")]
        public ActionResult GetSinglePayment(string customerUid)
        {
            var previousPaymentInformation = _repository.GetSinglePayment(customerUid);

            return Ok(previousPaymentInformation);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateSinglePayment(PaymentInformation paymentInformation)
        {
            var updateSinglePayment = _repository.UpdateSinglePayment(paymentInformation);
            return Ok(updateSinglePayment);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteSinglePaymentInformation(int id)
        {
            var deletedProduct = _repository.DeleteSinglePayment(id);
            return Ok(deletedProduct);
        }

    }




    public class CreatePaymentInformationRequestValidator
    {
        public bool Validate(CreatePaymentInformationRequest requestToValidate)
        {
            return string.IsNullOrEmpty(requestToValidate.NameOnCard);
        }
    }
}