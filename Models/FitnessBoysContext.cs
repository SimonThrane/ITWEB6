using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace ITWEB6.Models
{
  public class FitnessBoysContext : IdentityDbContext
  {

    public FitnessBoysContext(DbContextOptions<FitnessBoysContext> options)
      : base(options)
    {

    }

    public DbSet<Activity> Activities { get; set; }
    public DbSet<Exercise> Exercises { get; set; }
    public DbSet<Program> Programs { get; set; }
    public DbSet<ProgramExercise> ProgramExercises { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);
      modelBuilder.Entity<Activity>().ToTable("Activity");
      modelBuilder.Entity<Exercise>().ToTable("Exercise");
      modelBuilder.Entity<Program>().ToTable("Program");
      modelBuilder.Entity<ProgramExercise>().ToTable("ProgramExercise");

      modelBuilder.Entity<Activity>()
        .HasKey(a => a.Id);

      modelBuilder.Entity<Exercise>()
        .HasKey(e => e.Id);

      modelBuilder.Entity<Program>()
        .HasKey(p => p.Id);

      modelBuilder.Entity<Program>()
        .HasOne(p => p.ApplicationUser)
        .WithMany(a => a.Programs)
        .HasForeignKey(p => p.ApplicationUserId);

      modelBuilder.Entity<ProgramExercise>()
        .HasKey(pe => new {pe.ExerciseId, pe.ProgramId});

      modelBuilder.Entity<ProgramExercise>()
        .HasOne(pe => pe.Exercise)
        .WithMany(e => e.ProgramExercises)
        .HasForeignKey(pe => pe.ExerciseId);

      modelBuilder.Entity<ProgramExercise>()
        .HasOne(pe => pe.Program)
        .WithMany(p => p.ProgramExercises)
        .HasForeignKey(pe => pe.ProgramId);
    }

    public void MigrateAndSeedData()
    {
      if (Database.GetPendingMigrations().Any())
      {
        Database.Migrate();
      }

      if (!Programs.Any())
      {
        ////Seed database here
        var exercises = new[]
        {
          new Exercise
          {
            Name = "Squat",
            Description = "Bøj i benene",
            IsRepetition = true,
            Repetitions = 12,
            Sets = 3
          },
          new Exercise
          {
            Name = "Dødløft",
            Description = "Hold ryggen rat",
            IsRepetition = true,
            Repetitions = 12,
            Sets = 3

          },
        };

        Exercises.AddRange(exercises);
        SaveChanges();


        var programs = new Program[]
        {
          new Program()
          {
            Name = "Monday mingle",
            CreateDate = DateTime.Now,
            Category = "Ben",
            Creater = "The mighty Thor"
          },
          new Program()
          {
            Name = "Tuesday madness",
            CreateDate = DateTime.Now,
            Category = "´Cardio",
            Creater = "The mighty Thor"
          },
          new Program()
          {
            Name = "Lazy saturday",
            CreateDate = DateTime.Now,
            Category = "Arme",
            Creater = "The viking warrior"
          },

        };
        Programs.AddRange(programs);

        SaveChanges();
        var programExercises = new List<ProgramExercise>();

        foreach (var program in programs)
        {
          var programExercise = new ProgramExercise()
          {
            Program = program,
            
            Exercise = exercises.FirstOrDefault()
          };
          programExercises.Add(programExercise);
        }
       
        ProgramExercises.AddRange(programExercises);

        SaveChanges();

      }

    }
  }
}

