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


            ////[!] Configuration: JSON 파일의 데이터를 POCO 클래스에 주입
            //services.Configure<DotNetNoteSettings>(Configuration.GetSection("DotNetNoteSettings"));

            ////[!] 디렉터리 브라우징 기능 제공(옵션)
            //services.AddDirectoryBrowser();

            //// <TodoComponent>
            ////[1] 인-메모리 DB를 가상으로 만들어서 
            ////    TodoContext에서 지정한 모델 클래스 구조로 DB CRUD 구현 가능
            //services.AddDbContext<TodoContext>(
            //    options => options.UseInMemoryDatabase("TodoComponent"));
            //////[2] SQL Server에 데이터 저장(PM> Add-Migration -> PM> Update-Database)
            ////services.AddDbContext<TodoContext>(
            ////    options => options.UseSqlServer(Configuration["ConnectionString"]));
            //// </TodoComponent>


            ////[!] 인 메모리 데이터베이스 사용 사용자 관리
            //services.AddDbContext<AccountContext>(opt => opt.UseInMemoryDatabase("AccountContext"));


            ////[강의] AspNetCore21_MemberManagement_EF Core로 회원 입출력 기능 구현하기
            //services.AddDbContext<MemberDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));


            ////<세션 정보를 SQL Server에 저장하기 위한 절차>
            //services.AddDistributedSqlServerCache(options =>
            //{
            //    options.ConnectionString = Configuration["ConnectionString"];
            //    options.SchemaName = "dbo";
            //    options.TableName = "SQLSessions";
            //});
            ////</세션 정보를 SQL Server에 저장하기 위한 절차>



            ////[DNN] TempData[] 개체 사용
            //// In-Memory 캐싱 
            //services.AddMemoryCache();

            ////[!] 세션 개체 사용: Microsoft.AspNetCore.Session.dll
            ////services.AddSession(); 
            //// Session 개체 사용시 옵션 부여 
            //services.AddSession(options =>
            //{
            //    // 세션 유지 시간
            //    options.IdleTimeout = TimeSpan.FromMinutes(30);
            //});



            //#region ASP.NET Core 쿠키 인증: ConfigureServices()
            //////[1] ASP.NET Core 쿠키 인증: 단순형
            ////services.AddAuthentication("Cookies").AddCookie(options =>
            ////{
            ////    options.LoginPath = "/User/Login/";
            ////    options.AccessDeniedPath = "/User/Forbidden/";
            ////});

            //// _httpContextAccessor.IsAuthenticated 등 사용 
            //services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            ////[!] ASP.NET Core 쿠키 인증 및 JWT 인증: 기본형
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
            //    //options.Cookie.Name = "Cookies"; // 직접 이름 지정
            //    options.Cookie.Name =
            //        CookieAuthenticationDefaults.AuthenticationScheme; // 정의되어 있는 이름으로 지정
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
            //        // 보안키 문자열 길게 설정할 것
            //        IssuerSigningKey = new SymmetricSecurityKey(
            //            Encoding.UTF8.GetBytes(
            //                Configuration["SymmetricSecurityKey"])),
            //        ValidateLifetime = true,
            //        ClockSkew = TimeSpan.FromMinutes(5)
            //    };
            //});
            //#endregion



            ////[User][9] Policy 설정
            //services.AddAuthorization(options =>
            //{
            //    // Users Role이 있으면, Users Policy 부여
            //    options.AddPolicy("Users", policy => policy.RequireRole("Users"));

            //    // Users Role이 있고 UserId가 DotNetNoteSettings:SiteAdmin에 지정된 값(예를 들어 "Admin")이면 "Administrators" 부여
            //    // "UserId" - 대소문자 구분
            //    options.AddPolicy("Administrators", policy => policy.RequireRole("Users").RequireClaim("UserId", Configuration.GetSection("DotNetNoteSettings").GetSection("SiteAdmin").Value));
            //});



            ////[CORS] CORS 설정 공식 코드 1/2
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

            //// Identity 옵션 설정
            //services.Configure<IdentityOptions>(options =>
            //{
            //    // 암호 설정
            //    options.Password.RequiredLength = 8;
            //    options.Password.RequireDigit = true;
            //    options.Password.RequireLowercase = true;

            //    // 잠금 설정
            //    options.Lockout.MaxFailedAccessAttempts = 5;
            //    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(10);

            //    // 사용자 설정
            //    options.User.RequireUniqueEmail = true;
            //});



            //// ASP.NET Core 2.2 버전을 기준 버전으로 실행 
            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);


            //#region services.AddMvc() 추가 옵션들 보관(참고용)
            ////[MVC] MVC 서비스 추가 및 JSON 렌더링 옵션 지정
            ////services.AddMvc()
            ////    .AddXmlDataContractSerializerFormatters(); // XML로 Web API 결괏값 출력
            ////services.AddMvc(); // ASP.NET Core의 가장 중요한 서비스
            ////.AddJsonOptions(options =>
            ////{
            ////    //[Web API] JSON 속성 첫자 소문자: ASP.NET Core 1.0 기본
            ////    options.SerializerSettings.ContractResolver =
            ////    new CamelCasePropertyNamesContractResolver();
            ////});
            //////[!] Web API에서 JSON 결과물을 대문자(모델 클래스 형태)로 변경
            ////services.AddMvc().AddJsonOptions(
            ////    option => option.SerializerSettings.ContractResolver =
            ////        new Newtonsoft.Json.Serialization.DefaultContractResolver());

            //////[!]  JSON 첫자를 대문자로 표시(?)
            ////services.AddMvc() 
            ////    .AddJsonOptions(options =>
            ////    {
            ////        if (options.SerializerSettings.ContractResolver != null)
            ////        {
            ////            //[Web API] JSON 속성 첫자 대문자
            ////            var castedResolver = 
            ////                options.SerializerSettings.ContractResolver 
            ////                    as Newtonsoft.Json.Serialization
            ////                        .DefaultContractResolver;
            ////            // 모델 클래스에서 대문자로 지정되었으면 그대로 출력
            ////            castedResolver.NamingStrategy = null; 
            ////        }
            ////    });

            //////[!] 사용할 일은 없겠지만, JSON 대신에 XML을 반환하고자 한다면 아래 코드 사용
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

            //// <DashboardContext:새로운 DbContext 추가>
            //services.AddEntityFrameworkSqlServer().AddDbContext<DashboardContext>(options =>
            //    options.UseSqlServer(
            //        Configuration.GetConnectionString("DefaultConnection")));
            //// </DashboardContext:새로운 DbContext 추가>

            //// ============================================================================== // 
            //// 새로운 DbContext 추가
            //services.AddEntityFrameworkSqlServer().AddDbContext<DotNetNoteContext>(options =>
            //    options.UseSqlServer(
            //        Configuration.GetConnectionString("DefaultConnection")));
            //// ============================================================================== // 
            //// ============================================================================== // 
            //// 새로운 DbContext 추가
            //services.AddEntityFrameworkSqlServer().AddDbContext<TechContext>(options =>
            //    options.UseSqlServer(
            //        Configuration.GetConnectionString("DefaultConnection")));
            //// ============================================================================== // 

            //// 의존성 주입
            //services.AddTransient<ITwelveRepository, TwelveRepository>();

            //[DI] 의존성 주입(Dependency Injection)
            DependencyInjectionContainer(services);
        }

        /// <summary>
        /// 의존성 주입 관련 코드만 따로 모아서 관리
        /// - 리포지토리 등록
        /// </summary>
        private void DependencyInjectionContainer(IServiceCollection services)
        {
            //[?] ConfigureServices가 호출되기 전에는 DI(종속성 주입)가 설정되지 않습니다.

            //[DNN][!] Configuration 개체 주입: 
            //    IConfiguration 또는 IConfigurationRoot에 Configuration 개체 전달
            //    appsettings.json 파일의 데이터베이스 연결 문자열을 
            //    리포지토리 클래스에서 사용할 수 있도록 설정
            // IConfiguration 주입 -> Configuration의 인스턴스를 실행 
            services.AddSingleton<IConfiguration>(Configuration);

            // IBuyerRepository 개체를 생성자 매개 변수로 주입: BuyerRepository의 인스턴스를 생성 
            services.AddSingleton<IBuyerRepository>(new BuyerRepository(Configuration["ConnectionStrings:DefaultConnection"]));
            services.AddTransient<IVariableRepository, VariableRepositoryInMemory>();

            //[IdeaManager]: 아이디어 관리자: ASP.NET Core부터 Angular까지 A to Z 
            services.AddTransient<IIdeaRepository, IdeaRepository>();

            //[Demo] DemoFinder 의존성 주입: 기본 내장된 DI 컨테이너 사용
            services.AddTransient<DotNetNote.Models.DataFinder>();

            //[DI] InfoService 클래스 의존성 주입: 30.3
            services.AddSingleton<InfoService>();
            services.AddSingleton<IInfoService, InfoService>();

            //[DI(Dependency Injection)] 서비스 등록: 30.4
            //services.AddTransient<CopyrightService>();
            services.AddTransient<ICopyrightService, CopyrightService>();

            //[DI] @inject 키워드로 뷰에 직접 클래스의 속성 또는 메서드 값 출력
            services.AddSingleton<CopyrightService>();

            //[DI] GuidService 등록
            services.AddTransient<GuidService>();
            services.AddTransient<IGuidService, GuidService>();
            services.AddTransient<ITransientGuidService, TransientGuidService>();
            services.AddScoped<IScopedGuidService, ScopedGuidService>();
            services.AddSingleton<ISingletonGuidService, SingletonGuidService>();


            //[User][5] 회원 관리
            services.AddTransient<IUserRepository, UserRepository>();
            // LoginFailedManager
            services.AddTransient<ILoginFailedRepository, LoginFailedRepository>();
            services.AddTransient<ILoginFailedManager, LoginFailedManager>();


            //[CommunityCamp] 모듈 서비스 등록
            services.AddTransient<ICommunityCampJoinMemberRepository,
                CommunityCampJoinMemberRepository>();


            //[DNN][1] 게시판 관련 서비스 등록            
            //[1] 생성자에 문자열로 연결 문자열 지정
            //services.AddSingleton<INoteRepository>(
            //  new NoteRepository(
            //      Configuration["Data:DefaultConnection:ConnectionString"]));            
            //[2] 의존성 주입으로 Configuration 주입
            //[a] NoteRepository에서 IConfiguration으로 데이터베이스 연결 문자열 접근
            services.AddTransient<INoteRepository, NoteRepository>();
            //[b] CommentRepository의 생성자에 데이터베이스 연결문자열 직접 전송
            //services.AddSingleton<INoteCommentRepository>(
            //    new NoteCommentRepository(
            //        Configuration["ConnectionStrings:DefaultConnection"]));
            //[b] 위 코드를 아래 코드로 변경
            services.AddTransient<INoteCommentRepository, NoteCommentRepository>();


            services.AddTransient<MaximServiceRepository, MaximServiceRepository>();

            //[Tech] 기술 목록
            // services.AddTransient<ITechRepository, TechRepository>(); // Dapper 사용한 리포지토리 클래스 사용
            services.AddTransient<ITechRepositoryEf, TechRepositoryEf>(); // Entity Framework  사용한 리포지토리 클래스 사용

            //[Attendee] 참석자 목록 - 서비스 등록
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

            //[HeroManager]: 영웅 관리자: ASP.NET Core부터 Angular까지 A to Z
            services.AddTransient<IHeroRepository, HeroRepository>();

            // 캐릭터 설정
            services.AddTransient<ICharacterRepository, CharacterRepository>();

            // 포인트 관리
            //services.AddTransient<IPointRepository, PointRepository>(); // DB 사용
            services.AddTransient<IPointRepository, PointRepositoryInMemory>(); // 인-메모리 사용
            services.AddTransient<IPointLogRepository, PointLogRepository>();

            // 사용자 정보 보기 전용 컴포넌트
            services.AddTransient<IUserModelRepository, UserModelRepository>();

            // DotNetSale
            services.AddTransient<ICategoryRepository, CategoryRepositoryInMemory>();

            // <GoodsManager>
            // IGoodsRepository 주입 -> GoodsRepository의 인스턴스를 실행
            services.AddTransient<IGoodsRepository, GoodsRepository>();
            // </GoodsManager>

            // 의존성 해결: ISignRepository => SignRepositoryInMemory
            services.AddTransient<ISignRepository, SignRepositoryInMemory>();

            services.AddSingleton<ICompanyRepository>(new CompanyRepositoryAdo(Configuration["ConnectionStrings:DefaultConnection"]));
            //services.AddSingleton<ICompanyRepository>(new CompanyRepositoryDapper(Configuration["ConnectionStrings:DefaultConnection"]));
            //services.AddTransient<ICompanyRepository, CompanyRepositoryEntityFramework>();

            // <Notifications>
            // ----------------------------------------------------------------------------------------------------------------------------- // 
            // 종속성 해결: IMyNotificationRepository의 인스턴스를 MyNotificationRepository로 생성
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








            ////[!] 기본 제공 로깅
            ////loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            ////loggerFactory.AddDebug();
            ////loggerFactory.AddConsole(LogLevel.Debug);
            ////loggerFactory.AddDebug(LogLevel.Debug);

            ////[0] 파이프라인 영역: 
            ////  HTTP 파이프라인에 필요한 기능을 모듈 단위의 미들웨어로 추가해서 사용
            //if (env.IsDevelopment())
            //{
            //    //[!] 예외 발생시 좀 더 자세한 정보 표시
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
            ////[!] IServiceProvider를 사용하여 임시 데이터 저장하기
            //var todo = serviceProvider.GetService<TodoContext>();
            //todo.Todos.Add(new Todo { Id = -2, Title = "Angular", IsDone = false });
            //todo.Todos.Add(new Todo { Id = -1, Title = "ASP.NET Core", IsDone = true });
            //todo.SaveChanges();
            //// </TodoComponent>

            ////[DNN] TempData 개체 사용
            //app.UseSession(); //[!] 세션 개체 사용, 반드시 UseMvc() 이전에 호출되어야 함

            //// 미들웨어 추가

            ////// 사용자 정의 미들웨어 추가
            ////app.Use(async (ctx, next) => {
            ////    Console.WriteLine("Hello pipeline, {0}", ctx.Request.Path);
            ////    await next();
            ////});

            ////[!] 샘플 페이지 출력 미들웨어 
            ////app.UseWelcomePage(); // 하나의 샘플 페이지 출력

            ////[!] MIME 타입 설정 : FileExtensionContentTypeProvider 클래스 사용

            ////[!] 파일 서버 미들웨어 추가

            ////[!] UseDefaultFiles() 미들웨어: 기본 문서 제공
            ////DefaultFilesOptions options = new DefaultFilesOptions();
            ////options.DefaultFileNames.Clear();
            ////options.DefaultFileNames.Add("NewDefault.html");
            ////app.UseDefaultFiles(options);

            ////// #### Azure Web Apps에서 지원하지 않음 #### 
            //////[!] 정적 파일 폴더 추가 : Azure Web Apps에서 지원하지 않음
            ////// Microsoft.AspNetCore.StaticFiles 참조 추가
            ////// [a] wwwroot에 HTML/CSS/JavaScript/Images 등의 정적인 파일을 실행
            ////app.UseStaticFiles(
            ////    new StaticFileOptions()
            ////    {
            ////        FileProvider = new PhysicalFileProvider(
            ////            Path.Combine(Directory.GetCurrentDirectory()
            ////                , @"MyStaticFiles")),
            ////        RequestPath = new PathString("/StaticFiles")
            ////    }
            ////);

            //////[b] 특정 경로를 /ImageDir/ 로 매핑해서 사용하고자할 때
            ////app.UseStaticFiles(
            ////    new StaticFileOptions()
            ////    {
            ////        FileProvider = new PhysicalFileProvider(@"C:\Temp"),
            ////        RequestPath = new PathString("/ImageDir")
            ////    }
            ////);

            ////[!] UseFileServer() 미들웨어 : 정적 파일 및 디렉터리 브라우징 표시 등 
            ////app.UseFileServer(); // 아래 3개 미들웨어 포함
            ////[!] 정적 파일 실행을 위한 UseStaticFiles() 미들웨어 추가
            ////app.UseStaticFiles(); //[다]
            ////app.UseDirectoryBrowser();
            ////app.UseDefaultFiles(); 

            ////[!] 상태 코드 표시 
            ////app.UseStatusCodePages(); //[나] Status Code: 404; Not Found 형태로 상태 표시가 출력됨



            //app.UseHttpsRedirection();
            //app.UseStatusCodePages();
            //app.UseStaticFiles();
            //app.UseSpaStaticFiles();


            //#region ASP.NET Core 2.X 쿠키 인증: Configure()
            //// ASP.NET Core 2.X에서 쿠키 인증
            //app.UseAuthentication(); // 인증 미들웨어를 사용하겠다고 지정 
            ////app.UseCookiePolicy();
            //var cookiePolicyOptions = new CookiePolicyOptions() { MinimumSameSitePolicy = SameSiteMode.Strict };
            //app.UseCookiePolicy(cookiePolicyOptions);
            //#endregion


            //// 31.8.4. Serilog를 사용하여 로그 파일 기록하기 
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

            ////[CORS] CORS 설정 공식 코드 2/2
            //app.UseCors("AllowAnyOrigin"); // Policy 이름은 AddCores() 메서드의 내용과 동일해야 함 


            //// [!] 로그아웃 처리 
            //app.UseRouter(routes =>
            //{
            //    // ~/Logout 경로 요청하면 자동으로 로그아웃
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


            ////// [!] MVC 기본 라우트를 사용하는 미들웨어: 가장 빠르게 MVC 웹 설정하는 방법
            ////app.UseMvcWithDefaultRoute();


            //// [!] ASP.NET Core를 메인으로 실행할건지 Angular를 메인으로 실행할건지 결정 
            //var isMvc = true; // true면 ASP.NET Core, false면 Angular
            //if (isMvc)
            //{
            //    // [1] ASP.NET Core를 메인으로 사용할 때
            //    app.UseMvc(routes =>
            //    {
            //        routes.MapRoute(
            //            name: "default",
            //            template: "{controller=Home}/{action=Index}/{id?}");
            //    });
            //}
            //else
            //{
            //    // [2] Angular를 메인으로 사용할 때
            //    app.UseMvc(routes =>
            //    {
            //        routes.MapRoute(
            //            name: "default",
            //            template: "{controller}/{action=Index}/{id?}");
            //    });

            //    // *.csproj 파일에 아래 2줄 주석 처리
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

            //#region 인라인 미들웨어
            //// [!] 인라인 미들웨어 실행 후 다음 미들웨어로 파이프라인 이동
            //app.Use(async (context, next) =>
            //{
            //    if (context.Request.Path.Value.StartsWith("/EasterEgg"))
            //    {
            //        await context.Response.WriteAsync("Hello~ Easter Egg");
            //    }

            //    await next();
            //});

            //// [!] 인라인 미들웨어
            //app.Run(async (context) =>
            //{
            //    // 한글 출력을 지원하려면 아래 한 줄을 추가
            //    context.Response.Headers["Content-Type"] = "text/html; charset=utf-8";
            //    await context.Response.WriteAsync("안녕하세요.", System.Text.Encoding.UTF8);
            //});
            //#endregion







        }
    }
}
