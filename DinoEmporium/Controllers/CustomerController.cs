﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DinoEmporium.Data;
using DinoEmporium.Models;
using DinoEmporium.Validator;
using Microsoft.AspNetCore.Mvc;

namespace DinoEmporium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        readonly CustomerRespository _customerRepository;
        readonly CreateCustomerRequestValidator _validator;
       // readonly CreateCustomerProductValidator _customerProductValidator;

        // GET: /<controller>/
        public CustomerController()
        {
            _validator = new CreateCustomerRequestValidator();
            _customerRepository = new CustomerRespository();
        }
        [HttpPost("register")]
        public ActionResult AddCustomer(CreateCustomerRequest createRequest)
        {
            if (_validator.Validate(createRequest))
                return BadRequest(new { error = "customer must have a First Name, Last Name and Email " });
            var newCustomer = _customerRepository.AddCustomer(createRequest.FirstName, createRequest.LastName, createRequest.Date, createRequest.Email);
            return Created($"/api/customers/{newCustomer.Id}", newCustomer);

        }

       //[HttpPost("addProduct")]
       //public ActionResult AddProductToCustomer(CreateCustomerProductRequst createRequest)
       // {
       //     //if (_validator.Validate(createRequest))
       //     //    return BadRequest(new { error = "must add prodct id and customer id" });
       //     var newCustomerProduct = _customerRepository.AddCustomerToProduct(createRequest.)
       // }

        [HttpGet("allCustomers")]
        public ActionResult GetCustomers()
        {
            var allCustomers = _customerRepository.GetCustomers();
            return Ok(allCustomers);
        }

        [HttpGet("{id}")]
        public ActionResult GetSingleCustomer(int id)
        {
            var singleCustomer = _customerRepository.GetSingleCustomer(id);
            return Ok(singleCustomer);
        }

        [HttpPut("updateCustomer/{id}")]
        public ActionResult UpdateCustomer(Customer customer)
        {
            var user = _customerRepository.UpdateCustomer(customer);
            return Ok(user);
        }
    }
}
