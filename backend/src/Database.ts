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
    let data: any = {"artists":[{"artistName":"artistName 1","band":"band 1","dateOfBirth":"2024-09-05T18:30:22.891Z","id":24},{"artistName":"artistName 2","band":"band 2","dateOfBirth":"2024-11-29T13:26:39.708Z","id":63},{"artistName":"artistName 3","band":"band 3","dateOfBirth":"2024-02-29T02:04:56.157Z","id":49},{"artistName":"artistName 4","band":"band 4","dateOfBirth":"2023-11-20T01:02:51.462Z","id":49},{"artistName":"artistName 5","band":"band 5","dateOfBirth":"2024-02-24T17:37:22.537Z","id":57}],"albums":[{"albumName":"albumName 1","artistName":1,"copiesSold":1,"launchDate":"2023-05-25T16:12:58.397Z","id":98},{"albumName":"albumName 2","artistName":2,"copiesSold":2,"launchDate":"2024-01-25T14:39:31.736Z","id":28},{"albumName":"albumName 3","artistName":3,"copiesSold":3,"launchDate":"2023-11-15T05:08:14.507Z","id":9},{"albumName":"albumName 4","artistName":4,"copiesSold":4,"launchDate":"2024-08-29T08:22:21.696Z","id":73},{"albumName":"albumName 5","artistName":5,"copiesSold":5,"launchDate":"2024-04-08T04:40:08.139Z","id":19}],"tracks":[{"trackName":"trackName 1","album":1,"lyrics":"lyrics 1","id":55},{"trackName":"trackName 2","album":2,"lyrics":"lyrics 2","id":25},{"trackName":"trackName 3","album":3,"lyrics":"lyrics 3","id":73},{"trackName":"trackName 4","album":4,"lyrics":"lyrics 4","id":0},{"trackName":"trackName 5","album":5,"lyrics":"lyrics 5","id":84}]};
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

