using System.Data.Entity;

namespace Api.Context
{
    public class DbContext : System.Data.Entity.DbContext
    {
        public DbContext() : base("Default")
        {

        }
        public DbSet<Category> Categories { get; set; }
    }
}
