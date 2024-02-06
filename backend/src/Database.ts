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
    let data: any = {"books":[{"bookTitle":"bookTitle 1","releaseDate":"2023-07-30T03:13:14.683Z","numberOfBooksSold":32,"author":"author 1","numberOfEditions":42,"id":59},{"bookTitle":"bookTitle 2","releaseDate":"2023-09-23T08:02:30.021Z","numberOfBooksSold":20,"author":"author 2","numberOfEditions":80,"id":70},{"bookTitle":"bookTitle 3","releaseDate":"2024-03-25T23:28:11.496Z","numberOfBooksSold":34,"author":"author 3","numberOfEditions":52,"id":29},{"bookTitle":"bookTitle 4","releaseDate":"2023-09-15T03:37:17.778Z","numberOfBooksSold":49,"author":"author 4","numberOfEditions":39,"id":2},{"bookTitle":"bookTitle 5","releaseDate":"2024-11-10T04:00:20.907Z","numberOfBooksSold":50,"author":"author 5","numberOfEditions":37,"id":64}],"authors":[{"authorName":"authorName 1","dateOfBirth":"2024-08-30T03:19:58.539Z","sex":"sex 1","countryOfBirth":"countryOfBirth 1","id":62},{"authorName":"authorName 2","dateOfBirth":"2023-05-15T13:21:42.374Z","sex":"sex 2","countryOfBirth":"countryOfBirth 2","id":81},{"authorName":"authorName 3","dateOfBirth":"2024-01-31T21:56:22.437Z","sex":"sex 3","countryOfBirth":"countryOfBirth 3","id":93},{"authorName":"authorName 4","dateOfBirth":"2024-10-19T01:23:19.518Z","sex":"sex 4","countryOfBirth":"countryOfBirth 4","id":61},{"authorName":"authorName 5","dateOfBirth":"2024-02-21T00:35:21.567Z","sex":"sex 5","countryOfBirth":"countryOfBirth 5","id":61}]};
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

