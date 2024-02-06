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
    let data: any = {"Users":[{"userId":"phooey","email":"than","name":"peacock","id":4544382394957824},{"userId":"how","email":"thunderous","name":"aw","id":7429042781290496},{"userId":"mysterious","email":"lively","name":"situate","id":5195031046520832},{"userId":"hmph","email":"off","name":"firsthand","id":2549989582569472},{"userId":"phooey","email":"supersize","name":"whoever","id":4267521129578496}],"Cards":[{"cardId":"unabashedly","setid":"hydrocarb","cardName":"innocently","serial":"blank","type":"into","rarity":"wrongly","condition":"however","imageurl":"taper","id":481583601549312},{"cardId":"ugh","setid":"rarely","cardName":"lest","serial":"medicate","type":"congregation","rarity":"straighten","condition":"since","imageurl":"contextualize","id":1352209463771136},{"cardId":"some","setid":"inoculate","cardName":"following","serial":"ugh","type":"dear","rarity":"modern","condition":"skipper","imageurl":"oof","id":8761883993571328},{"cardId":"perpendicular","setid":"pickaxe","cardName":"yet","serial":"excepting","type":"past","rarity":"cluster","condition":"crew","imageurl":"supposing","id":2906965439152128},{"cardId":"atop","setid":"while","cardName":"plump","serial":"second-hand","type":"abbreviation","rarity":"flow","condition":"until","imageurl":"wisely","id":1826794525163520}],"Sets":[{"setId":"emphasis","setname":"woot","releasedate":"2024-09-22T16:19:41.945Z","totalcards":5589840007528448,"id":8010349852753920},{"setId":"cudgel","setname":"phooey","releasedate":"2024-05-26T14:17:06.672Z","totalcards":1770836748926976,"id":6052025422839808},{"setId":"ponder","setname":"jumpy","releasedate":"2024-12-16T04:34:46.587Z","totalcards":3037946672316416,"id":3229493785264128},{"setId":"flow","setname":"footprint","releasedate":"2023-03-09T23:04:35.645Z","totalcards":8325430589259776,"id":6811271426998272},{"setId":"doll","setname":"since","releasedate":"2023-07-13T04:50:50.362Z","totalcards":2537425947590656,"id":7982868370292736}],"Inventory":[{"userId":"splendid","cardId":"prune","recordedDate":"2023-10-30T00:21:31.488Z","id":3860594790760448},{"userId":"even","cardId":"yet","recordedDate":"2023-11-23T08:09:20.691Z","id":2322450490589184},{"userId":"whereas","cardId":"woodshed","recordedDate":"2023-04-24T16:39:47.817Z","id":2763460307845120},{"userId":"observatory","cardId":"given","recordedDate":"2024-05-12T23:20:53.163Z","id":1590904582307840},{"userId":"after","cardId":"criminalize","recordedDate":"2024-07-05T07:15:56.627Z","id":2466014075813888}],"Wishlist":[{"userId":"colorfully","cardId":"though","insertedDate":"2024-02-01T06:54:26.436Z","id":4300502938419200},{"userId":"border","cardId":"timetable","insertedDate":"2023-10-16T22:43:05.819Z","id":2000382614044672},{"userId":"whenever","cardId":"that","insertedDate":"2023-12-09T18:43:14.727Z","id":6562370224652288},{"userId":"patiently","cardId":"slim","insertedDate":"2024-12-05T00:01:59.058Z","id":7295651412967424},{"userId":"skate","cardId":"itchy","insertedDate":"2024-06-13T01:08:44.207Z","id":2521404119449600}]};
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

