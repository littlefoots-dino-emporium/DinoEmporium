using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Models.CustomerProduct
{
    public class CustomerProduct
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int CustomerId { get; set; }
        public string Title { get; set; }
        public string Size { get; set; }
        public string Image { get; set; }
        public int Price { get; set; }
    }
}
