using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using DinoEmporium.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace DinoEmporium
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
            services.Configure<DbConfiguration>(Configuration); // we are telling ASP.Net how to build things on this line and the above line
            services.AddTransient<CustomerRespository>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.Configure<DbConfiguration>(Configuration);
            services.AddTransient<ProductRepository>();
            services.Configure<DbConfiguration>(Configuration);
            services.AddTransient<ProductTypeRepository>();
            services.Configure<DbConfiguration>(Configuration);
            services.AddTransient<ProductOrderRepository>();

            services.AddTransient<OrderRepository>();
            services.Configure<DbConfiguration>(Configuration);

            services.AddTransient<PaymentInformationRepository>();
            //services.AddTransient<UserRepository>();

            //services.AddTransient<ITargetRepository>(builder => builder.GetService<StubTargetRepository>());
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.IncludeErrorDetails = true;
                options.Authority = "https://securetoken.google.com/littlefoots-dino-emporium";
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = "https://securetoken.google.com/littlefoots-dino-emporium",
                    ValidateAudience = true,
                    ValidAudience = "littlefoots-dino-emporium",
                    ValidateLifetime = true
                };
            });
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseStaticFiles();
            app.UseCors(builder =>
            {
                builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials();
            });

            app.UseCors(builder =>
            {
                builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials();
            });

            app.UseMvc();
        }
    }
    public class DbConfiguration
    {
        public string ConnectionString { get; set; }
    }
}