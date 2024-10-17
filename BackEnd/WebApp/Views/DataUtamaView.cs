using System.Data;
using WebApp.Models;
using Microsoft.Data.SqlClient;

namespace WebApp.Views
{
    public class DataUtamaView
    {
        public static List<DataUtama> SelectDataUtama(int id)
        {
            try
            {
                List<DataUtama> result = new List<DataUtama>();

                string query = @"SELECT * FROM DataUtama WHERE Id = @Id";

                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@Id", SqlDbType.VarChar){ Value = id },
                };

                DataTable dt = CRUD.ExecuteQuery(query, sqlParams);
                foreach (DataRow row in dt.Rows)
                {
                    DataUtama tempData = new DataUtama
                    {
                        Id = (int)row["Id"],
                        NomorPengajuan = (string)row["NomorPengajuan"],
                        TanggalPengajuan = (DateTime)row["TanggalPengajuan"],
                        NomorPendaftaran = (string)row["NomorPendaftaran"],
                        TanggalPendaftaran = (DateTime)row["TanggalPendaftaran"],
                        KantorPabean = (string)row["KantorPabean"],
                        SkepFasilitas = (string)row["SkepFasilitas"],
                        JenisPIB = (string)row["JenisPIB"],
                        JenisImpor = (string)row["JenisImpor"],
                        CaraPembayaran = (string)row["CaraPembayaran"],
                        Transaksi = (string)row["Transaksi"],
                    };

                    result.Add(tempData);
                }
                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
        //public static void UpdateDataUtama(DataUtama DataUtama)
        //{
        //    string query = @"Update DataUtama set Judul = @judul where NomorPengajuan = @id";

        //    SqlParameter[] sqlParams = new SqlParameter[]
        //    {
        //    new SqlParameter("@NomorPengajuan", SqlDbType.VarChar){ Value = DataUtama.NomorPengajuan },
        //    new SqlParameter("@judul", SqlDbType.VarChar){ Value = Judul },
        //    };

        //    CRUD.ExecuteNonQuery(query, sqlParams);
        //}
    }
}
