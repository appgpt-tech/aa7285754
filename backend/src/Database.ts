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
    let data: any = {"Users":[{"userId":"nor","email":"seldom","name":"used","id":6194370403368960},{"userId":"yippee","email":"zowie","name":"whose","id":828185440681984},{"userId":"before","email":"concept","name":"lone","id":7041288517976064},{"userId":"ah","email":"midst","name":"liquid","id":370378048274432},{"userId":"loosely","email":"circa","name":"ugh","id":5630728924561408}],"Cards":[{"cardId":"instinct","setid":"orchestrate","cardName":"ooze","serial":"anenst","type":"so","rarity":"loathe","condition":"often","imageurl":"playfully","id":3853825865678848},{"cardId":"though","setid":"boohoo","cardName":"joke","serial":"quintuple","type":"residue","rarity":"where","condition":"chinchilla","imageurl":"colossal","id":5413365644001280},{"cardId":"whole","setid":"near","cardName":"decrease","serial":"dangle","type":"into","rarity":"primary","condition":"inconvenience","imageurl":"whereas","id":760689488560128},{"cardId":"title","setid":"clave","cardName":"massive","serial":"joint","type":"mindless","rarity":"yahoo","condition":"horseradish","imageurl":"annually","id":4539774251565056},{"cardId":"resurrect","setid":"weakly","cardName":"realistic","serial":"round","type":"freelance","rarity":"maximise","condition":"ugh","imageurl":"incidentally","id":775359207309312}],"Sets":[{"setId":"oily","setname":"yuck","releasedate":"2024-12-17T12:15:35.602Z","totalcards":7928458925572096,"id":8369939209519104},{"setId":"rowdy","setname":"disestablish","releasedate":"2023-06-11T23:06:26.590Z","totalcards":2255528648507392,"id":8804728372723712},{"setId":"until","setname":"modulo","releasedate":"2024-08-02T17:08:12.008Z","totalcards":5832423059226624,"id":6807391479791616},{"setId":"nor","setname":"while","releasedate":"2024-04-20T04:28:33.128Z","totalcards":6329657796329472,"id":4684051887685632},{"setId":"stoke","setname":"once","releasedate":"2024-02-16T20:42:00.447Z","totalcards":884043025481728,"id":3067929352470528}],"Inventory":[{"userId":"since","cardId":"preserves","recordedDate":"2023-03-27T15:50:10.147Z","id":4514162157813760},{"userId":"mile","cardId":"limply","recordedDate":"2023-05-14T03:16:02.794Z","id":6594323636289536},{"userId":"unlike","cardId":"zowie","recordedDate":"2023-04-05T02:55:23.048Z","id":6182505308749824},{"userId":"dear","cardId":"strictly","recordedDate":"2024-04-08T20:17:19.854Z","id":5912410965671936},{"userId":"grape","cardId":"more","recordedDate":"2023-08-13T17:34:39.694Z","id":4167862413426688}],"Wishlist":[{"userId":"pulse","cardId":"role","insertedDate":"2024-05-20T13:10:48.898Z","id":6771505801199616},{"userId":"lest","cardId":"yellow","insertedDate":"2024-04-01T00:51:43.516Z","id":1186272984956928},{"userId":"triad","cardId":"huzzah","insertedDate":"2024-02-06T19:35:32.703Z","id":6527942477742080},{"userId":"searchingly","cardId":"waffle","insertedDate":"2023-02-25T21:42:51.653Z","id":1090256111665152},{"userId":"homely","cardId":"sample","insertedDate":"2024-02-15T06:05:45.591Z","id":8862571645894656}]};
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

