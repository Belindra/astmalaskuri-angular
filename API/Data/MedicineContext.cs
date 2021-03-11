using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Data
{
    public class MedicineContext : DbContext
    {
        public MedicineContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<MedicineInfo> MedicineInfo { get; set; }
        public DbSet<EventInfo> EventInfo { get; set; }
    }
}