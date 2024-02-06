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
    let data: any = {"Users":[{"userId":"jeopardize","email":"irritating","name":"unbend","id":4830634702798848},{"userId":"ferociously","email":"miserable","name":"harsh","id":1052469631123456},{"userId":"unless","email":"failing","name":"scrutiny","id":5968518803619840},{"userId":"nor","email":"whoa","name":"aside","id":7657392216997888},{"userId":"descendant","email":"despite","name":"after","id":4860813667991552}],"Cards":[{"cardId":"underneath","setid":"luxury","cardName":"wherever","serial":"wetly","type":"whenever","rarity":"aw","condition":"merry","imageurl":"kosher","id":3174536579121152},{"cardId":"blond","setid":"stagnate","cardName":"transparency","serial":"atop","type":"finish","rarity":"yippee","condition":"since","imageurl":"amidst","id":3523656743387136},{"cardId":"near","setid":"bedeck","cardName":"milky","serial":"dance","type":"knottily","rarity":"exhausted","condition":"to","imageurl":"keen","id":8262250984898560},{"cardId":"until","setid":"yahoo","cardName":"ease","serial":"yowza","type":"on","rarity":"diversify","condition":"darling","imageurl":"liver","id":7763658358652928},{"cardId":"aboard","setid":"briefly","cardName":"until","serial":"handful","type":"abhor","rarity":"pish","condition":"quickly","imageurl":"rash","id":2116816618913792}],"Sets":[{"setId":"long-term","setname":"drat","releasedate":"2023-06-12T04:05:32.198Z","totalcards":6328326207569920,"id":3755333308645376},{"setId":"like","setname":"leach","releasedate":"2023-02-20T23:18:53.613Z","totalcards":8403461534121984,"id":5206575861989376},{"setId":"quarterly","setname":"unlike","releasedate":"2023-05-30T15:15:53.893Z","totalcards":303243873746944,"id":7172907683807232},{"setId":"rave","setname":"action","releasedate":"2023-02-11T06:27:45.635Z","totalcards":1780977126866944,"id":7273185196113920},{"setId":"romance","setname":"provided","releasedate":"2023-10-28T11:09:11.532Z","totalcards":8855351438868480,"id":2198552337973248}],"Inventory":[{"userId":"crossly","cardId":"propagate","recordedDate":"2024-06-26T19:59:20.707Z","id":4672183678795776},{"userId":"er","cardId":"finally","recordedDate":"2024-08-29T16:58:36.220Z","id":7733951957303296},{"userId":"incredible","cardId":"lam","recordedDate":"2023-05-21T17:57:10.571Z","id":6357815536910336},{"userId":"as","cardId":"gee","recordedDate":"2023-12-29T09:39:45.036Z","id":3466253299613696},{"userId":"meanwhile","cardId":"likewise","recordedDate":"2024-06-21T01:12:48.613Z","id":468047611559936}],"Wishlist":[{"userId":"before","cardId":"across","insertedDate":"2024-02-08T07:33:54.172Z","id":2223593696002048},{"userId":"where","cardId":"wrongly","insertedDate":"2024-09-21T17:57:31.592Z","id":5142198123233280},{"userId":"beetle","cardId":"that","insertedDate":"2023-11-24T04:55:48.764Z","id":6354786658025472},{"userId":"during","cardId":"ha","insertedDate":"2024-07-23T19:46:03.751Z","id":1480388155277312},{"userId":"haunting","cardId":"carefree","insertedDate":"2023-10-05T03:13:32.850Z","id":6032652347899904}]};
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

