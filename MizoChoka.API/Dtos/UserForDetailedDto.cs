using System;
using System.Collections.Generic;
using MizoChoka.API.Models;

namespace MizoChoka.API.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Thuthar { get; set; }
        public DateTime Created { get; set; }
        public string RecipeName { get; set; }
        public string Ingredients { get; set; }
        public string Steps { get; set; }
        public string PhotoUrl { get; set; }
        public ICollection<PhotosForDetailedDto> Photos { get; set; }
    }
}