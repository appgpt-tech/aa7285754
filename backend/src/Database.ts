//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { booksEntity } from "./db/books.entity";
import { authorsEntity } from "./db/authors.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, booksEntity, authorsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"books":[{"title":"title 1","isbn":"isbn 1","author":1,"id":14},{"title":"title 2","isbn":"isbn 2","author":2,"id":79},{"title":"title 3","isbn":"isbn 3","author":3,"id":60},{"title":"title 4","isbn":"isbn 4","author":4,"id":89},{"title":"title 5","isbn":"isbn 5","author":5,"id":77}],"authors":[{"authorName":"authorName 1","gender":"gender 1","dateOfBirth":"2024-06-20T00:43:01.638Z","numberOfBooks":77,"id":2},{"authorName":"authorName 2","gender":"gender 2","dateOfBirth":"2023-11-16T11:26:36.315Z","numberOfBooks":32,"id":71},{"authorName":"authorName 3","gender":"gender 3","dateOfBirth":"2023-09-30T00:20:31.149Z","numberOfBooks":32,"id":82},{"authorName":"authorName 4","gender":"gender 4","dateOfBirth":"2023-12-29T17:19:02.568Z","numberOfBooks":71,"id":51},{"authorName":"authorName 5","gender":"gender 5","dateOfBirth":"2024-09-27T19:40:58.772Z","numberOfBooks":63,"id":83}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("booksEntity", data.books);
await this.SeedResource("authorsEntity", data.authors); 
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

