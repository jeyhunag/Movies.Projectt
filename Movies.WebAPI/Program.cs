using Microsoft.EntityFrameworkCore;
using Movies.BLL.Mapping;
using Movies.DAL.Data;
using Movies.WebAdmin.Helper.CookieExtensions;
using Movies.WebAdmin.Helper.Extensions;
using Movies.WebAdmin.Helper.FlluentExtensions;
using Movies.WebAdmin.Helper.IdentityExtensions;
using Movies.WebAdmin.Helper.LogExtensions;
using System.Configuration;

namespace Movies.WebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<AppDbContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnectionString"));
                options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            });
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //Fluent Validations Extension
            builder.Services.AddFluentServices();

            //Identity AppRole,AppUser Security 
            builder.Services.AddIdentityServices();

            //Cookie Service
            builder.Services.AddCookieServices();

            //Importand Logger Extensions
            builder.Services.AddImpotandLogServices();

            //Mapping
            builder.Services.AddAutoMapper(typeof(CustomMapping));

            //Generic Services Extensions
            builder.Services.AddServices();

            //Generic Repostory Extensions
            builder.Services.AddRepositories();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
          //  if (app.Environment.IsDevelopment())
         //   {
                app.UseSwagger();
                app.UseSwaggerUI();
               
          //  }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}