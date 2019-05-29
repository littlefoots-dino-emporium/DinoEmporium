using DinoEmporium.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinoEmporium.Validator
{
    public class CreateCustomerRequestValidator
    {
        public bool Validate(CreateCustomerProductRequst requestToValidate)
        {
            return (string.IsNullOrEmpty(requestToValidate.FirstName)
                || string.IsNullOrEmpty(requestToValidate.LastName)
                || string.IsNullOrEmpty(requestToValidate.Email));
        }
    }
}
