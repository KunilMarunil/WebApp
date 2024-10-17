namespace WebApp.Models
{
    public class DataEntitas
    {
        public int Id { get; set; }
        public string JenisPemberitahuan { get; set; }
        public string JenisIdentitas { get; set; }
        public string? NIB { get; set; }
        public bool TanpaNIB { get; set; }
        public string NoIdentitas { get; set; }
        public string NamaPerusahaan { get; set; }
        public string Provinsi { get; set; }
        public string KotaKabupaten { get; set; }
        public string Kecamatan { get; set; }
        public string KodePos { get; set; }
        public string? RTRW { get; set; }
        public string Telephone { get; set; }
        public string Email { get; set; }
        public string Status { get; set; }
    }
}
