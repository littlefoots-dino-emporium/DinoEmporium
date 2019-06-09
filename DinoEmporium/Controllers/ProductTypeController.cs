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

        //create new productType
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

        //get all productTypes
        [HttpGet("getAllTypes")]
        public ActionResult GetAllProductTypes()
        {
            var productTypes = _repository.GetAll();
            return Ok(productTypes);
        }

        //get all dinosaurs
        [HttpGet("dinosaurTypes")]
        public ActionResult GetAllDinosaurs()
        {
            var productNTypes = _repository.GetDinos();
            return Ok(productNTypes);
        }

        //get all sweaters
        [HttpGet("sweaterTypes")]
        public ActionResult GetAllSweaters()
        {
            var productNTypes = _repository.GetSweaters();
            return Ok(productNTypes);
        }

        //get all fences
        [HttpGet("fenceTypes")]
        public ActionResult GetAllFences()
        {
            var productNTypes = _repository.GetFences();
            return Ok(productNTypes);
        }

        //get single productType
        [HttpGet("getSingleType/{id}")]
        public ActionResult GetSingleType(int id)
        {
            var singleProductType = _repository.GetSingleProductType(id);
            return Ok(singleProductType);
        }

        //update productType
        [HttpPut("{id}")]
        public ActionResult UpdateProductType(ProductType productType)
        {
            var updateProductType = _repository.UpdateProductType(productType);
            return Ok(updateProductType);
        }

        //delete productType
        [HttpDelete("{id}")]
        public ActionResult DeleteSingleType(int id)
        {
            var deleteSingleType = _repository.DeleteSingleType(id);
            return Ok(deleteSingleType);
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