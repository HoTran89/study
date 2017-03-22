namespace Api.Service
{
    public class LoginResponse
    {
        public string Name { get; set; }
        public string Key { get; set; }
        public LoginResponse(string name, string key)
        {
            this.Name = name;
            this.Key = key;
        }
    }
}
