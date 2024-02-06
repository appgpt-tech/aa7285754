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
    let data: any = {"book":[{"title":"title 1","isbn":"isbn 1","author":"author 1","id":0},{"title":"title 2","isbn":"isbn 2","author":"author 2","id":90},{"title":"title 3","isbn":"isbn 3","author":"author 3","id":19},{"title":"title 4","isbn":"isbn 4","author":"author 4","id":40},{"title":"title 5","isbn":"isbn 5","author":"author 5","id":65}],"authors":[{"name":"name 1","gender":"gender 1","dateOfBirth":"2023-05-18T18:30:07.381Z","numberOfBooks":0,"id":81},{"name":"name 2","gender":"gender 2","dateOfBirth":"2023-03-03T08:24:05.797Z","numberOfBooks":20,"id":57},{"name":"name 3","gender":"gender 3","dateOfBirth":"2025-01-10T07:13:40.045Z","numberOfBooks":14,"id":3},{"name":"name 4","gender":"gender 4","dateOfBirth":"2024-09-29T05:10:35.512Z","numberOfBooks":81,"id":73},{"name":"name 5","gender":"gender 5","dateOfBirth":"2025-01-06T19:18:21.910Z","numberOfBooks":23,"id":70}]};
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

