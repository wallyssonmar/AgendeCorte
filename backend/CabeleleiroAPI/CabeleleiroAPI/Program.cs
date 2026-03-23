using CabeleleiroAPI.Data;
using CabeleleiroAPI.Models;
using CabeleleiroAPI.Repositories;
using CabeleleiroAPI.Services;
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

builder.Services.AddDbContext<AgendamentoApiContext>(opt => opt.UseNpgsql(stringDeConexao));

//Adição dos repositórios para Injeção de dependencias

builder.Services.AddScoped<AgendamentoRepository>();

//Adição dos services para Injeção de dependencias

builder.Services.AddScoped<AgendamentoService>();

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
