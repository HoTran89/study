namespace Api.Context
{
    using System;
    [Serializable()]
    public class Category
    {
        public Category()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Key { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
    }
}