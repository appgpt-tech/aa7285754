//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { friendsEntity } from "./db/friends.entity";
import { websitesEntity } from "./db/websites.entity";
import { credentialsEntity } from "./db/credentials.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, friendsEntity, websitesEntity, credentialsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"friends":[{"name":"name 1","birthday":"2024-08-22T06:05:15.435Z","starSign":"starSign 1","gender":"gender 1","email":"email 1","id":99},{"name":"name 2","birthday":"2023-09-30T22:25:21.322Z","starSign":"starSign 2","gender":"gender 2","email":"email 2","id":41},{"name":"name 3","birthday":"2024-01-21T13:06:12.030Z","starSign":"starSign 3","gender":"gender 3","email":"email 3","id":20},{"name":"name 4","birthday":"2023-09-12T16:51:50.373Z","starSign":"starSign 4","gender":"gender 4","email":"email 4","id":59},{"name":"name 5","birthday":"2024-09-18T14:00:16.300Z","starSign":"starSign 5","gender":"gender 5","email":"email 5","id":88}],"websites":[{"siteName":"siteName 1","url":"url 1","rating":1,"id":54},{"siteName":"siteName 2","url":"url 2","rating":2,"id":39},{"siteName":"siteName 3","url":"url 3","rating":3,"id":46},{"siteName":"siteName 4","url":"url 4","rating":4,"id":55},{"siteName":"siteName 5","url":"url 5","rating":5,"id":82}],"credentials":[{"url":"url 1","username":"username 1","password":"password 1","id":78},{"url":"url 2","username":"username 2","password":"password 2","id":80},{"url":"url 3","username":"username 3","password":"password 3","id":79},{"url":"url 4","username":"username 4","password":"password 4","id":3},{"url":"url 5","username":"username 5","password":"password 5","id":49}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("friendsEntity", data.friends);
await this.SeedResource("websitesEntity", data.websites);
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

