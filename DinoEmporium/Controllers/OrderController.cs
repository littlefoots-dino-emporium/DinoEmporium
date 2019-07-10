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
            var newOrder = _repository.AddOrder(createRequest.Price, createRequest.PaymentInformationId, createRequest.CustomerId);

            return Created($"api/orders/{newOrder.Id}", newOrder);

        }

        [HttpGet("allorders/{id}")]
        public ActionResult GetAllOrders(int id)
        {
            var order = _repository.GetAllOrders(id);

            return Ok(order);
        }

        [HttpGet("{id}")]
        public ActionResult GetSingleOrder(int id)
        {
            var singleOrder = _repository.GetSingleOrder(id);

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