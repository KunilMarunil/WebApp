CREATE TABLE DataUtama (
    Id INT PRIMARY KEY IDENTITY(1,1),
    NomorPengajuan NVARCHAR(50) NOT NULL,
    TanggalPengajuan DATE NOT NULL,
    NomorPendaftaran NVARCHAR(50) NULL,
    TanggalPendaftaran DATE NULL,
    KantorPabean NVARCHAR(100) NOT NULL,
    SkepFasilitas NVARCHAR(100) NULL,
    JenisPIB NVARCHAR(50) NOT NULL,
    JenisImpor NVARCHAR(50) NOT NULL,
    CaraPembayaran NVARCHAR(50) NOT NULL,
    Transaksi NVARCHAR(100) NOT NULL
);
