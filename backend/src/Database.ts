//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { bookEntity } from "./db/book.entity";
import { authorsEntity } from "./db/authors.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, bookEntity, authorsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"book":[{"title":"title 1","isbn":"isbn 1","author":1,"id":81},{"title":"title 2","isbn":"isbn 2","author":2,"id":85},{"title":"title 3","isbn":"isbn 3","author":3,"id":86},{"title":"title 4","isbn":"isbn 4","author":4,"id":27},{"title":"title 5","isbn":"isbn 5","author":5,"id":50}],"authors":[{"name":"name 1","gender":"gender 1","dateOfBirth":"2023-08-23T10:25:34.922Z","numberOfBooks":52,"id":61},{"name":"name 2","gender":"gender 2","dateOfBirth":"2024-05-02T00:35:08.917Z","numberOfBooks":52,"id":14},{"name":"name 3","gender":"gender 3","dateOfBirth":"2024-12-15T15:58:47.974Z","numberOfBooks":91,"id":82},{"name":"name 4","gender":"gender 4","dateOfBirth":"2023-04-26T14:50:06.108Z","numberOfBooks":36,"id":23},{"name":"name 5","gender":"gender 5","dateOfBirth":"2023-02-19T05:12:22.629Z","numberOfBooks":26,"id":12}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("bookEntity", data.book);
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

