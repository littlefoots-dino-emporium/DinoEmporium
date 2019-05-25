using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DinoEmporium.Data;
using DinoEmporium.Models;
using DinoEmporium.Validators;
using Microsoft.AspNetCore.Mvc;

namespace DinoEmporium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        readonly CreateProductRequestValidator _validator;
        readonly ProductRepository _repository;

        public ProductController(ProductRepository repository)
        {
            _repository = repository;
            _validator = new CreateProductRequestValidator();
        }


        [HttpPost]
        public ActionResult AddProduct(CreateProductRequest createRequest)
        {
            if (_validator.Validate(createRequest))
            {
                return BadRequest("All product information must be filled out.");
            }

            var newProduct = _repository.AddProduct(createRequest.Price, createRequest.Title, createRequest.Description, createRequest.Quantity);

            return Created($"api/product/{newProduct.Id}", newProduct);
        }

        [HttpGet]
        public ActionResult GetAllProducts()
        {
            var products = _repository.GetAll();
            return Ok(products);
        }
    }

    public class CreateProductRequestValidator
    {
        public bool Validate(CreateProductRequest requestToValidate)
        {
            return string.IsNullOrEmpty(requestToValidate.Title)
                || string.IsNullOrEmpty(requestToValidate.Description);
        }
    }
}