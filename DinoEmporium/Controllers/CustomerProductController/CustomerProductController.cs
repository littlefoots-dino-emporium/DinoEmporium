using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DinoEmporium.Data.CustomerProductRepo.cs;
using DinoEmporium.Models;
using DinoEmporium.Models.CustomerProduct;
using Microsoft.AspNetCore.Mvc;


namespace DinoEmporium.Controllers.CustomerProductController
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerProductController : ControllerBase
    {
        readonly CustomerProductRepository _customerProductRepository;

        // GET: /<controller>/
        public CustomerProductController()
        {
            _customerProductRepository = new CustomerProductRepository();
        }
        [HttpPost("register")]
        public ActionResult AddCustomer(CreateCustomerProductRequest createRequest)
        {
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

        [HttpDelete("deleteCustomerProduct/{productId}/{customerId}")]
        public ActionResult DeleteCustomerProduct(int productId, int customerId)
        {
            var deleteCustomerProduct = _customerProductRepository.DeleteSingleCustomerProduct(productId, customerId);
            return Ok(deleteCustomerProduct);
        }

        [HttpGet("getCustomerProducts/{customerUid}")]
        public ActionResult GetCustomerProduct(string customerUid)
        {
            var getCustomerProducts = _customerProductRepository.GetCustomerProduct(customerUid);
            return Ok(getCustomerProducts);
        }
    }
}
