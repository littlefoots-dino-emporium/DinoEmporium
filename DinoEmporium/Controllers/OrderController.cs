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
            var newOrder = _repository.AddOrder(createRequest.Price);

            return Created($"api/orders/{newOrder.Id}", newOrder);

        }

        [HttpGet("allorders")]
        public ActionResult GetAllOrders()
        {
            var order = _repository.GetAllOrders();

            return Ok(order);
        }

        [HttpGet("{customerId}")]
        public ActionResult GetSingleOrder(int customerId)
        {
            var singleOrder = _repository.GetSingleOrder(customerId);

            return Ok(singleOrder);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateSingleOrder(Order order)
        {
            var updateSingleOrder = _repository.UpdateSingleOrder(order);
            return Ok(updateSingleOrder);
        }
    }
}