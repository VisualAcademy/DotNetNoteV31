using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace DotNetNote
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

        //public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
        //    WebHost.CreateDefaultBuilder(args)
        //        .ConfigureAppConfiguration(ConfigConfiguration)
        //            .UseStartup<Startup>();

        //public static void ConfigConfiguration(
        //    WebHostBuilderContext ctx, IConfigurationBuilder config)
        //{
        //    config.SetBasePath(Directory.GetCurrentDirectory())
        //    .AddJsonFile($"Settings\\DotNetNoteSettings.json", optional: true)
        //    .AddEnvironmentVariables();
        //}
    }
}
