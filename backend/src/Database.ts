//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { ProjectsEntity } from "./db/Projects.entity";
import { TasksEntity } from "./db/Tasks.entity";
import { AssigneesEntity } from "./db/Assignees.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, ProjectsEntity, TasksEntity, AssigneesEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Projects":[{"projectName":"New Banking App","description":"Create a new app for online banking.","startDate":"2023-01-01","endDate":"2023-12-31","status":"In Progress"},{"projectName":"ATM Maintenance","description":"Routine maintenance of ATM systems across the nation.","startDate":"2023-06-01","endDate":"2023-08-31","status":"Not Started"}],"Tasks":[{"taskName":"Design UI","description":"Design the user interface for the new banking app.","dueDate":"2023-02-01","status":"Not Started","priority":"High","assigneeName":"John Doe","projectName":"New Banking App"},{"taskName":"Coordinate ATM Maintenance","description":"Schedule and coordinate ATM maintenance activities.","dueDate":"2023-07-01","status":"Not Started","priority":"Medium","assigneeName":"Jane Doe","projectName":"ATM Maintenance"}],"Assignees":[{"assigneeName":"John Doe","role":"Designer","email":"johndoe@example.com"},{"assigneeName":"Jane Doe","role":"Project Manager","email":"janedoe@example.com"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("ProjectsEntity", data.Projects);
await this.SeedResource("TasksEntity", data.Tasks);
await this.SeedResource("AssigneesEntity", data.Assignees); 
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    }else{
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository("SettingsEntity");
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: "isSeeded",
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table '+resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}

