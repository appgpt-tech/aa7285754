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
    let data: any = {"artists":[{"artistName":"artistName 1","band":"band 1","dateOfBirth":"2024-07-14T12:17:22.268Z","id":82},{"artistName":"artistName 2","band":"band 2","dateOfBirth":"2024-02-18T20:50:32.962Z","id":83},{"artistName":"artistName 3","band":"band 3","dateOfBirth":"2023-04-17T15:15:39.128Z","id":70},{"artistName":"artistName 4","band":"band 4","dateOfBirth":"2023-04-26T14:53:59.018Z","id":66},{"artistName":"artistName 5","band":"band 5","dateOfBirth":"2024-06-20T06:49:28.138Z","id":63}],"albums":[{"albumName":"albumName 1","artistName":1,"copiesSold":1,"launchDate":"2024-06-30T04:14:44.215Z","id":49},{"albumName":"albumName 2","artistName":2,"copiesSold":2,"launchDate":"2023-11-01T03:35:54.457Z","id":11},{"albumName":"albumName 3","artistName":3,"copiesSold":3,"launchDate":"2023-05-16T23:22:09.417Z","id":23},{"albumName":"albumName 4","artistName":4,"copiesSold":4,"launchDate":"2024-02-13T06:03:31.276Z","id":49},{"albumName":"albumName 5","artistName":5,"copiesSold":5,"launchDate":"2024-06-12T02:52:21.626Z","id":5}],"tracks":[{"trackName":"trackName 1","album":1,"lyrics":"lyrics 1","id":100},{"trackName":"trackName 2","album":2,"lyrics":"lyrics 2","id":24},{"trackName":"trackName 3","album":3,"lyrics":"lyrics 3","id":57},{"trackName":"trackName 4","album":4,"lyrics":"lyrics 4","id":14},{"trackName":"trackName 5","album":5,"lyrics":"lyrics 5","id":41}]};
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

