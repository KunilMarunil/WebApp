using Microsoft.Data.SqlClient;
using System.Data;
using WebApp.Models;

namespace WebApp.Views
{
    public class DataPungutanView
    {
        public static List<DataPungutan> SelectDataPungutan(int id)
        {
            try
            {
                List<DataPungutan> result = new List<DataPungutan>();

                string query = @"SELECT * FROM DataPungutan WHERE Id = @Id";

                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@Id", SqlDbType.VarChar){ Value = id },
                };

                DataTable dt = CRUD.ExecuteQuery(query, sqlParams);
                foreach (DataRow row in dt.Rows)
                {
                    DataPungutan tempData = new DataPungutan
                    {
                        Id = (int)row["Id"],
                        NilaiFOB = (decimal)row["NilaiFOB"],
                        CIF = (decimal)row["CIF"],
                        CIFRp = (decimal)row["CIFRp"],
                        Bruto = (decimal)row["Bruto"],
                        Netto = (decimal)row["Netto"],
                        FlagKontainer = (string)row["FlagKontainer"],
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