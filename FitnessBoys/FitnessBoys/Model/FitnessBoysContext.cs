using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace FitnessBoys.Model
{
    public class FitnessBoysContext: DbContext
    {

            public FitnessBoysContext(DbContextOptions<FitnessBoysContext> options)
                : base(options)
            {

            }

            public DbSet<Activity> Activities { get; set; }
            public DbSet<Exercise> Exercises { get; set; }
            public DbSet<Program> Programs { get; set; }


            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<Activity>().ToTable("Activity");
                modelBuilder.Entity<Exercise>().ToTable("Exercise");
                modelBuilder.Entity<Program>().ToTable("Program");


                modelBuilder.Entity<Activity>()
                    .HasKey(c => c.Id);

                modelBuilder.Entity<Exercise>()
                    .HasKey(c => c.Id);

                modelBuilder.Entity<Program>()
                    .HasKey(ct => ct.Id);

                modelBuilder.Entity<Program>()
                    .HasMany(c => c.Exercises);

                modelBuilder.Entity<Exercise>()
                    .HasMany()(cc => cc.Program)

        }

            public void MigrateAndSeedData()
            {
                if (Database.GetPendingMigrations().Any())
                {
                    Database.Migrate();
                }

                if (!Components.Any())
                {
                    //Seed database here
                    var imagePath = Path.Combine(Directory.GetCurrentDirectory(), @".\seedImages\pump.jpg");
                    var esImage = new EsImage
                    {
                        ImageMimeType = "image/jpeg",
                        ImageData = Util.Util.ImageToByteArray(imagePath, FREE_IMAGE_FORMAT.FIF_JPEG),
                        Thumbnail = Util.Util.ThumbNailByteArray(imagePath, FREE_IMAGE_FORMAT.FIF_JPEG)
                    };

                    var imagePath2 = Path.Combine(Directory.GetCurrentDirectory(), @"..\seedImages\pump2.jpg");
                    var esImage2 = new EsImage
                    {
                        ImageMimeType = "image/jpeg",
                        ImageData = Util.Util.ImageToByteArray(imagePath, FREE_IMAGE_FORMAT.FIF_JPEG),
                        Thumbnail = Util.Util.ThumbNailByteArray(imagePath, FREE_IMAGE_FORMAT.FIF_JPEG)
                    };

                    var componentTypes = new[]
                    {
                    new ComponentType
                    {
                        ComponentName = "Pumpe",
                        AdminComment = "",
                        ComponentInfo = "",
                        Datasheet = "Datasheet",
                        Status = ComponentTypeStatus.Available,
                        Location = "Kontoret",
                        Manufacturer = "Skolen",
                        WikiLink = "https://da.wikipedia.org/wiki/Pumpe",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Drehkolbenpumpe.jpg/220px-Drehkolbenpumpe.jpg",
                        Image = esImage
                    },
                    new ComponentType
                    {
                        ComponentName = "Pumpe2",
                        AdminComment = "",
                        ComponentInfo = "",
                        Datasheet = "Datasheet",
                        Status = ComponentTypeStatus.Available,
                        Location = "Kontoret",
                        Manufacturer = "Skolen",
                        WikiLink = "https://da.wikipedia.org/wiki/Pumpe",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Drehkolbenpumpe.jpg/220px-Drehkolbenpumpe.jpg",
                        Image = esImage2
                    }
                };

                    ComponentTypes.AddRange(componentTypes);
                    SaveChanges();


                    var components = new Component[]
                    {
                    new Component
                    {
                        AdminComment = "Pumpe",
                        ComponentNumber = 1,
                        SerialNo = "123456789",
                        Status = ComponentStatus.Available,
                        UserComment = "Lånt i 1 dag",
                        CurrentLoanInformationId = null
                    },
                    new Component
                    {
                        AdminComment = "Pumpe",
                        ComponentNumber = 2,
                        SerialNo = "234567891",
                        Status = ComponentStatus.ReservedAdmin,
                        UserComment = "Lånt i 2 dage",
                        CurrentLoanInformationId = null
                    },
                    new Component
                    {
                        AdminComment = "Pumpe",
                        ComponentNumber = 3,
                        SerialNo = "345678912",
                        Status = ComponentStatus.Available,
                        UserComment = "Lånt i 3 dage",
                        CurrentLoanInformationId = null
                    },
                    new Component
                    {
                        AdminComment = "Pumpe",
                        ComponentNumber = 4,
                        SerialNo = "456789123",
                        Status = ComponentStatus.Defect,
                        UserComment = "I stykker",
                        CurrentLoanInformationId = null
                    },
                    new Component
                    {
                        AdminComment = "Pumpe",
                        ComponentNumber = 5,
                        SerialNo = "567891234",
                        Status = ComponentStatus.Available,
                        UserComment = "Lånt i 5 dage",
                        CurrentLoanInformationId = null
                    }
                    };

                    var currentComponentType = ComponentTypes.FirstOrDefault();
                    foreach (var component in components)
                    {
                        currentComponentType.Components.Add(component);
                    }
                    SaveChanges();

                    var categories = new[]
                    {
                    new Category
                    {
                        Name = "Motordrevet"
                    },
                    new Category
                    {
                        Name = "Elektronik"
                    }
                };

                    Categories.AddRange(categories);
                    SaveChanges();

                    var componentTypeCategoies = new[]
                    {
                    new ComponentTypeCategory
                    {
                        ComponentType = ComponentTypes.FirstOrDefault(),
                        Category = Categories.FirstOrDefault()
                    }
                };

                    ComponentTypeCategory.AddRange(componentTypeCategoies);
                    SaveChanges();
                }
            }
        
    }
}
