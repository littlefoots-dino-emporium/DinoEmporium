using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Models
{
    public class CreateCustomerRequest
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public DateTime Date { get; set; }
        public string Email { get; set; }
        public string CustomerUid { get; set; }

    }
}
