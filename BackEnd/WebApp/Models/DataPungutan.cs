namespace WebApp.Models
{
    public class DataPungutan
    {
        public int Id { get; set; }
        public string Incoterms { get; set; }
        public string Valuta { get; set; }
        public decimal Kurs { get; set; }
        public decimal Nilai { get; set; }
        public decimal? BiayaTambahan { get; set; }
        public decimal? BiayaPengurang { get; set; }
        public bool VoluntaryDeclaration { get; set; }
        public decimal NilaiFOB { get; set; }
        public string AsuransiBayarDi { get; set; }
        public decimal? Asuransi { get; set; }
        public decimal? Freight { get; set; }
        public decimal CIF { get; set; }
        public decimal CIFRp { get; set; }
        public decimal Bruto { get; set; }
        public decimal Netto { get; set; }
        public string FlagKontainer { get; set; }
    }
}
