using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicineInfoController : ControllerBase
    {
        private readonly MedicineContext _context;
        public MedicineInfoController(MedicineContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicineInfo>>> GetMedicineInfo()
        {
            return await _context.MedicineInfo.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MedicineInfo>> GetMedicineWithId(int id)
        {
            return await _context.MedicineInfo.FindAsync(id);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<MedicineInfo>> ResetMedicine(MedicineInfo medicineInfo)
        {
            var medicine = await _context.MedicineInfo.FindAsync(medicineInfo.MedicineId);

            medicine.UsedPortion = medicineInfo.UsedPortion;

            medicine.UsedPortion = 0;

            await _context.SaveChangesAsync();

            return Ok(medicine.UsedPortion);
        }
    }
}