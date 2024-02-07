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
    let data: any = {"friends":[{"name":"name 1","birthday":"2024-03-11T18:13:30.938Z","starSign":"starSign 1","gender":"gender 1","email":"email 1","id":97},{"name":"name 2","birthday":"2024-04-10T20:06:51.660Z","starSign":"starSign 2","gender":"gender 2","email":"email 2","id":99},{"name":"name 3","birthday":"2024-12-12T11:54:57.622Z","starSign":"starSign 3","gender":"gender 3","email":"email 3","id":69},{"name":"name 4","birthday":"2023-11-15T21:50:58.112Z","starSign":"starSign 4","gender":"gender 4","email":"email 4","id":14},{"name":"name 5","birthday":"2024-04-07T16:49:18.403Z","starSign":"starSign 5","gender":"gender 5","email":"email 5","id":16}],"websites":[{"siteName":"siteName 1","url":"url 1","rating":1,"id":40},{"siteName":"siteName 2","url":"url 2","rating":2,"id":64},{"siteName":"siteName 3","url":"url 3","rating":3,"id":56},{"siteName":"siteName 4","url":"url 4","rating":4,"id":16},{"siteName":"siteName 5","url":"url 5","rating":5,"id":10}],"credentials":[{"url":"url 1","username":"username 1","password":"password 1","id":75},{"url":"url 2","username":"username 2","password":"password 2","id":70},{"url":"url 3","username":"username 3","password":"password 3","id":54},{"url":"url 4","username":"username 4","password":"password 4","id":96},{"url":"url 5","username":"username 5","password":"password 5","id":99}]};
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

