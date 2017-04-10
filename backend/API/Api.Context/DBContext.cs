using System.Data.Entity;

namespace Api.Context
{
    public class DbContext : System.Data.Entity.DbContext
    {
        public DbContext() : base("Default")
        {
            Database.SetInitializer<DbContext>(new DropCreateDatabaseIfModelChanges<DbContext>());
        }
        public DbSet<Category> Categories { get; set; }
    }
}
