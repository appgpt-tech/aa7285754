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
    let data: any = {"book":[{"title":84,"isbn":56,"author":1,"id":16},{"title":67,"isbn":32,"author":2,"id":30},{"title":0,"isbn":63,"author":3,"id":8},{"title":73,"isbn":73,"author":4,"id":23},{"title":27,"isbn":31,"author":5,"id":26}],"authors":[{"name":37,"gender":30,"dateOfBirth":87,"numberOfBooks":69,"id":63},{"name":69,"gender":96,"dateOfBirth":45,"numberOfBooks":9,"id":69},{"name":2,"gender":68,"dateOfBirth":0,"numberOfBooks":38,"id":67},{"name":62,"gender":27,"dateOfBirth":85,"numberOfBooks":89,"id":27},{"name":83,"gender":97,"dateOfBirth":16,"numberOfBooks":99,"id":74}]};
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

