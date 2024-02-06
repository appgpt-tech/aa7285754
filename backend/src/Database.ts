//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { VendorsEntity } from "./db/Vendors.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { InventoryEntity } from "./db/Inventory.entity";
import { ProductsEntity } from "./db/Products.entity";
import { ProductCategoriesEntity } from "./db/ProductCategories.entity";
import { DiscountsEntity } from "./db/Discounts.entity";
import { ShoppingCartEntity } from "./db/ShoppingCart.entity";
import { OrdersEntity } from "./db/Orders.entity";
import { OrderDetailsEntity } from "./db/OrderDetails.entity";
import { PaymentsEntity } from "./db/Payments.entity";
import { ReviewsEntity } from "./db/Reviews.entity";
import { SupportTicketsEntity } from "./db/SupportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, VendorsEntity, CustomersEntity, InventoryEntity, ProductsEntity, ProductCategoriesEntity, DiscountsEntity, ShoppingCartEntity, OrdersEntity, OrderDetailsEntity, PaymentsEntity, ReviewsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":77},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":77},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":27},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":26},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":25}],"Vendors":[{"vendorId":"vendorId 1","companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":33},{"vendorId":"vendorId 2","companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":57},{"vendorId":"vendorId 3","companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":79},{"vendorId":"vendorId 4","companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":18},{"vendorId":"vendorId 5","companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":39}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","defaultShippingAddress":"defaultShippingAddress 1","country":"country 1","phone":"phone 1","cartId":"cartId 1","id":10},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","defaultShippingAddress":"defaultShippingAddress 2","country":"country 2","phone":"phone 2","cartId":"cartId 2","id":32},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","defaultShippingAddress":"defaultShippingAddress 3","country":"country 3","phone":"phone 3","cartId":"cartId 3","id":59},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","defaultShippingAddress":"defaultShippingAddress 4","country":"country 4","phone":"phone 4","cartId":"cartId 4","id":77},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","defaultShippingAddress":"defaultShippingAddress 5","country":"country 5","phone":"phone 5","cartId":"cartId 5","id":22}],"Inventory":[{"productId":"productId 1","quantity":51,"lowStockThreshold":28,"id":38},{"productId":"productId 2","quantity":94,"lowStockThreshold":87,"id":54},{"productId":"productId 3","quantity":53,"lowStockThreshold":100,"id":8},{"productId":"productId 4","quantity":6,"lowStockThreshold":34,"id":53},{"productId":"productId 5","quantity":88,"lowStockThreshold":93,"id":82}],"Products":[{"productId":"productId 1","vendorId":1,"name":"name 1","price":0.9,"weight":0.95,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createDate":"2023-02-25T19:51:12.202Z","stock":48,"id":76},{"productId":"productId 2","vendorId":2,"name":"name 2","price":0,"weight":0.51,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createDate":"2024-07-29T08:51:54.791Z","stock":69,"id":27},{"productId":"productId 3","vendorId":3,"name":"name 3","price":0.69,"weight":0.91,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createDate":"2024-02-23T09:12:42.120Z","stock":33,"id":82},{"productId":"productId 4","vendorId":4,"name":"name 4","price":0.39,"weight":0.24,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createDate":"2023-03-14T18:43:33.017Z","stock":81,"id":37},{"productId":"productId 5","vendorId":5,"name":"name 5","price":0.95,"weight":0.26,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createDate":"2023-08-18T05:29:15.444Z","stock":53,"id":55}],"ProductCategories":[{"categoryId":"categoryId 1","productId":1,"description":"description 1","id":15},{"categoryId":"categoryId 2","productId":2,"description":"description 2","id":51},{"categoryId":"categoryId 3","productId":3,"description":"description 3","id":58},{"categoryId":"categoryId 4","productId":4,"description":"description 4","id":32},{"categoryId":"categoryId 5","productId":5,"description":"description 5","id":15}],"Discounts":[{"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.73,"discountPercent":0.7,"id":21},{"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.83,"discountPercent":0.72,"id":30},{"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.48,"discountPercent":0.47,"id":4},{"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.54,"discountPercent":0.53,"id":82},{"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.72,"discountPercent":0.98,"id":54}],"ShoppingCart":[{"cartId":"cartId 1","customerId":1,"productId":1,"price":0.31,"quantity":57,"id":34},{"cartId":"cartId 2","customerId":2,"productId":2,"price":0.28,"quantity":38,"id":48},{"cartId":"cartId 3","customerId":3,"productId":3,"price":0.93,"quantity":1,"id":18},{"cartId":"cartId 4","customerId":4,"productId":4,"price":0.85,"quantity":57,"id":13},{"cartId":"cartId 5","customerId":5,"productId":5,"price":0.31,"quantity":82,"id":35}],"Orders":[{"orderId":"orderId 1","customerId":1,"totalAmount":0.91,"vat":0.21,"productTotalAmount":0.43,"shippingCost":0.64,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2023-08-25T15:34:05.692Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":99},{"orderId":"orderId 2","customerId":2,"totalAmount":0.95,"vat":0.38,"productTotalAmount":0.32,"shippingCost":0.42,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2023-10-23T15:20:48.559Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":65},{"orderId":"orderId 3","customerId":3,"totalAmount":0.75,"vat":0.43,"productTotalAmount":0.94,"shippingCost":0.25,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2023-06-03T03:29:46.624Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":53},{"orderId":"orderId 4","customerId":4,"totalAmount":0.33,"vat":0.23,"productTotalAmount":0.65,"shippingCost":0.11,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2023-07-29T11:32:18.533Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":56},{"orderId":"orderId 5","customerId":5,"totalAmount":0.28,"vat":0.58,"productTotalAmount":0.26,"shippingCost":0.01,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2024-08-19T10:35:51.746Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":25}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.12,"quantity":51,"id":92},{"orderId":2,"productId":2,"price":0.89,"quantity":35,"id":86},{"orderId":3,"productId":3,"price":0.98,"quantity":100,"id":97},{"orderId":4,"productId":4,"price":0.21,"quantity":45,"id":37},{"orderId":5,"productId":5,"price":0.72,"quantity":99,"id":24}],"Payments":[{"paymentId":"paymentId 1","orderId":1,"amount":0.07,"paymentMethod":"paymentMethod 1","paymentDate":"2024-06-27T22:57:36.712Z","paymentStatus":"paymentStatus 1","id":81},{"paymentId":"paymentId 2","orderId":2,"amount":0.11,"paymentMethod":"paymentMethod 2","paymentDate":"2024-07-28T14:48:52.060Z","paymentStatus":"paymentStatus 2","id":90},{"paymentId":"paymentId 3","orderId":3,"amount":0.24,"paymentMethod":"paymentMethod 3","paymentDate":"2024-02-15T11:24:23.638Z","paymentStatus":"paymentStatus 3","id":37},{"paymentId":"paymentId 4","orderId":4,"amount":0.16,"paymentMethod":"paymentMethod 4","paymentDate":"2023-05-29T11:44:19.432Z","paymentStatus":"paymentStatus 4","id":28},{"paymentId":"paymentId 5","orderId":5,"amount":0.3,"paymentMethod":"paymentMethod 5","paymentDate":"2023-06-03T21:12:34.414Z","paymentStatus":"paymentStatus 5","id":6}],"Reviews":[{"reviewId":"reviewId 1","productId":1,"customerId":1,"vendorId":1,"rating":0.97,"reviewDetails":"reviewDetails 1","date":"2023-03-21T20:51:20.826Z","id":74},{"reviewId":"reviewId 2","productId":2,"customerId":2,"vendorId":2,"rating":0.07,"reviewDetails":"reviewDetails 2","date":"2024-06-03T01:54:37.370Z","id":17},{"reviewId":"reviewId 3","productId":3,"customerId":3,"vendorId":3,"rating":0.11,"reviewDetails":"reviewDetails 3","date":"2024-01-25T02:00:34.522Z","id":25},{"reviewId":"reviewId 4","productId":4,"customerId":4,"vendorId":4,"rating":0.85,"reviewDetails":"reviewDetails 4","date":"2024-09-16T12:49:39.682Z","id":69},{"reviewId":"reviewId 5","productId":5,"customerId":5,"vendorId":5,"rating":0.84,"reviewDetails":"reviewDetails 5","date":"2023-04-02T01:06:53.353Z","id":42}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-08-14T07:29:19.697Z","resolutionDate":"2024-09-23T03:33:30.392Z","id":72},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-04-15T22:19:48.051Z","resolutionDate":"2024-05-16T23:58:13.718Z","id":49},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-10-26T08:13:11.433Z","resolutionDate":"2023-02-27T13:52:51.688Z","id":63},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-08-30T18:58:08.318Z","resolutionDate":"2023-07-13T07:13:25.985Z","id":44},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-08-21T09:11:23.953Z","resolutionDate":"2023-07-26T15:16:42.938Z","id":45}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("VendorsEntity", data.Vendors);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("InventoryEntity", data.Inventory);
await this.SeedResource("ProductsEntity", data.Products);
await this.SeedResource("ProductCategoriesEntity", data.ProductCategories);
await this.SeedResource("DiscountsEntity", data.Discounts);
await this.SeedResource("ShoppingCartEntity", data.ShoppingCart);
await this.SeedResource("OrdersEntity", data.Orders);
await this.SeedResource("OrderDetailsEntity", data.OrderDetails);
await this.SeedResource("PaymentsEntity", data.Payments);
await this.SeedResource("ReviewsEntity", data.Reviews);
await this.SeedResource("SupportTicketsEntity", data.SupportTickets); 
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

