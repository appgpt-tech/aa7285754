//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { BooksEntity } from "./db/Books.entity";
import { AuthorsEntity } from "./db/Authors.entity";
import { GenresEntity } from "./db/Genres.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, BooksEntity, AuthorsEntity, GenresEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Books":[{"title":"Generated title 1","authorName":"Generated author name 1","genre":"Generated genre 1","bookCover":"Generated book cover URL 1"},{"title":"Generated title 2","authorName":"Generated author name 2","genre":"Generated genre 2","bookCover":"Generated book cover URL 2"},{"title":"Generated title 3","authorName":"Generated author name 3","genre":"Generated genre 3","bookCover":"Generated book cover URL 3"}],"Authors":[{"authorName":"Generated author name 1","books":"Generated book title 1"},{"authorName":"Generated author name 2","books":"Generated book title 2"},{"authorName":"Generated author name 3","books":"Generated book title 3"}],"Genres":[{"category":"Generated category 1"},{"category":"Generated category 2"},{"category":"Generated category 3"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("BooksEntity", data.Books);
await this.SeedResource("AuthorsEntity", data.Authors);
await this.SeedResource("GenresEntity", data.Genres); 
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

