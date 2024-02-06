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
    let data: any = {"Users":[{"userId":"yum","email":"phew","name":"against","id":3563794997444608},{"userId":"huddle","email":"milky","name":"comb","id":1996138999709696},{"userId":"whose","email":"till","name":"faithfully","id":2915664866050048},{"userId":"unless","email":"oof","name":"slushy","id":2638970330546176},{"userId":"hence","email":"polyester","name":"beneficial","id":3429831387643904}],"Cards":[{"cardId":"below","setid":"aw","cardName":"but","serial":"drat","type":"despite","rarity":"unwitting","condition":"adjust","imageurl":"which","id":7678445609811968},{"cardId":"instead","setid":"serum","cardName":"basil","serial":"tremendously","type":"overstock","rarity":"resort","condition":"or","imageurl":"dream","id":7334744163352576},{"cardId":"with","setid":"collection","cardName":"whoa","serial":"awesome","type":"sneaker","rarity":"aside","condition":"loosely","imageurl":"colorfully","id":7595297144307712},{"cardId":"zowie","setid":"pfft","cardName":"lest","serial":"huzzah","type":"treasury","rarity":"fill","condition":"although","imageurl":"grass","id":6188151473176576},{"cardId":"elaborate","setid":"terrapin","cardName":"neaten","serial":"if","type":"truthfully","rarity":"daily","condition":"crank","imageurl":"pet","id":3628080375529472}],"Sets":[{"setId":"gee","setname":"onto","releasedate":"2023-11-24T00:44:36.440Z","totalcards":4444608891191296,"id":8795577405931520},{"setId":"made-up","setname":"tiny","releasedate":"2024-03-27T07:18:30.401Z","totalcards":957073296719872,"id":3814780131344384},{"setId":"underneath","setname":"fancy","releasedate":"2024-03-16T11:20:29.779Z","totalcards":4482449901879296,"id":5134270911741952},{"setId":"welcome","setname":"smoothly","releasedate":"2024-05-09T04:42:46.125Z","totalcards":1032995962093568,"id":1749751466819584},{"setId":"seriously","setname":"who","releasedate":"2024-01-01T22:43:22.224Z","totalcards":8624594904678400,"id":8679078833946624}],"Inventory":[{"userId":"notch","cardId":"columnist","recordedDate":"2023-08-29T10:56:06.802Z","id":5151565744701440},{"userId":"traffic","cardId":"stepson","recordedDate":"2024-04-14T15:18:25.974Z","id":1654109188915200},{"userId":"where","cardId":"carelessly","recordedDate":"2023-11-05T00:05:24.314Z","id":8883945244459008},{"userId":"almost","cardId":"tough","recordedDate":"2024-08-02T16:42:32.774Z","id":783428119166976},{"userId":"bah","cardId":"pneumonia","recordedDate":"2024-09-02T14:34:42.028Z","id":933003731664896}],"Wishlist":[{"userId":"geez","cardId":"huzzah","insertedDate":"2023-05-01T13:19:54.078Z","id":4410179275718656},{"userId":"oof","cardId":"hairy","insertedDate":"2024-10-06T22:47:21.791Z","id":160072950874112},{"userId":"standard","cardId":"sternly","insertedDate":"2023-03-07T14:38:29.174Z","id":5697136616275968},{"userId":"gummy","cardId":"ha","insertedDate":"2024-12-13T17:33:11.763Z","id":3605495547953152},{"userId":"when","cardId":"fondly","insertedDate":"2023-05-31T04:37:59.682Z","id":456550936215552}]};
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

