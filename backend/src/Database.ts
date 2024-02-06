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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":90},{"userId":"userId 2","email":"email 2","name":"name 2","id":98},{"userId":"userId 3","email":"email 3","name":"name 3","id":29},{"userId":"userId 4","email":"email 4","name":"name 4","id":4},{"userId":"userId 5","email":"email 5","name":"name 5","id":17}],"Cards":[{"cardId":"cardId 1","setid":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":1},{"cardId":"cardId 2","setid":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":95},{"cardId":"cardId 3","setid":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":96},{"cardId":"cardId 4","setid":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":59},{"cardId":"cardId 5","setid":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":76}],"Sets":[{"setId":"setId 1","setname":"setname 1","releasedate":"2024-05-10T07:21:45.728Z","totalcards":98,"id":38},{"setId":"setId 2","setname":"setname 2","releasedate":"2025-01-21T00:41:21.369Z","totalcards":84,"id":67},{"setId":"setId 3","setname":"setname 3","releasedate":"2024-12-08T22:38:23.963Z","totalcards":92,"id":56},{"setId":"setId 4","setname":"setname 4","releasedate":"2024-11-12T11:19:54.282Z","totalcards":11,"id":4},{"setId":"setId 5","setname":"setname 5","releasedate":"2024-10-29T02:21:20.786Z","totalcards":97,"id":51}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-10-10T04:16:31.871Z","id":18},{"userId":2,"cardId":2,"recordedDate":"2024-10-09T11:24:44.029Z","id":27},{"userId":3,"cardId":3,"recordedDate":"2024-09-05T10:33:03.913Z","id":50},{"userId":4,"cardId":4,"recordedDate":"2024-02-14T13:02:12.805Z","id":57},{"userId":5,"cardId":5,"recordedDate":"2023-11-06T04:34:46.983Z","id":49}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-08-25T11:50:56.374Z","id":84},{"userId":2,"cardId":2,"insertedDate":"2024-09-20T16:23:35.867Z","id":64},{"userId":3,"cardId":3,"insertedDate":"2024-12-20T02:45:23.805Z","id":46},{"userId":4,"cardId":4,"insertedDate":"2024-11-17T06:11:44.542Z","id":32},{"userId":5,"cardId":5,"insertedDate":"2023-11-13T11:09:09.768Z","id":8}]};
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

