using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Models
{
    public class CreateProductRequest
    {
        public int Id { get; set; }
        public decimal Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
    }
}