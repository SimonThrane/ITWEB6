using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ITWEB6.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace ITWEB6
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvc();
            services.AddDbContext<FitnessBoysContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<FitnessBoysContext>();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = "Jwt";
                options.DefaultChallengeScheme = "Jwt";
            }).AddJwtBearer("Jwt", options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateAudience = false,
                    ValidateIssuer = false,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("verylongsecretword")),
                    ValidateLifetime = true, //validate the expiration and not before values
                    ClockSkew = TimeSpan.FromMinutes(5) //5 minute tolerance for the expiration
                };
            });

            // If you want to tweak Identity cookies, they're no longer part of IdentityOptions.
            services.ConfigureApplicationCookie(options => options.LoginPath = "/Account/LogIn");
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                //seed database
                using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    var context = serviceScope.ServiceProvider.GetService<FitnessBoysContext>();
                    context.MigrateAndSeedData();
                }
            }
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
