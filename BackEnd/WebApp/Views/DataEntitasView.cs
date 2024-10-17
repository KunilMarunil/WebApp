using System.Data;
using WebApp.Models;
using Microsoft.Data.SqlClient;

namespace WebApp.Views
{
    public class DataEntitasView
    {
        public static List<DataEntitas> SelectDataEntitas(int id)
        {
            try
            {
                List<DataEntitas> result = new List<DataEntitas>();

                string query = @"SELECT * FROM DataEntitas WHERE Id = @Id";

                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@Id", SqlDbType.VarChar){ Value = id },
                };

                DataTable dt = CRUD.ExecuteQuery(query, sqlParams);
                foreach (DataRow row in dt.Rows)
                {
                    DataEntitas tempData = new DataEntitas
                    {
                        Id = (int)row["Id"],
                        JenisPemberitahuan = (string)row["JenisPemberitahuan"],
                        JenisIdentitas = (string)row["JenisIdentitas"],
                        NIB = (string)row["NIB"],
                        TanpaNIB = (bool)row["TanpaNIB"],
                        NoIdentitas = (string)row["NoIdentitas"],
                        NamaPerusahaan = (string)row["NamaPerusahaan"],
                        Provinsi = (string)row["Provinsi"],
                        KotaKabupaten = (string)row["KotaKabupaten"],
                        Kecamatan = (string)row["Kecamatan"],
                        KodePos = (string)row["KodePos"],
                        RTRW = (string)row["RTRW"],
                        Telephone = (string)row["Telephone"],
                        Email = (string)row["Email"],
                        Status = (string)row["Status"],
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
        //public static void UpdatePostItem(string Judul, int IDPostingan)
        //{
        //    string query = @"Update Content set Judul = @judul where IDPostingan = @id";

        //    SqlParameter[] sqlParams = new SqlParameter[]
        //    {
        //    new SqlParameter("@judul", SqlDbType.VarChar){ Value = Judul },
        //    new SqlParameter("@id", SqlDbType.VarChar){ Value = IDPostingan },
        //    };

        //    CRUD.ExecuteNonQuery(query, sqlParams);
        //}
    }
}
