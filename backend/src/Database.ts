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
    let data: any = {"Projects":[{"projectName":"Banking software upgrade","description":"Upgrade the Internal Banking System"},{"projectName":"Customer Portal Redesign","description":"Redesign of Online Customer banking portal"},{"projectName":"Regulatory Compliance check","description":"Ensure banking regulations compliance"}],"Tasks":[{"taskName":"Identify upgrade requirements","description":"Identify the requirements for the banking software upgrade"},{"taskName":"Design new customer portal","description":"Design the new user interface for customer portal"},{"taskName":"Review banking regulations","description":"Review latest banking regulations for compliance"}],"Assignees":[{"assigneeName":"John Doe","role":"Project Manager","email":"johndoe@example.com"},{"assigneeName":"Jane Smith","role":"Designer","email":"janesmith@example.com"},{"assigneeName":"Robert Johnson","role":"Compliance Officer","email":"robertjohnson@example.com"}]};
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

