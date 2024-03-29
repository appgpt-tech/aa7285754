//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { CardsEntity } from "./db/Cards.entity";
import { SetsEntity } from "./db/Sets.entity";
import { InventoryEntity } from "./db/Inventory.entity";
import { WishlistEntity } from "./db/Wishlist.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, CardsEntity, SetsEntity, InventoryEntity, WishlistEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":72},{"userId":2,"email":"email 2","name":"name 2","id":1},{"userId":3,"email":"email 3","name":"name 3","id":20},{"userId":4,"email":"email 4","name":"name 4","id":87},{"userId":5,"email":"email 5","name":"name 5","id":65}],"Cards":[{"cardId":1,"setId":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","id":11},{"cardId":2,"setId":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","id":7},{"cardId":3,"setId":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","id":92},{"cardId":4,"setId":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","id":39},{"cardId":5,"setId":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","id":3}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2024-09-30T21:55:59.155Z","totalCards":1,"id":54},{"setId":2,"setName":"setName 2","releaseDate":"2023-10-14T16:46:48.327Z","totalCards":2,"id":46},{"setId":3,"setName":"setName 3","releaseDate":"2023-06-12T13:24:33.191Z","totalCards":3,"id":64},{"setId":4,"setName":"setName 4","releaseDate":"2025-01-09T16:39:03.335Z","totalCards":4,"id":67},{"setId":5,"setName":"setName 5","releaseDate":"2025-01-24T20:10:20.439Z","totalCards":5,"id":87}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-07-09T10:21:00.213Z","id":33},{"userId":2,"cardId":2,"recordedDate":"2023-09-04T16:12:10.705Z","id":59},{"userId":3,"cardId":3,"recordedDate":"2025-01-29T06:22:49.089Z","id":84},{"userId":4,"cardId":4,"recordedDate":"2025-01-14T15:11:34.923Z","id":64},{"userId":5,"cardId":5,"recordedDate":"2024-04-06T15:25:28.446Z","id":87}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2024-01-16T07:38:22.961Z","id":25},{"userId":2,"cardId":2,"insertedDate":"2024-10-14T22:37:10.997Z","id":56},{"userId":3,"cardId":3,"insertedDate":"2024-09-24T18:26:16.042Z","id":37},{"userId":4,"cardId":4,"insertedDate":"2023-02-20T20:44:18.451Z","id":54},{"userId":5,"cardId":5,"insertedDate":"2024-11-27T20:33:52.101Z","id":26}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("CardsEntity", data.Cards);
await this.SeedResource("SetsEntity", data.Sets);
await this.SeedResource("InventoryEntity", data.Inventory);
await this.SeedResource("WishlistEntity", data.Wishlist); 
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

