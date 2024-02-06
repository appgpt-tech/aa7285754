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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":86},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":21},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":23},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":22},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":55}],"Vendors":[{"vendorId":"vendorId 1","companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":98},{"vendorId":"vendorId 2","companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":39},{"vendorId":"vendorId 3","companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":43},{"vendorId":"vendorId 4","companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":78},{"vendorId":"vendorId 5","companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":67}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","defaultShippingAddress":"defaultShippingAddress 1","country":"country 1","phone":"phone 1","cartId":"cartId 1","id":60},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","defaultShippingAddress":"defaultShippingAddress 2","country":"country 2","phone":"phone 2","cartId":"cartId 2","id":9},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","defaultShippingAddress":"defaultShippingAddress 3","country":"country 3","phone":"phone 3","cartId":"cartId 3","id":1},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","defaultShippingAddress":"defaultShippingAddress 4","country":"country 4","phone":"phone 4","cartId":"cartId 4","id":47},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","defaultShippingAddress":"defaultShippingAddress 5","country":"country 5","phone":"phone 5","cartId":"cartId 5","id":85}],"Inventory":[{"productId":"productId 1","quantity":79,"lowStockThreshold":43,"id":93},{"productId":"productId 2","quantity":36,"lowStockThreshold":99,"id":97},{"productId":"productId 3","quantity":6,"lowStockThreshold":99,"id":29},{"productId":"productId 4","quantity":99,"lowStockThreshold":62,"id":87},{"productId":"productId 5","quantity":96,"lowStockThreshold":53,"id":53}],"Products":[{"productId":"productId 1","vendorId":1,"name":"name 1","price":0.07,"weight":0.87,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createDate":"2025-01-04T04:30:10.179Z","stock":64,"id":96},{"productId":"productId 2","vendorId":2,"name":"name 2","price":0.73,"weight":0.28,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createDate":"2023-09-30T01:14:32.542Z","stock":8,"id":89},{"productId":"productId 3","vendorId":3,"name":"name 3","price":0.99,"weight":0.84,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createDate":"2024-12-02T22:12:07.935Z","stock":11,"id":11},{"productId":"productId 4","vendorId":4,"name":"name 4","price":0.32,"weight":0.94,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createDate":"2024-08-29T11:52:44.971Z","stock":17,"id":27},{"productId":"productId 5","vendorId":5,"name":"name 5","price":0.55,"weight":0.63,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createDate":"2024-12-09T01:09:16.536Z","stock":64,"id":16}],"ProductCategories":[{"categoryId":"categoryId 1","productId":1,"description":"description 1","id":64},{"categoryId":"categoryId 2","productId":2,"description":"description 2","id":52},{"categoryId":"categoryId 3","productId":3,"description":"description 3","id":98},{"categoryId":"categoryId 4","productId":4,"description":"description 4","id":45},{"categoryId":"categoryId 5","productId":5,"description":"description 5","id":99}],"Discounts":[{"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.7,"discountPercent":0.89,"id":77},{"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.43,"discountPercent":0.16,"id":21},{"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.48,"discountPercent":0.82,"id":45},{"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.39,"discountPercent":0,"id":80},{"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.8,"discountPercent":0.33,"id":76}],"ShoppingCart":[{"cartId":"cartId 1","customerId":1,"productId":1,"price":0.51,"quantity":91,"id":7},{"cartId":"cartId 2","customerId":2,"productId":2,"price":0.96,"quantity":73,"id":40},{"cartId":"cartId 3","customerId":3,"productId":3,"price":0.16,"quantity":44,"id":68},{"cartId":"cartId 4","customerId":4,"productId":4,"price":0.6,"quantity":51,"id":86},{"cartId":"cartId 5","customerId":5,"productId":5,"price":0.79,"quantity":60,"id":69}],"Orders":[{"orderId":"orderId 1","customerId":1,"totalAmount":0.49,"vat":0.44,"productTotalAmount":0.61,"shippingCost":0.5,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-08-18T09:31:25.186Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":8},{"orderId":"orderId 2","customerId":2,"totalAmount":0.42,"vat":0.14,"productTotalAmount":0.44,"shippingCost":0.83,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2025-01-08T23:08:49.001Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":87},{"orderId":"orderId 3","customerId":3,"totalAmount":0.8,"vat":0.58,"productTotalAmount":0.1,"shippingCost":0.59,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2023-11-13T13:11:03.243Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":64},{"orderId":"orderId 4","customerId":4,"totalAmount":0.48,"vat":0.79,"productTotalAmount":0.45,"shippingCost":0.65,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2023-02-08T22:30:52.732Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":16},{"orderId":"orderId 5","customerId":5,"totalAmount":0.84,"vat":0.97,"productTotalAmount":0.39,"shippingCost":0.41,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2024-09-26T19:54:24.788Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":26}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.95,"quantity":28,"id":97},{"orderId":2,"productId":2,"price":0.8,"quantity":48,"id":22},{"orderId":3,"productId":3,"price":0.81,"quantity":11,"id":21},{"orderId":4,"productId":4,"price":0.32,"quantity":24,"id":62},{"orderId":5,"productId":5,"price":0.66,"quantity":76,"id":14}],"Payments":[{"paymentId":"paymentId 1","orderId":1,"amount":0.11,"paymentMethod":"paymentMethod 1","paymentDate":"2024-08-13T06:29:54.562Z","paymentStatus":"paymentStatus 1","id":57},{"paymentId":"paymentId 2","orderId":2,"amount":0.93,"paymentMethod":"paymentMethod 2","paymentDate":"2024-12-16T12:02:42.450Z","paymentStatus":"paymentStatus 2","id":30},{"paymentId":"paymentId 3","orderId":3,"amount":0.06,"paymentMethod":"paymentMethod 3","paymentDate":"2025-01-13T21:12:17.527Z","paymentStatus":"paymentStatus 3","id":89},{"paymentId":"paymentId 4","orderId":4,"amount":0.21,"paymentMethod":"paymentMethod 4","paymentDate":"2023-03-17T02:12:37.672Z","paymentStatus":"paymentStatus 4","id":31},{"paymentId":"paymentId 5","orderId":5,"amount":0.35,"paymentMethod":"paymentMethod 5","paymentDate":"2025-01-20T03:12:19.065Z","paymentStatus":"paymentStatus 5","id":19}],"Reviews":[{"reviewId":"reviewId 1","productId":1,"customerId":1,"vendorId":1,"rating":24,"reviewDetails":"reviewDetails 1","date":"2023-12-26T11:46:28.307Z","id":57},{"reviewId":"reviewId 2","productId":2,"customerId":2,"vendorId":2,"rating":26,"reviewDetails":"reviewDetails 2","date":"2024-12-12T21:45:45.436Z","id":3},{"reviewId":"reviewId 3","productId":3,"customerId":3,"vendorId":3,"rating":91,"reviewDetails":"reviewDetails 3","date":"2024-07-25T13:39:01.660Z","id":68},{"reviewId":"reviewId 4","productId":4,"customerId":4,"vendorId":4,"rating":53,"reviewDetails":"reviewDetails 4","date":"2025-01-14T20:20:05.626Z","id":23},{"reviewId":"reviewId 5","productId":5,"customerId":5,"vendorId":5,"rating":17,"reviewDetails":"reviewDetails 5","date":"2023-04-13T01:20:19.941Z","id":42}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-08-23T05:06:33.398Z","resolutionDate":"2023-12-15T18:33:39.961Z","id":25},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-04-16T01:35:13.583Z","resolutionDate":"2025-01-17T05:44:48.211Z","id":57},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-12-22T20:02:17.229Z","resolutionDate":"2023-06-10T10:18:55.843Z","id":30},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-07-12T05:59:52.479Z","resolutionDate":"2024-06-21T06:56:38.479Z","id":6},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-03-27T20:21:34.236Z","resolutionDate":"2024-05-10T04:28:41.831Z","id":62}]};
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

