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
        readonly ProductOrderRepository _productOrderRepository;
        readonly CreateProductRequestValidator _validator;

        public ProductOrderController(ProductOrderRepository repository)
        {
            _productOrderRepository = new ProductOrderRepository();
            _validator = new CreateProductRequestValidator();
        }

        //add productOrders
        [HttpPost]
        public ActionResult AddProductOrder(CreateProductOrderRequest createRequest)
        {
            var newProductOrder = _productOrderRepository.AddProductToOrder(createRequest.OrderId, createRequest.ProductId, createRequest.IsInCart);
            return Created($"/api/productOrder/{newProductOrder.Id}", newProductOrder);
        }

        //get productOrders
        [HttpGet("getProductOrders")]
        public ActionResult GetAllProductOrders()
        {
            var productOrders = _productOrderRepository.GetAll();
            return Ok(productOrders);
        }

        //get single productOrder

        //update productOrder

        //delete productOrder
    }

    //public class CreateProductOrderRequestValidator
    //{
    //    public bool Validate(CreateProductOrderRequest requestToValidate)
    //    {
    //    }
    //}
}
