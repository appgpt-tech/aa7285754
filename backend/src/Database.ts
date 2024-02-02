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
    let data: any = {"Books":[{"title":"Book 1","authorName":"Author 1","genre":"Genre 1","bookCover":"Cover 1"},{"title":"Book 2","authorName":"Author 2","genre":"Genre 2","bookCover":"Cover 2"},{"title":"Book 3","authorName":"Author 3","genre":"Genre 3","bookCover":"Cover 3"}],"Authors":[{"authorName":"Author 1","birthCountry":"Country 1"},{"authorName":"Author 2","birthCountry":"Country 2"},{"authorName":"Author 3","birthCountry":"Country 3"}],"Genres":[{"gender":"Gender 1","category":"Category 1"},{"gender":"Gender 2","category":"Category 2"},{"gender":"Gender 3","category":"Category 3"}]};
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

