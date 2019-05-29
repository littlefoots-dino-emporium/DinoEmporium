using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DinoEmporium.Data;
using DinoEmporium.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DinoEmporium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        readonly OrderRepository _repository;

        public OrderController(OrderRepository repository)
        {
            _repository = repository;
        }

        [HttpPost()]
        public ActionResult AddOrder(CreateOrderRequest createRequest)
        {
            //if (_validator.Validate(createRequest))
            //{
            //    return BadRequest(new { error = "users must have a username and password" });
            //}

            var newOrder = _repository.AddOrder(createRequest.Price);

            return Created($"api/users/{newOrder.Id}", newOrder);

        }

        [HttpGet("allorders")]
        public ActionResult GetAllOrders()
        {
            var order = _repository.GetAllOrders();

            return Ok(order);
        }

        [HttpGet("{id}")]
        public ActionResult GetSingleOrder(int id)
        {
            var singleOrder = _repository.GetSingleOrder(id);

            return Ok(singleOrder);
        }
    }
}