using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DinoEmporium.Data;
using DinoEmporium.Models;
using DinoEmporium.Validators;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DinoEmporium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductTypeController : ControllerBase
    {
        readonly CreateProductTypeRequestValidator _validator;
        readonly ProductTypeRepository _repository;

        public ProductTypeController(ProductTypeRepository repository)
        {
            _repository = repository;
            _validator = new CreateProductTypeRequestValidator();
        }

        //create new product type
        [HttpPost]
        public ActionResult AddProductType(CreateProductTypeRequest createRequest)
        {
            if (_validator.Validate(createRequest))
            {
                return BadRequest("All product types must have a name.");
            }

            var newProductType = _repository.AddProductType(createRequest.ProductName);

            return Created($"api/productType/{newProductType.Id}", newProductType);
        }

        //getting all productTypes
        [HttpGet("getAllTypes")]
        public ActionResult GetAllProductTypes()
        {
            var productTypes = _repository.GetAll();
            return Ok(productTypes);
        }
    }

    public class CreateProductTypeRequestValidator
    {
        public bool Validate(CreateProductTypeRequest requestToValidate)
        {
            return string.IsNullOrEmpty(requestToValidate.ProductName);
        }
    }
}