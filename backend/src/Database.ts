//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { contactsEntity } from "./db/contacts.entity";
import { websitesEntity } from "./db/websites.entity";
import { credentialsEntity } from "./db/credentials.entity";
import { moviesEntity } from "./db/movies.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, contactsEntity, websitesEntity, credentialsEntity, moviesEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"contacts":[{"name":"name 1","email":"email 1","mobileNumber":"mobileNumber 1","linkedinUrl":"linkedinUrl 1","id":69},{"name":"name 2","email":"email 2","mobileNumber":"mobileNumber 2","linkedinUrl":"linkedinUrl 2","id":87},{"name":"name 3","email":"email 3","mobileNumber":"mobileNumber 3","linkedinUrl":"linkedinUrl 3","id":97},{"name":"name 4","email":"email 4","mobileNumber":"mobileNumber 4","linkedinUrl":"linkedinUrl 4","id":25},{"name":"name 5","email":"email 5","mobileNumber":"mobileNumber 5","linkedinUrl":"linkedinUrl 5","id":81}],"websites":[{"websiteTitle":"websiteTitle 1","url":"url 1","category":"category 1","rating":1,"id":2},{"websiteTitle":"websiteTitle 2","url":"url 2","category":"category 2","rating":2,"id":63},{"websiteTitle":"websiteTitle 3","url":"url 3","category":"category 3","rating":3,"id":76},{"websiteTitle":"websiteTitle 4","url":"url 4","category":"category 4","rating":4,"id":90},{"websiteTitle":"websiteTitle 5","url":"url 5","category":"category 5","rating":5,"id":33}],"credentials":[{"url":"url 1","username":"username 1","password":"password 1","id":59},{"url":"url 2","username":"username 2","password":"password 2","id":65},{"url":"url 3","username":"username 3","password":"password 3","id":18},{"url":"url 4","username":"username 4","password":"password 4","id":6},{"url":"url 5","username":"username 5","password":"password 5","id":81}],"movies":[{"movieTitle":"movieTitle 1","genre":"genre 1","watchedStatus":false,"id":56},{"movieTitle":"movieTitle 2","genre":"genre 2","watchedStatus":false,"id":97},{"movieTitle":"movieTitle 3","genre":"genre 3","watchedStatus":false,"id":84},{"movieTitle":"movieTitle 4","genre":"genre 4","watchedStatus":true,"id":51},{"movieTitle":"movieTitle 5","genre":"genre 5","watchedStatus":true,"id":63}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("contactsEntity", data.contacts);
await this.SeedResource("websitesEntity", data.websites);
await this.SeedResource("credentialsEntity", data.credentials);
await this.SeedResource("moviesEntity", data.movies); 
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

