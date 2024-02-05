﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Movies.DAL.Migrations
{
    public partial class UpdateNew : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isneww",
                table: "Movies",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isneww",
                table: "Movies");
        }
    }
}
