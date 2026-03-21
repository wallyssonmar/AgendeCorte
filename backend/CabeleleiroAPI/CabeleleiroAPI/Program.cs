using CabeleleiroAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

string? stringDeConexao = builder.Configuration.GetConnectionString("StringConexaoBanco");

if(stringDeConexao is null)
{
    throw new Exception("A string de conexão não foi definida no appsettings");
}

builder.Services.AddDbContext<CabeleleiroApiContext>(opt => opt.UseNpgsql(stringDeConexao));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
