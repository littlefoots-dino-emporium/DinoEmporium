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

        //creating a new product
        [HttpPost]
        public ActionResult AddProduct(CreateProductRequest createRequest)
        {
            if (_validator.Validate(createRequest))
            {
                return BadRequest("All product information must be filled out.");
            }

            var newProduct = _repository.AddProduct(createRequest.Price, createRequest.ProductTypeId, createRequest.Title,  createRequest.Description, createRequest.Quantity);

            return Created($"api/product/{newProduct.Id}", newProduct);
        }

        //getting all products
        [HttpGet("getAllProducts")]
        public ActionResult GetAllProducts()
        {
            var products = _repository.GetAll();
            return Ok(products);
        }

        //get single product 
        [HttpGet("getSingleProduct/{id}")]
        public ActionResult GetSingleProduct(int id)
        {
            var singleProduct = _repository.GetSingleProduct(id);
            return Ok(singleProduct);
        }

        //update product
        [HttpPut("{id}")]
        public ActionResult UpdateSingleProduct(Product product)
        {
            var updateSingleProduct = _repository.UpdateSingleProduct(product);
            return Ok(updateSingleProduct);
        }

        //delete product
        [HttpDelete("{id}")]
        public ActionResult DeleteSingleProduct(int id)
        {
            var deletedProduct = _repository.DeleteSingleProduct(id);
            return Ok(deletedProduct);
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