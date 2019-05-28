using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DinoEmporium.Data;
using DinoEmporium.Models.ProductOrder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DinoEmporium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductOrderController : ControllerBase
    {
        readonly ProductOrderRepository _repository;
        readonly CreateProductRequestValidator _validator;

        public ProductOrderController(ProductOrderRepository repository)
        {
            _repository = repository;
            _validator = new CreateProductRequestValidator();
        }

        [HttpPost]
        public ActionResult AddProduct(CreateProductOrderRequest createRequest)
        {
            //if (_validator.Validate(createRequest))
            //{
            //    return BadRequest("All product information must be filled out.");
            //}

            var newProduct = _repository.AddProductOrder(createRequest.IsInCart);

            return Created($"api/product/{newProduct.Id}", newProduct);
        }

        //get productOrders
        [HttpGet("getProductOrders")]
        public ActionResult GetAllProductOrders()
        {
            var productOrders = _repository.GetAll();
            return Ok(productOrders);
        }
    }

    //public class CreateProductOrderRequestValidator
    //{
    //    public bool Validate(CreateProductOrderRequest requestToValidate)
    //    {
    //    }
    //}
}
