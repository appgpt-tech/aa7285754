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
    let data: any = {"artists":[{"artistName":"artistName 1","band":"band 1","dateOfBirth":"2023-02-26T08:54:45.150Z","id":74},{"artistName":"artistName 2","band":"band 2","dateOfBirth":"2024-10-15T07:51:44.344Z","id":25},{"artistName":"artistName 3","band":"band 3","dateOfBirth":"2023-06-16T10:40:21.976Z","id":93},{"artistName":"artistName 4","band":"band 4","dateOfBirth":"2024-12-15T08:08:18.136Z","id":87},{"artistName":"artistName 5","band":"band 5","dateOfBirth":"2024-03-03T21:11:53.070Z","id":98}],"albums":[{"albumName":"albumName 1","artistName":1,"copiesSold":1,"launchDate":"2023-08-18T04:50:32.100Z","id":18},{"albumName":"albumName 2","artistName":2,"copiesSold":2,"launchDate":"2023-05-12T12:50:41.577Z","id":85},{"albumName":"albumName 3","artistName":3,"copiesSold":3,"launchDate":"2024-07-05T08:02:26.716Z","id":21},{"albumName":"albumName 4","artistName":4,"copiesSold":4,"launchDate":"2023-10-22T22:09:16.509Z","id":7},{"albumName":"albumName 5","artistName":5,"copiesSold":5,"launchDate":"2023-08-14T11:21:43.820Z","id":87}],"tracks":[{"trackName":"trackName 1","album":1,"lyrics":"lyrics 1","id":39},{"trackName":"trackName 2","album":2,"lyrics":"lyrics 2","id":19},{"trackName":"trackName 3","album":3,"lyrics":"lyrics 3","id":32},{"trackName":"trackName 4","album":4,"lyrics":"lyrics 4","id":79},{"trackName":"trackName 5","album":5,"lyrics":"lyrics 5","id":65}]};
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

