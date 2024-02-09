//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { contactsEntity } from "./db/contacts.entity";
import { tasksEntity } from "./db/tasks.entity";
import { credentialsEntity } from "./db/credentials.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, contactsEntity, tasksEntity, credentialsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"contacts":[{"name":"name 1","mobile":"mobile 1","email":"email 1","id":22},{"name":"name 2","mobile":"mobile 2","email":"email 2","id":17},{"name":"name 3","mobile":"mobile 3","email":"email 3","id":2},{"name":"name 4","mobile":"mobile 4","email":"email 4","id":16},{"name":"name 5","mobile":"mobile 5","email":"email 5","id":59}],"tasks":[{"taskTitle":"taskTitle 1","description":"description 1","scheduledStartDate":"2023-10-23T13:19:45.816Z","scheduledEndDate":"2024-03-19T06:16:21.691Z","actualEndDate":"2024-09-21T20:41:15.305Z","id":17},{"taskTitle":"taskTitle 2","description":"description 2","scheduledStartDate":"2024-08-08T13:05:29.415Z","scheduledEndDate":"2023-06-20T09:56:40.630Z","actualEndDate":"2024-02-15T19:58:22.856Z","id":72},{"taskTitle":"taskTitle 3","description":"description 3","scheduledStartDate":"2024-05-05T23:58:56.093Z","scheduledEndDate":"2023-06-24T04:54:52.641Z","actualEndDate":"2023-06-06T00:04:35.784Z","id":22},{"taskTitle":"taskTitle 4","description":"description 4","scheduledStartDate":"2025-01-09T14:08:28.772Z","scheduledEndDate":"2024-10-24T04:27:50.353Z","actualEndDate":"2024-06-26T18:02:01.953Z","id":73},{"taskTitle":"taskTitle 5","description":"description 5","scheduledStartDate":"2023-12-16T22:25:10.688Z","scheduledEndDate":"2024-04-16T07:34:31.690Z","actualEndDate":"2024-02-21T22:11:05.524Z","id":20}],"credentials":[{"url":"url 1","username":"username 1","password":"password 1","id":21},{"url":"url 2","username":"username 2","password":"password 2","id":28},{"url":"url 3","username":"username 3","password":"password 3","id":67},{"url":"url 4","username":"username 4","password":"password 4","id":17},{"url":"url 5","username":"username 5","password":"password 5","id":71}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("contactsEntity", data.contacts);
await this.SeedResource("tasksEntity", data.tasks);
await this.SeedResource("credentialsEntity", data.credentials); 
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

