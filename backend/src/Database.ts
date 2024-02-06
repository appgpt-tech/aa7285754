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
    let data: any = {"Users":[{"userId":"toy","email":"embarrassment","name":"if","id":13},{"userId":"inexperienced","email":"experienced","name":"animated","id":71},{"userId":"high","email":"barring","name":"diner","id":13},{"userId":"ha","email":"meanwhile","name":"necessary","id":25},{"userId":"genuflect","email":"cheery","name":"assemble","id":49}],"Cards":[{"cardId":"finance","setid":"jostle","cardName":"meanwhile","serial":"lovable","type":"parse","rarity":"fortunately","condition":"suit","imageurl":"carbonize","id":70},{"cardId":"for","setid":"phooey","cardName":"wrong","serial":"clutch","type":"mammoth","rarity":"true","condition":"yesterday","imageurl":"ick","id":30},{"cardId":"yippee","setid":"spyglass","cardName":"psst","serial":"fortunate","type":"flawless","rarity":"behind","condition":"or","imageurl":"reading","id":26},{"cardId":"reassuringly","setid":"boil","cardName":"married","serial":"yippee","type":"whenever","rarity":"rapid","condition":"seemingly","imageurl":"across","id":86},{"cardId":"coaxingly","setid":"joint","cardName":"unto","serial":"mosque","type":"literate","rarity":"since","condition":"as","imageurl":"well","id":8}],"Sets":[{"setId":"unto","setname":"sturdy","releasedate":"2024-11-05T11:32:12.821Z","totalcards":30,"id":36},{"setId":"considering","setname":"unaccountably","releasedate":"2024-03-21T22:22:27.977Z","totalcards":77,"id":65},{"setId":"overtrain","setname":"fortunately","releasedate":"2024-01-15T22:20:56.983Z","totalcards":16,"id":13},{"setId":"indeed","setname":"after","releasedate":"2024-04-10T14:55:27.739Z","totalcards":38,"id":4},{"setId":"beyond","setname":"producer","releasedate":"2023-03-07T12:33:35.649Z","totalcards":13,"id":68}],"Inventory":[{"userId":"pencil","cardId":"acceptable","recordedDate":"2023-02-24T17:39:49.791Z","id":76},{"userId":"skew","cardId":"last","recordedDate":"2023-11-09T01:18:44.668Z","id":24},{"userId":"loft","cardId":"ah","recordedDate":"2023-12-21T22:27:39.225Z","id":36},{"userId":"grumble","cardId":"yowza","recordedDate":"2024-04-07T05:25:08.409Z","id":11},{"userId":"fennel","cardId":"blah","recordedDate":"2023-10-23T11:34:03.955Z","id":21}],"Wishlist":[{"userId":"now","cardId":"inasmuch","insertedDate":"2023-07-22T04:07:13.547Z","id":80},{"userId":"boo","cardId":"gadzooks","insertedDate":"2023-08-04T06:33:46.453Z","id":90},{"userId":"illustrate","cardId":"dearest","insertedDate":"2024-08-19T20:58:45.552Z","id":62},{"userId":"oof","cardId":"in","insertedDate":"2024-07-08T06:37:51.003Z","id":70},{"userId":"following","cardId":"uh-huh","insertedDate":"2023-09-19T11:29:07.576Z","id":0}]};
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

