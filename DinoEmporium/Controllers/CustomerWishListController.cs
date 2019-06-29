using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DinoEmporium.Data;
using DinoEmporium.Models.ProductWishList;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DinoEmporium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerWishListController : ControllerBase
    {
        readonly CustomerWishListRepository _customerProductRepository;

        // GET: /<controller>/
        public CustomerWishListController()
        {
            _customerProductRepository = new CustomerWishListRepository();
        }
        [HttpPost("register")]
        public ActionResult AddProductToWishList(CreateCustomerWishListRequest createRequest)
        {
            var newCustomerProduct = _customerProductRepository.AddProductToWishList(createRequest.CustomerId, createRequest.ProductId);
            return Created($"/api/customerProduct/{newCustomerProduct.Id}", newCustomerProduct);

        }

        [HttpGet("getCustomerWishList/{customerUid}")]
        public ActionResult GetCustomerWishList(string customerUid)
        {
            var getCustomerWishList = _customerProductRepository.GetCustomerWishList(customerUid);
            return Ok(getCustomerWishList);
        }
    }
}