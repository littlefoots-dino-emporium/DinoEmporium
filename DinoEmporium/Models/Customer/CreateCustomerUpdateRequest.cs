using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Models
{
    public class CreateCustomerUpdateRequest
    {
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public DateTime Date { get; set; }
        public string Email { get; set; }
    }
}
