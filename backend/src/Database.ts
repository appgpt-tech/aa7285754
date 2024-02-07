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
    let data: any = {"artists":[{"artistName":"artistName 1","band":"band 1","dateOfBirth":"2024-12-18T14:11:35.598Z","id":77},{"artistName":"artistName 2","band":"band 2","dateOfBirth":"2023-11-06T04:38:58.180Z","id":76},{"artistName":"artistName 3","band":"band 3","dateOfBirth":"2023-11-06T02:20:50.294Z","id":64},{"artistName":"artistName 4","band":"band 4","dateOfBirth":"2023-05-25T06:43:31.854Z","id":14},{"artistName":"artistName 5","band":"band 5","dateOfBirth":"2024-04-03T17:26:51.640Z","id":53}],"albums":[{"albumName":"albumName 1","artistName":1,"copiesSold":1,"launchDate":"2024-03-18T03:05:53.391Z","id":73},{"albumName":"albumName 2","artistName":2,"copiesSold":2,"launchDate":"2024-05-21T19:40:23.027Z","id":74},{"albumName":"albumName 3","artistName":3,"copiesSold":3,"launchDate":"2023-09-13T23:23:14.610Z","id":15},{"albumName":"albumName 4","artistName":4,"copiesSold":4,"launchDate":"2024-03-04T23:25:27.731Z","id":23},{"albumName":"albumName 5","artistName":5,"copiesSold":5,"launchDate":"2024-11-04T15:59:28.469Z","id":93}],"tracks":[{"trackName":"trackName 1","album":1,"lyrics":"lyrics 1","id":14},{"trackName":"trackName 2","album":2,"lyrics":"lyrics 2","id":52},{"trackName":"trackName 3","album":3,"lyrics":"lyrics 3","id":73},{"trackName":"trackName 4","album":4,"lyrics":"lyrics 4","id":12},{"trackName":"trackName 5","album":5,"lyrics":"lyrics 5","id":27}]};
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

