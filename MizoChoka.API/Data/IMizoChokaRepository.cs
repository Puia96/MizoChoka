using System.Collections.Generic;
using System.Threading.Tasks;
using MizoChoka.API.Models;

namespace MizoChoka.API.Data
{
    public interface IMizoChokaRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}