using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NotesAPI.Migrations
{
    public partial class AddChangedDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "changedDate",
                table: "Notes",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "changedDate",
                table: "Notes");
        }
    }
}
