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
    let data: any = {"book":[{"title":"title 0","isbn":"isbn 0","id":57},{"title":"title 1","isbn":"isbn 1","id":48},{"title":"title 2","isbn":"isbn 2","id":66},{"title":"title 3","isbn":"isbn 3","id":18},{"title":"title 4","isbn":"isbn 4","id":84}],"authors":[{"name":"name 0","gender":"gender 0","dateOfBirth":"2023-12-09T07:52:19.541Z","numberOfBooks":52,"id":19},{"name":"name 1","gender":"gender 1","dateOfBirth":"2024-12-09T08:39:14.118Z","numberOfBooks":16,"id":44},{"name":"name 2","gender":"gender 2","dateOfBirth":"2024-01-12T05:58:47.894Z","numberOfBooks":1,"id":72},{"name":"name 3","gender":"gender 3","dateOfBirth":"2023-10-01T23:17:05.088Z","numberOfBooks":66,"id":10},{"name":"name 4","gender":"gender 4","dateOfBirth":"2023-05-06T04:02:14.085Z","numberOfBooks":33,"id":48}]};
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

