using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DinoEmporium.Data.CustomerProductRepo.cs;
using DinoEmporium.Models;
using DinoEmporium.Models.CustomerProduct;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DinoEmporium.Controllers.CustomerProductController
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerProductController : ControllerBase
    {
        readonly CustomerProductRepository _customerProductRepository;
        //readonly CreateCustomerProductRequestValidator _validator;

        // GET: /<controller>/
        public CustomerProductController()
        {
            //_validator = new CreateCustomerRequestValidator();
            _customerProductRepository = new CustomerProductRepository();
        }
        [HttpPost("register")]
        public ActionResult AddCustomer(CreateCustomerProductRequest createRequest)
        {
            //if (_validator.Validate(createRequest))
            //    return BadRequest(new { error = "customer must have a First Name, Last Name and Email " });
            var newCustomerProduct = _customerProductRepository.AddCustomerToProduct(createRequest.CustomerId, createRequest.ProductId);
            return Created($"/api/customerProduct/{newCustomerProduct.Id}", newCustomerProduct);

        }

        [HttpGet("allCustomerProduct")]
        public ActionResult GetAllCustomerProduct()
        {
            var allCustomerProduct = _customerProductRepository.GetAllCustomerProduct();
            return Ok(allCustomerProduct);
        }

        [HttpGet("getSingleCustomerProduct/{id}")]
        public ActionResult GetSingleCustomerProduct(int id)
        {
            var singleCustomerProduct = _customerProductRepository.GetSingleCustomerProduct(id);
            return Ok(singleCustomerProduct);
        }

        [HttpPut("updateCustomerProduct")]
        public ActionResult UpdateCustomerProduct(CustomerProduct customerProduct)
        {
            var updateCustomerProduct = _customerProductRepository.UpdateCustomerProduct(customerProduct);
            return Ok(updateCustomerProduct);
        }

        [HttpDelete("deleteCustomerProduct/{id}")]
        public ActionResult DeleteCustomerProduct(int id)
        {
            var deleteCustomerProduct = _customerProductRepository.DeleteCustomerProduct(id);
            return Ok(deleteCustomerProduct);
        }
    }
}
