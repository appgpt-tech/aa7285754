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
    let data: any = {"books":[{"title":"title 1","isbn":"isbn 1","id":8},{"title":"title 2","isbn":"isbn 2","id":40},{"title":"title 3","isbn":"isbn 3","id":99},{"title":"title 4","isbn":"isbn 4","id":62},{"title":"title 5","isbn":"isbn 5","id":55}],"authors":[{"authorName":"authorName 1","gender":"gender 1","dateOfBirth":"2023-08-19T09:12:42.991Z","numberOfBooks":88,"id":75},{"authorName":"authorName 2","gender":"gender 2","dateOfBirth":"2023-09-14T02:56:49.404Z","numberOfBooks":78,"id":38},{"authorName":"authorName 3","gender":"gender 3","dateOfBirth":"2023-06-15T21:13:40.181Z","numberOfBooks":24,"id":85},{"authorName":"authorName 4","gender":"gender 4","dateOfBirth":"2023-08-01T15:34:55.854Z","numberOfBooks":86,"id":62},{"authorName":"authorName 5","gender":"gender 5","dateOfBirth":"2023-10-11T18:40:37.098Z","numberOfBooks":71,"id":84}]};
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

