namespace Api.common.Helpers
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;

    public class FileHelpers
    {
        public static IList<string> GetFilesName(string prefix)
        {
            string binPath = AppDomain.CurrentDomain.RelativeSearchPath;
            IList<string> fileNames = Directory.GetFiles(binPath)
                .Where(name => Path.GetFileName(name).Contains(prefix) && name.EndsWith(".dll"))
                .Select(item => Path.GetFileNameWithoutExtension(item))
                .Distinct()
                .ToList();
            return fileNames;
        }
    }
}
