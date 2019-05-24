﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Models
{
    public class Products
    {
        public int Id { get; set; }
        public int ProductTypeId { get; set; }
        public decimal Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Quantity { get; set; }
        public int CustomerId { get; set; }
    }
}
