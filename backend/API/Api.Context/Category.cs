namespace Api.Context
{
    using System;
    [Serializable()]
    public class Category
    {
        public Category()
        {

        }
        public Category(int id, string name, string thumbnail)
        {
            this.Id = id;
            this.Name = name;
            this.Thumbnail = thumbnail;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Thumbnail { get; set; }
    }
}