//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { artistsEntity } from "./db/artists.entity";
import { albumsEntity } from "./db/albums.entity";
import { tracksEntity } from "./db/tracks.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, artistsEntity, albumsEntity, tracksEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"artists":[{"artistName":"artistName 1","band":"band 1","dateOfBirth":"2024-02-02T22:24:47.791Z","id":39},{"artistName":"artistName 2","band":"band 2","dateOfBirth":"2024-02-22T05:54:31.475Z","id":88},{"artistName":"artistName 3","band":"band 3","dateOfBirth":"2023-06-21T15:19:19.204Z","id":56},{"artistName":"artistName 4","band":"band 4","dateOfBirth":"2023-06-30T11:59:27.216Z","id":20},{"artistName":"artistName 5","band":"band 5","dateOfBirth":"2024-09-28T04:26:06.548Z","id":48}],"albums":[{"albumName":"albumName 1","artistName":1,"copiesSold":1,"launchDate":"2024-09-11T01:26:59.501Z","id":99},{"albumName":"albumName 2","artistName":2,"copiesSold":2,"launchDate":"2023-12-15T13:24:27.235Z","id":66},{"albumName":"albumName 3","artistName":3,"copiesSold":3,"launchDate":"2023-04-14T19:25:43.414Z","id":21},{"albumName":"albumName 4","artistName":4,"copiesSold":4,"launchDate":"2024-12-05T16:56:58.693Z","id":22},{"albumName":"albumName 5","artistName":5,"copiesSold":5,"launchDate":"2024-06-08T14:28:05.293Z","id":35}],"tracks":[{"trackName":"trackName 1","album":1,"lyrics":"lyrics 1","id":99},{"trackName":"trackName 2","album":2,"lyrics":"lyrics 2","id":45},{"trackName":"trackName 3","album":3,"lyrics":"lyrics 3","id":9},{"trackName":"trackName 4","album":4,"lyrics":"lyrics 4","id":72},{"trackName":"trackName 5","album":5,"lyrics":"lyrics 5","id":28}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("artistsEntity", data.artists);
await this.SeedResource("albumsEntity", data.albums);
await this.SeedResource("tracksEntity", data.tracks); 
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

