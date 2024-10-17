using System.Data;
using WebApp.Models;

namespace WebApp.Views
{
    public class DataPungutanView
    {
        public static List<Postingan> SelectPostItem()
        {
            try
            {
                List<Postingan> result = new List<Postingan>();

                string query = @"SELECT * FROM Content";

                DataTable dt = CRUD.ExecuteQuery(query);
                foreach (DataRow row in dt.Rows)
                {
                    Postingan tempData = new Postingan
                    {
                        Judul = (string)row["Judul"],
                        Deskripsi = (string)row["Deskripsi"],
                        Konten = (string)row["Konten"],
                        Image = (string)row["Image"],
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
        public static void UpdatePostItem(string Judul, int IDPostingan)
        {
            string query = @"Update Content set Judul = @judul where IDPostingan = @id";

            SqlParameter[] sqlParams = new SqlParameter[]
            {
            new SqlParameter("@judul", SqlDbType.VarChar){ Value = Judul },
            new SqlParameter("@id", SqlDbType.VarChar){ Value = IDPostingan },
            };

            CRUD.ExecuteNonQuery(query, sqlParams);
        }
    }
}
