using DotNetNote.Common;
using DotNetNote.Components;
using DotNetNote.Data;
using DotNetNote.Models;
using DotNetNote.Models.Companies;
using DotNetNote.Models.Exams;
using DotNetNote.Models.Notifications;
using DotNetNote.Models.RecruitManager;
using DotNetNote.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;

namespace DotNetNote
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
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));
            services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<ApplicationDbContext>();
            services.AddControllersWithViews();
            services.AddRazorPages();


            ////[!] Configuration: JSON ������ �����͸� POCO Ŭ������ ����
            //services.Configure<DotNetNoteSettings>(Configuration.GetSection("DotNetNoteSettings"));

            ////[!] ���͸� ����¡ ��� ����(�ɼ�)
            //services.AddDirectoryBrowser();

            //// <TodoComponent>
            ////[1] ��-�޸� DB�� �������� ���� 
            ////    TodoContext���� ������ �� Ŭ���� ������ DB CRUD ���� ����
            //services.AddDbContext<TodoContext>(
            //    options => options.UseInMemoryDatabase("TodoComponent"));
            //////[2] SQL Server�� ������ ����(PM> Add-Migration -> PM> Update-Database)
            ////services.AddDbContext<TodoContext>(
            ////    options => options.UseSqlServer(Configuration["ConnectionString"]));
            //// </TodoComponent>


            ////[!] �� �޸� �����ͺ��̽� ��� ����� ����
            //services.AddDbContext<AccountContext>(opt => opt.UseInMemoryDatabase("AccountContext"));


            ////[����] AspNetCore21_MemberManagement_EF Core�� ȸ�� ����� ��� �����ϱ�
            //services.AddDbContext<MemberDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));


            ////<���� ������ SQL Server�� �����ϱ� ���� ����>
            //services.AddDistributedSqlServerCache(options =>
            //{
            //    options.ConnectionString = Configuration["ConnectionString"];
            //    options.SchemaName = "dbo";
            //    options.TableName = "SQLSessions";
            //});
            ////</���� ������ SQL Server�� �����ϱ� ���� ����>



            ////[DNN] TempData[] ��ü ���
            //// In-Memory ĳ�� 
            //services.AddMemoryCache();

            ////[!] ���� ��ü ���: Microsoft.AspNetCore.Session.dll
            ////services.AddSession(); 
            //// Session ��ü ���� �ɼ� �ο� 
            //services.AddSession(options =>
            //{
            //    // ���� ���� �ð�
            //    options.IdleTimeout = TimeSpan.FromMinutes(30);
            //});



            //#region ASP.NET Core ��Ű ����: ConfigureServices()
            //////[1] ASP.NET Core ��Ű ����: �ܼ���
            ////services.AddAuthentication("Cookies").AddCookie(options =>
            ////{
            ////    options.LoginPath = "/User/Login/";
            ////    options.AccessDeniedPath = "/User/Forbidden/";
            ////});

            //// _httpContextAccessor.IsAuthenticated �� ��� 
            //services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            ////[!] ASP.NET Core ��Ű ���� �� JWT ����: �⺻��
            ////services.AddAuthentication()
            ////services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
            //services.AddAuthentication(options =>
            //{
            //    options.DefaultAuthenticateScheme =
            //        CookieAuthenticationDefaults.AuthenticationScheme;
            //    options.DefaultSignInScheme =
            //        CookieAuthenticationDefaults.AuthenticationScheme;
            //    options.DefaultChallengeScheme =
            //        CookieAuthenticationDefaults.AuthenticationScheme;
            //})
            ////services.AddAuthentication(options =>
            ////{
            ////    options.DefaultAuthenticateScheme =
            ////        JwtBearerDefaults.AuthenticationScheme;
            ////    options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
            ////    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            ////})
            //.AddCookie(options =>
            //{
            //    options.LoginPath = new PathString("/User/Login");
            //    options.LogoutPath = "/User/Logout";
            //    options.AccessDeniedPath = new PathString("/User/Forbidden");
            //    //options.Cookie.Name = "Cookies"; // ���� �̸� ����
            //    options.Cookie.Name =
            //        CookieAuthenticationDefaults.AuthenticationScheme; // ���ǵǾ� �ִ� �̸����� ����
            //    options.Cookie.HttpOnly = false;
            //    options.Cookie.SameSite = SameSiteMode.None;
            //    options.SlidingExpiration = true;
            //})
            //.AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
            //{
            //    options.RequireHttpsMetadata = false;
            //    options.SaveToken = true;
            //    options.TokenValidationParameters = new TokenValidationParameters
            //    {
            //        ValidateAudience = false,
            //        ValidateIssuer = false,
            //        ValidateIssuerSigningKey = true,
            //        // ����Ű ���ڿ� ��� ������ ��
            //        IssuerSigningKey = new SymmetricSecurityKey(
            //            Encoding.UTF8.GetBytes(
            //                Configuration["SymmetricSecurityKey"])),
            //        ValidateLifetime = true,
            //        ClockSkew = TimeSpan.FromMinutes(5)
            //    };
            //});
            //#endregion



            ////[User][9] Policy ����
            //services.AddAuthorization(options =>
            //{
            //    // Users Role�� ������, Users Policy �ο�
            //    options.AddPolicy("Users", policy => policy.RequireRole("Users"));

            //    // Users Role�� �ְ� UserId�� DotNetNoteSettings:SiteAdmin�� ������ ��(���� ��� "Admin")�̸� "Administrators" �ο�
            //    // "UserId" - ��ҹ��� ����
            //    options.AddPolicy("Administrators", policy => policy.RequireRole("Users").RequireClaim("UserId", Configuration.GetSection("DotNetNoteSettings").GetSection("SiteAdmin").Value));
            //});



            ////[CORS] CORS ���� ���� �ڵ� 1/2
            //services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowAnyOrigin",
            //        builder => builder
            //        .AllowAnyOrigin()
            //        .AllowAnyMethod()
            //        .AllowAnyHeader());
            //});



            //services.Configure<CookiePolicyOptions>(options =>
            //{
            //    // This lambda determines whether user consent for non-essential cookies is needed for a given request.
            //    options.CheckConsentNeeded = context => true;
            //    options.MinimumSameSitePolicy = SameSiteMode.None;
            //});

            //services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            //services.AddDefaultIdentity<IdentityUser>().AddDefaultUI(UIFramework.Bootstrap4).AddEntityFrameworkStores<ApplicationDbContext>();

            //// Identity �ɼ� ����
            //services.Configure<IdentityOptions>(options =>
            //{
            //    // ��ȣ ����
            //    options.Password.RequiredLength = 8;
            //    options.Password.RequireDigit = true;
            //    options.Password.RequireLowercase = true;

            //    // ��� ����
            //    options.Lockout.MaxFailedAccessAttempts = 5;
            //    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(10);

            //    // ����� ����
            //    options.User.RequireUniqueEmail = true;
            //});



            //// ASP.NET Core 2.2 ������ ���� �������� ���� 
            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);


            //#region services.AddMvc() �߰� �ɼǵ� ����(�����)
            ////[MVC] MVC ���� �߰� �� JSON ������ �ɼ� ����
            ////services.AddMvc()
            ////    .AddXmlDataContractSerializerFormatters(); // XML�� Web API �ᱣ�� ���
            ////services.AddMvc(); // ASP.NET Core�� ���� �߿��� ����
            ////.AddJsonOptions(options =>
            ////{
            ////    //[Web API] JSON �Ӽ� ù�� �ҹ���: ASP.NET Core 1.0 �⺻
            ////    options.SerializerSettings.ContractResolver =
            ////    new CamelCasePropertyNamesContractResolver();
            ////});
            //////[!] Web API���� JSON ������� �빮��(�� Ŭ���� ����)�� ����
            ////services.AddMvc().AddJsonOptions(
            ////    option => option.SerializerSettings.ContractResolver =
            ////        new Newtonsoft.Json.Serialization.DefaultContractResolver());

            //////[!]  JSON ù�ڸ� �빮�ڷ� ǥ��(?)
            ////services.AddMvc() 
            ////    .AddJsonOptions(options =>
            ////    {
            ////        if (options.SerializerSettings.ContractResolver != null)
            ////        {
            ////            //[Web API] JSON �Ӽ� ù�� �빮��
            ////            var castedResolver = 
            ////                options.SerializerSettings.ContractResolver 
            ////                    as Newtonsoft.Json.Serialization
            ////                        .DefaultContractResolver;
            ////            // �� Ŭ�������� �빮�ڷ� �����Ǿ����� �״�� ���
            ////            castedResolver.NamingStrategy = null; 
            ////        }
            ////    });

            //////[!] ����� ���� ��������, JSON ��ſ� XML�� ��ȯ�ϰ��� �Ѵٸ� �Ʒ� �ڵ� ���
            ////services.AddMvc(options =>
            ////{
            ////    options.OutputFormatters.Add(new XmlDataContractSerializerOutputFormatter());
            ////}); 
            //#endregion


            //// In production, the Angular files will be served from this directory
            //services.AddSpaStaticFiles(configuration =>
            //{
            //    configuration.RootPath = "ClientApp/dist";
            //});

            //// <DashboardContext:���ο� DbContext �߰�>
            //services.AddEntityFrameworkSqlServer().AddDbContext<DashboardContext>(options =>
            //    options.UseSqlServer(
            //        Configuration.GetConnectionString("DefaultConnection")));
            //// </DashboardContext:���ο� DbContext �߰�>

            //// ============================================================================== // 
            //// ���ο� DbContext �߰�
            //services.AddEntityFrameworkSqlServer().AddDbContext<DotNetNoteContext>(options =>
            //    options.UseSqlServer(
            //        Configuration.GetConnectionString("DefaultConnection")));
            //// ============================================================================== // 
            //// ============================================================================== // 
            //// ���ο� DbContext �߰�
            //services.AddEntityFrameworkSqlServer().AddDbContext<TechContext>(options =>
            //    options.UseSqlServer(
            //        Configuration.GetConnectionString("DefaultConnection")));
            //// ============================================================================== // 

            //// ������ ����
            //services.AddTransient<ITwelveRepository, TwelveRepository>();

            //[DI] ������ ����(Dependency Injection)
            DependencyInjectionContainer(services);
        }

        /// <summary>
        /// ������ ���� ���� �ڵ常 ���� ��Ƽ� ����
        /// - �������丮 ���
        /// </summary>
        private void DependencyInjectionContainer(IServiceCollection services)
        {
            //[?] ConfigureServices�� ȣ��Ǳ� ������ DI(���Ӽ� ����)�� �������� �ʽ��ϴ�.

            //[DNN][!] Configuration ��ü ����: 
            //    IConfiguration �Ǵ� IConfigurationRoot�� Configuration ��ü ����
            //    appsettings.json ������ �����ͺ��̽� ���� ���ڿ��� 
            //    �������丮 Ŭ�������� ����� �� �ֵ��� ����
            // IConfiguration ���� -> Configuration�� �ν��Ͻ��� ���� 
            services.AddSingleton<IConfiguration>(Configuration);

            // IBuyerRepository ��ü�� ������ �Ű� ������ ����: BuyerRepository�� �ν��Ͻ��� ���� 
            services.AddSingleton<IBuyerRepository>(new BuyerRepository(Configuration["ConnectionStrings:DefaultConnection"]));
            services.AddTransient<IVariableRepository, VariableRepositoryInMemory>();

            //[IdeaManager]: ���̵�� ������: ASP.NET Core���� Angular���� A to Z 
            services.AddTransient<IIdeaRepository, IdeaRepository>();

            //[Demo] DemoFinder ������ ����: �⺻ ����� DI �����̳� ���
            services.AddTransient<DotNetNote.Models.DataFinder>();

            //[DI] InfoService Ŭ���� ������ ����: 30.3
            services.AddSingleton<InfoService>();
            services.AddSingleton<IInfoService, InfoService>();

            //[DI(Dependency Injection)] ���� ���: 30.4
            //services.AddTransient<CopyrightService>();
            services.AddTransient<ICopyrightService, CopyrightService>();

            //[DI] @inject Ű����� �信 ���� Ŭ������ �Ӽ� �Ǵ� �޼��� �� ���
            services.AddSingleton<CopyrightService>();

            //[DI] GuidService ���
            services.AddTransient<GuidService>();
            services.AddTransient<IGuidService, GuidService>();
            services.AddTransient<ITransientGuidService, TransientGuidService>();
            services.AddScoped<IScopedGuidService, ScopedGuidService>();
            services.AddSingleton<ISingletonGuidService, SingletonGuidService>();


            //[User][5] ȸ�� ����
            services.AddTransient<IUserRepository, UserRepository>();
            // LoginFailedManager
            services.AddTransient<ILoginFailedRepository, LoginFailedRepository>();
            services.AddTransient<ILoginFailedManager, LoginFailedManager>();


            //[CommunityCamp] ��� ���� ���
            services.AddTransient<ICommunityCampJoinMemberRepository,
                CommunityCampJoinMemberRepository>();


            //[DNN][1] �Խ��� ���� ���� ���            
            //[1] �����ڿ� ���ڿ��� ���� ���ڿ� ����
            //services.AddSingleton<INoteRepository>(
            //  new NoteRepository(
            //      Configuration["Data:DefaultConnection:ConnectionString"]));            
            //[2] ������ �������� Configuration ����
            //[a] NoteRepository���� IConfiguration���� �����ͺ��̽� ���� ���ڿ� ����
            services.AddTransient<INoteRepository, NoteRepository>();
            //[b] CommentRepository�� �����ڿ� �����ͺ��̽� ���Ṯ�ڿ� ���� ����
            //services.AddSingleton<INoteCommentRepository>(
            //    new NoteCommentRepository(
            //        Configuration["ConnectionStrings:DefaultConnection"]));
            //[b] �� �ڵ带 �Ʒ� �ڵ�� ����
            services.AddTransient<INoteCommentRepository, NoteCommentRepository>();


            services.AddTransient<MaximServiceRepository, MaximServiceRepository>();

            //[Tech] ��� ���
            // services.AddTransient<ITechRepository, TechRepository>(); // Dapper ����� �������丮 Ŭ���� ���
            services.AddTransient<ITechRepositoryEf, TechRepositoryEf>(); // Entity Framework  ����� �������丮 Ŭ���� ���

            //[Attendee] ������ ��� - ���� ���
            services.AddTransient<IAttendeeRepository, AttendeeRepository>();

            //[RecruitManager] 
            services.AddTransient<
                IRecruitSettingRepository, RecruitSettingRepository>();
            services.AddTransient<IRecruitRegistrationRepository,
                RecruitRegistrationRepository>();

            //[One], [Two], ... 
            services.AddTransient<IOneRepository, OneRepository>();
            services.AddTransient<ITwoRepository, TwoRepository>();
            services.AddTransient<IThreeRepository, ThreeRepository>();
            services.AddTransient<IFourRepository, FourRepository>();
            services.AddTransient<IFiveRepository, FiveRepository>();

            // Exams: Questions, ... 
            services.AddTransient<IQuestionRepository, QuestionRepository>();

            //[HeroManager]: ���� ������: ASP.NET Core���� Angular���� A to Z
            services.AddTransient<IHeroRepository, HeroRepository>();

            // ĳ���� ����
            services.AddTransient<ICharacterRepository, CharacterRepository>();

            // ����Ʈ ����
            //services.AddTransient<IPointRepository, PointRepository>(); // DB ���
            services.AddTransient<IPointRepository, PointRepositoryInMemory>(); // ��-�޸� ���
            services.AddTransient<IPointLogRepository, PointLogRepository>();

            // ����� ���� ���� ���� ������Ʈ
            services.AddTransient<IUserModelRepository, UserModelRepository>();

            // DotNetSale
            services.AddTransient<ICategoryRepository, CategoryRepositoryInMemory>();

            // <GoodsManager>
            // IGoodsRepository ���� -> GoodsRepository�� �ν��Ͻ��� ����
            services.AddTransient<IGoodsRepository, GoodsRepository>();
            // </GoodsManager>

            // ������ �ذ�: ISignRepository => SignRepositoryInMemory
            services.AddTransient<ISignRepository, SignRepositoryInMemory>();

            services.AddSingleton<ICompanyRepository>(new CompanyRepositoryAdo(Configuration["ConnectionStrings:DefaultConnection"]));
            //services.AddSingleton<ICompanyRepository>(new CompanyRepositoryDapper(Configuration["ConnectionStrings:DefaultConnection"]));
            //services.AddTransient<ICompanyRepository, CompanyRepositoryEntityFramework>();

            // <Notifications>
            // ----------------------------------------------------------------------------------------------------------------------------- // 
            // ���Ӽ� �ذ�: IMyNotificationRepository�� �ν��Ͻ��� MyNotificationRepository�� ����
            services.AddSingleton<IMyNotificationRepository>(new MyNotificationRepository(Configuration["ConnectionString"]));
            // ----------------------------------------------------------------------------------------------------------------------------- // 
            // </Notifications>

            services.AddTransient<IUrlRepository, UrlRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env,
            ILoggerFactory loggerFactory,
            IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });








            ////[!] �⺻ ���� �α�
            ////loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            ////loggerFactory.AddDebug();
            ////loggerFactory.AddConsole(LogLevel.Debug);
            ////loggerFactory.AddDebug(LogLevel.Debug);

            ////[0] ���������� ����: 
            ////  HTTP ���������ο� �ʿ��� ����� ��� ������ �̵����� �߰��ؼ� ���
            //if (env.IsDevelopment())
            //{
            //    //[!] ���� �߻��� �� �� �ڼ��� ���� ǥ��
            //    app.UseDeveloperExceptionPage();
            //    app.UseDatabaseErrorPage();
            //}
            //else
            //{
            //    app.UseExceptionHandler("/Error");
            //    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            //    //app.UseHsts();
            //}


            //// <TodoComponent>
            ////[!] IServiceProvider�� ����Ͽ� �ӽ� ������ �����ϱ�
            //var todo = serviceProvider.GetService<TodoContext>();
            //todo.Todos.Add(new Todo { Id = -2, Title = "Angular", IsDone = false });
            //todo.Todos.Add(new Todo { Id = -1, Title = "ASP.NET Core", IsDone = true });
            //todo.SaveChanges();
            //// </TodoComponent>

            ////[DNN] TempData ��ü ���
            //app.UseSession(); //[!] ���� ��ü ���, �ݵ�� UseMvc() ������ ȣ��Ǿ�� ��

            //// �̵���� �߰�

            ////// ����� ���� �̵���� �߰�
            ////app.Use(async (ctx, next) => {
            ////    Console.WriteLine("Hello pipeline, {0}", ctx.Request.Path);
            ////    await next();
            ////});

            ////[!] ���� ������ ��� �̵���� 
            ////app.UseWelcomePage(); // �ϳ��� ���� ������ ���

            ////[!] MIME Ÿ�� ���� : FileExtensionContentTypeProvider Ŭ���� ���

            ////[!] ���� ���� �̵���� �߰�

            ////[!] UseDefaultFiles() �̵����: �⺻ ���� ����
            ////DefaultFilesOptions options = new DefaultFilesOptions();
            ////options.DefaultFileNames.Clear();
            ////options.DefaultFileNames.Add("NewDefault.html");
            ////app.UseDefaultFiles(options);

            ////// #### Azure Web Apps���� �������� ���� #### 
            //////[!] ���� ���� ���� �߰� : Azure Web Apps���� �������� ����
            ////// Microsoft.AspNetCore.StaticFiles ���� �߰�
            ////// [a] wwwroot�� HTML/CSS/JavaScript/Images ���� ������ ������ ����
            ////app.UseStaticFiles(
            ////    new StaticFileOptions()
            ////    {
            ////        FileProvider = new PhysicalFileProvider(
            ////            Path.Combine(Directory.GetCurrentDirectory()
            ////                , @"MyStaticFiles")),
            ////        RequestPath = new PathString("/StaticFiles")
            ////    }
            ////);

            //////[b] Ư�� ��θ� /ImageDir/ �� �����ؼ� ����ϰ����� ��
            ////app.UseStaticFiles(
            ////    new StaticFileOptions()
            ////    {
            ////        FileProvider = new PhysicalFileProvider(@"C:\Temp"),
            ////        RequestPath = new PathString("/ImageDir")
            ////    }
            ////);

            ////[!] UseFileServer() �̵���� : ���� ���� �� ���͸� ����¡ ǥ�� �� 
            ////app.UseFileServer(); // �Ʒ� 3�� �̵���� ����
            ////[!] ���� ���� ������ ���� UseStaticFiles() �̵���� �߰�
            ////app.UseStaticFiles(); //[��]
            ////app.UseDirectoryBrowser();
            ////app.UseDefaultFiles(); 

            ////[!] ���� �ڵ� ǥ�� 
            ////app.UseStatusCodePages(); //[��] Status Code: 404; Not Found ���·� ���� ǥ�ð� ��µ�



            //app.UseHttpsRedirection();
            //app.UseStatusCodePages();
            //app.UseStaticFiles();
            //app.UseSpaStaticFiles();


            //#region ASP.NET Core 2.X ��Ű ����: Configure()
            //// ASP.NET Core 2.X���� ��Ű ����
            //app.UseAuthentication(); // ���� �̵��� ����ϰڴٰ� ���� 
            ////app.UseCookiePolicy();
            //var cookiePolicyOptions = new CookiePolicyOptions() { MinimumSameSitePolicy = SameSiteMode.Strict };
            //app.UseCookiePolicy(cookiePolicyOptions);
            //#endregion


            //// 31.8.4. Serilog�� ����Ͽ� �α� ���� ����ϱ� 
            //Log.Logger = new LoggerConfiguration()
            //    .MinimumLevel.Debug()
            //    //.WriteTo.RollingFile(Path.Combine(env.ContentRootPath, "DnnLogs-{Date}.txt"))
            //    .WriteTo.RollingFile(Path.Combine(env.ContentRootPath + "\\Logs", "DnnLogs-{Date}.txt"))
            //    .CreateLogger();
            ////loggerFactory.AddSerilog();


            ////[!] CORS
            ////app.UseCors(options => options.WithOrigins(
            ////    "http://dotnetnote.azurewebsites.net/api/values"));
            ////app.UseCors(options => options.AllowAnyOrigin().WithMethods("GET"));

            ////[CORS] CORS ���� ���� �ڵ� 2/2
            //app.UseCors("AllowAnyOrigin"); // Policy �̸��� AddCores() �޼����� ����� �����ؾ� �� 


            //// [!] �α׾ƿ� ó�� 
            //app.UseRouter(routes =>
            //{
            //    // ~/Logout ��� ��û�ϸ� �ڵ����� �α׾ƿ�
            //    routes.MapGet("Logout", async context =>
            //    {
            //        await context.SignOutAsync("Cookies");
            //        context.Response.Redirect("/");
            //    });
            //    routes.MapPost("Logout", async context =>
            //    {
            //        await context.SignOutAsync("Cookies");
            //        context.Response.Redirect("/");
            //    });
            //});


            ////// [!] MVC �⺻ ���Ʈ�� ����ϴ� �̵����: ���� ������ MVC �� �����ϴ� ���
            ////app.UseMvcWithDefaultRoute();


            //// [!] ASP.NET Core�� �������� �����Ұ��� Angular�� �������� �����Ұ��� ���� 
            //var isMvc = true; // true�� ASP.NET Core, false�� Angular
            //if (isMvc)
            //{
            //    // [1] ASP.NET Core�� �������� ����� ��
            //    app.UseMvc(routes =>
            //    {
            //        routes.MapRoute(
            //            name: "default",
            //            template: "{controller=Home}/{action=Index}/{id?}");
            //    });
            //}
            //else
            //{
            //    // [2] Angular�� �������� ����� ��
            //    app.UseMvc(routes =>
            //    {
            //        routes.MapRoute(
            //            name: "default",
            //            template: "{controller}/{action=Index}/{id?}");
            //    });

            //    // *.csproj ���Ͽ� �Ʒ� 2�� �ּ� ó��
            //    //< !--Set this to true if you enable server-side prerendering-- >
            //    //< BuildServerSideRenderer > false </ BuildServerSideRenderer >
            //    //< !--< UserSecretsId > DotNetNote </ UserSecretsId >
            //    //< AspNetCoreHostingModel > InProcess </ AspNetCoreHostingModel > -->
            //    app.UseSpa(spa =>
            //    {
            //        // To learn more about options for serving an Angular SPA from ASP.NET Core,
            //        // see https://go.microsoft.com/fwlink/?linkid=864501

            //        spa.Options.SourcePath = "ClientApp";

            //        if (env.IsDevelopment())
            //        {
            //            spa.UseAngularCliServer(npmScript: "start");
            //        }
            //    });
            //}

            //#region �ζ��� �̵����
            //// [!] �ζ��� �̵���� ���� �� ���� �̵����� ���������� �̵�
            //app.Use(async (context, next) =>
            //{
            //    if (context.Request.Path.Value.StartsWith("/EasterEgg"))
            //    {
            //        await context.Response.WriteAsync("Hello~ Easter Egg");
            //    }

            //    await next();
            //});

            //// [!] �ζ��� �̵����
            //app.Run(async (context) =>
            //{
            //    // �ѱ� ����� �����Ϸ��� �Ʒ� �� ���� �߰�
            //    context.Response.Headers["Content-Type"] = "text/html; charset=utf-8";
            //    await context.Response.WriteAsync("�ȳ��ϼ���.", System.Text.Encoding.UTF8);
            //});
            //#endregion







        }
    }
}
