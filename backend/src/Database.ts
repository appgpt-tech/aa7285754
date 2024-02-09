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
    let data: any = {"friends":[{"name":"name 1","birthday":"2024-03-26T15:33:42.317Z","starSign":"starSign 1","gender":"gender 1","email":"email 1","id":53},{"name":"name 2","birthday":"2024-03-20T17:03:19.779Z","starSign":"starSign 2","gender":"gender 2","email":"email 2","id":91},{"name":"name 3","birthday":"2023-07-05T09:00:28.416Z","starSign":"starSign 3","gender":"gender 3","email":"email 3","id":35},{"name":"name 4","birthday":"2023-10-15T21:28:47.533Z","starSign":"starSign 4","gender":"gender 4","email":"email 4","id":90},{"name":"name 5","birthday":"2024-07-02T12:08:05.242Z","starSign":"starSign 5","gender":"gender 5","email":"email 5","id":42}],"websites":[{"siteName":"siteName 1","url":"url 1","rating":1,"id":84},{"siteName":"siteName 2","url":"url 2","rating":2,"id":48},{"siteName":"siteName 3","url":"url 3","rating":3,"id":30},{"siteName":"siteName 4","url":"url 4","rating":4,"id":13},{"siteName":"siteName 5","url":"url 5","rating":5,"id":99}],"credentials":[{"url":"url 1","username":"username 1","password":"password 1","id":96},{"url":"url 2","username":"username 2","password":"password 2","id":56},{"url":"url 3","username":"username 3","password":"password 3","id":42},{"url":"url 4","username":"username 4","password":"password 4","id":6},{"url":"url 5","username":"username 5","password":"password 5","id":72}]};
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

