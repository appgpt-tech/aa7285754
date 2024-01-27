//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { BooksEntity } from "./db/Books.entity";
import { AuthorsEntity } from "./db/Authors.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, BooksEntity, AuthorsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Books":[{"bookTitle":"A book title 1","releaseDate":"01-01-2000","numberOfBooksSold":10000,"author":"Author 1","numberOfEditions":3},{"bookTitle":"A book title 2","releaseDate":"04-06-2005","numberOfBooksSold":50000,"author":"Author 2","numberOfEditions":5},{"bookTitle":"A book title 3","releaseDate":"10-07-2010","numberOfBooksSold":76000,"author":"Author 3","numberOfEditions":7}],"Authors":[{"authorName":"Author 1","dateOfBirth":"01-01-1970","sex":"Male","countryOfBirth":"Country 1"},{"authorName":"Author 2","dateOfBirth":"02-02-1975","sex":"Female","countryOfBirth":"Country 2"},{"authorName":"Author 3","dateOfBirth":"03-03-1980","sex":"Male","countryOfBirth":"Country 3"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("BooksEntity", data.Books);
await this.SeedResource("AuthorsEntity", data.Authors); 
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

