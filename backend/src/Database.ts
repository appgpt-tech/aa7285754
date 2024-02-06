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
    let data: any = {"Users":[{"userId":"next","email":"sometimes","name":"behind","id":6056638718935040},{"userId":"phooey","email":"recklessly","name":"wide-eyed","id":4228789980626944},{"userId":"circa","email":"wheel","name":"perfect","id":5462133091336192},{"userId":"for","email":"past","name":"ping","id":7011108860723200},{"userId":"delayed","email":"gee","name":"digest","id":4743906925215744}],"Cards":[{"cardId":"before","setid":"around","cardName":"oh","serial":"notwithstanding","type":"behold","rarity":"ouch","condition":"grounded","imageurl":"shade","id":958214734610432},{"cardId":"cheerfully","setid":"mailer","cardName":"flash","serial":"a","type":"when","rarity":"but","condition":"from","imageurl":"supposing","id":7587225174802432},{"cardId":"hm","setid":"duh","cardName":"gee","serial":"hoist","type":"compass","rarity":"weaponise","condition":"wildly","imageurl":"oh","id":3985809386504192},{"cardId":"famously","setid":"wherever","cardName":"even","serial":"jaggedly","type":"until","rarity":"prize","condition":"below","imageurl":"yet","id":3174233540657152},{"cardId":"fashion","setid":"vainly","cardName":"solidly","serial":"quick","type":"calmly","rarity":"slew","condition":"different","imageurl":"general","id":5688064399638528}],"Sets":[{"setId":"finally","setname":"scarcely","releasedate":"2024-01-25T06:40:55.621Z","totalcards":3140791643930624,"id":5786571835965440},{"setId":"woot","setname":"gadzooks","releasedate":"2024-05-16T16:23:01.305Z","totalcards":2718333862412288,"id":4685628895657984},{"setId":"fasten","setname":"warmly","releasedate":"2024-10-20T18:06:23.064Z","totalcards":1494937268912128,"id":8254028509085696},{"setId":"modulo","setname":"quip","releasedate":"2023-12-06T04:47:33.796Z","totalcards":4140867526852608,"id":6126588649275392},{"setId":"lest","setname":"distort","releasedate":"2024-04-21T23:08:57.211Z","totalcards":582610029903872,"id":310611600736256}],"Inventory":[{"userId":"weedkiller","cardId":"beside","recordedDate":"2023-12-05T07:48:50.721Z","id":561230255226880},{"userId":"gosh","cardId":"not","recordedDate":"2023-06-05T08:16:07.440Z","id":2500575017041920},{"userId":"questionably","cardId":"frugal","recordedDate":"2025-02-03T13:42:09.662Z","id":3677501368827904},{"userId":"rattle","cardId":"where","recordedDate":"2024-07-24T07:26:22.149Z","id":4290053371068416},{"userId":"abaft","cardId":"cleanse","recordedDate":"2024-05-24T11:44:46.737Z","id":636042805772288}],"Wishlist":[{"userId":"imperturbable","cardId":"putrefy","insertedDate":"2023-08-25T01:26:40.344Z","id":8123764011171840},{"userId":"eek","cardId":"brightly","insertedDate":"2023-08-02T09:02:59.298Z","id":3672050711396352},{"userId":"ethical","cardId":"morphology","insertedDate":"2023-05-10T14:11:56.981Z","id":2126182608797696},{"userId":"curse","cardId":"peddle","insertedDate":"2024-06-01T12:34:05.126Z","id":4842250653663232},{"userId":"bah","cardId":"other","insertedDate":"2024-11-01T05:00:55.967Z","id":2811718000443392}]};
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

