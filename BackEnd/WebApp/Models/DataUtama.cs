namespace WebApp.Models
{
    public class DataUtama
    {
        public int Id { get; set; }
        public string NomorPengajuan { get; set; }
        public DateTime TanggalPengajuan { get; set; }
        public string? NomorPendaftaran { get; set; }
        public DateTime? TanggalPendaftaran { get; set; }
        public string KantorPabean { get; set; }
        public string? SkepFasilitas { get; set; }
        public string JenisPIB { get; set; }
        public string JenisImpor { get; set; }
        public string CaraPembayaran { get; set; }
        public string Transaksi { get; set; }
    }
}
