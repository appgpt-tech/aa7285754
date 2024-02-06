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
    let data: any = {"Users":[{"userId":"stylish","email":"unbearably","name":"accelerate","id":6667927535222784},{"userId":"eek","email":"ugh","name":"onto","id":8318819606986752},{"userId":"carelessly","email":"until","name":"ack","id":3380841889660928},{"userId":"tan","email":"redress","name":"excerpt","id":3908199996456960},{"userId":"among","email":"prickly","name":"ah","id":6279152904699904}],"Cards":[{"cardId":"ouch","setid":"shameless","cardName":"till","serial":"profitable","type":"boo","rarity":"restfully","condition":"motorcycle","imageurl":"per","id":1428357289869312},{"cardId":"lamb","setid":"dahlia","cardName":"next","serial":"fair","type":"proscribe","rarity":"aside","condition":"whoever","imageurl":"wherever","id":7455482813874176},{"cardId":"airship","setid":"notwithstanding","cardName":"left","serial":"phooey","type":"knight","rarity":"glistening","condition":"aware","imageurl":"grumpy","id":4178362280968192},{"cardId":"amongst","setid":"uh-huh","cardName":"trespass","serial":"of","type":"whether","rarity":"very","condition":"now","imageurl":"when","id":2259919073968128},{"cardId":"bran","setid":"unaccountably","cardName":"geez","serial":"concerning","type":"short","rarity":"truly","condition":"regularly","imageurl":"undulate","id":5023478669377536}],"Sets":[{"setId":"effectiveness","setname":"yowza","releasedate":"2024-09-15T04:47:19.459Z","totalcards":2486806257860608,"id":197401482625024},{"setId":"unfortunately","setname":"obediently","releasedate":"2023-10-01T14:18:11.829Z","totalcards":7930042575224832,"id":3958739302350848},{"setId":"even","setname":"since","releasedate":"2023-06-18T19:26:35.776Z","totalcards":7999147563024384,"id":1354427764047872},{"setId":"attentive","setname":"aw","releasedate":"2023-11-11T04:26:04.025Z","totalcards":702464571473920,"id":4449638409043968},{"setId":"joyous","setname":"and","releasedate":"2024-03-23T23:49:30.543Z","totalcards":4918717592895488,"id":8213114772258816}],"Inventory":[{"userId":"excepting","cardId":"nicely","recordedDate":"2024-09-14T11:45:28.338Z","id":4986880177209344},{"userId":"stock","cardId":"pale","recordedDate":"2025-01-22T12:16:38.284Z","id":6740513786953728},{"userId":"vast","cardId":"school","recordedDate":"2025-01-11T03:01:33.404Z","id":3876548046225408},{"userId":"bony","cardId":"energetically","recordedDate":"2023-04-10T17:19:43.203Z","id":1282700986023936},{"userId":"consequently","cardId":"staple","recordedDate":"2024-08-17T17:31:21.043Z","id":4115329481441280}],"Wishlist":[{"userId":"elaborate","cardId":"sane","insertedDate":"2024-05-27T16:16:48.481Z","id":188717455114240},{"userId":"mind","cardId":"circa","insertedDate":"2024-11-02T05:20:17.299Z","id":3122088250441728},{"userId":"mortified","cardId":"dimple","insertedDate":"2023-11-19T02:59:22.437Z","id":2637672126349312},{"userId":"next","cardId":"coincidence","insertedDate":"2024-04-18T14:53:38.206Z","id":2348059958706176},{"userId":"concentration","cardId":"properly","insertedDate":"2023-07-30T12:48:21.448Z","id":3763667470385152}]};
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

