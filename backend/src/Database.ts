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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":16},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":25},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":89},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":12},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":98}],"Vendors":[{"vendorId":"vendorId 1","companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":58},{"vendorId":"vendorId 2","companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":36},{"vendorId":"vendorId 3","companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":6},{"vendorId":"vendorId 4","companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":23},{"vendorId":"vendorId 5","companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":74}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","defaultShippingAddress":"defaultShippingAddress 1","country":"country 1","phone":"phone 1","cartId":"cartId 1","id":22},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","defaultShippingAddress":"defaultShippingAddress 2","country":"country 2","phone":"phone 2","cartId":"cartId 2","id":18},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","defaultShippingAddress":"defaultShippingAddress 3","country":"country 3","phone":"phone 3","cartId":"cartId 3","id":62},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","defaultShippingAddress":"defaultShippingAddress 4","country":"country 4","phone":"phone 4","cartId":"cartId 4","id":76},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","defaultShippingAddress":"defaultShippingAddress 5","country":"country 5","phone":"phone 5","cartId":"cartId 5","id":54}],"Inventory":[{"productId":"productId 1","quantity":1,"lowStockThreshold":1,"id":31},{"productId":"productId 2","quantity":2,"lowStockThreshold":2,"id":69},{"productId":"productId 3","quantity":3,"lowStockThreshold":3,"id":6},{"productId":"productId 4","quantity":4,"lowStockThreshold":4,"id":42},{"productId":"productId 5","quantity":5,"lowStockThreshold":5,"id":23}],"Products":[{"productId":"productId 1","vendorId":1,"name":"name 1","price":0.6,"weight":0.14,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createDate":"2023-09-12T18:11:12.819Z","stock":1,"id":37},{"productId":"productId 2","vendorId":2,"name":"name 2","price":0.59,"weight":0.61,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createDate":"2024-03-08T15:55:39.197Z","stock":2,"id":90},{"productId":"productId 3","vendorId":3,"name":"name 3","price":0.42,"weight":0.69,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createDate":"2024-12-26T05:40:07.577Z","stock":3,"id":17},{"productId":"productId 4","vendorId":4,"name":"name 4","price":0.72,"weight":0.51,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createDate":"2024-09-13T03:59:16.286Z","stock":4,"id":23},{"productId":"productId 5","vendorId":5,"name":"name 5","price":0.24,"weight":0.82,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createDate":"2024-04-23T19:26:01.377Z","stock":5,"id":84}],"ProductCategories":[{"categoryId":"categoryId 1","productId":1,"description":"description 1","id":79},{"categoryId":"categoryId 2","productId":2,"description":"description 2","id":0},{"categoryId":"categoryId 3","productId":3,"description":"description 3","id":92},{"categoryId":"categoryId 4","productId":4,"description":"description 4","id":89},{"categoryId":"categoryId 5","productId":5,"description":"description 5","id":6}],"Discounts":[{"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.87,"discountPercent":0.93,"id":59},{"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.62,"discountPercent":0.48,"id":4},{"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.17,"discountPercent":0.36,"id":58},{"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.51,"discountPercent":0.09,"id":100},{"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.53,"discountPercent":0.9,"id":78}],"ShoppingCart":[{"cartId":"cartId 1","customerId":1,"productId":1,"price":0.72,"quantity":1,"id":85},{"cartId":"cartId 2","customerId":2,"productId":2,"price":0.8,"quantity":2,"id":35},{"cartId":"cartId 3","customerId":3,"productId":3,"price":0.99,"quantity":3,"id":70},{"cartId":"cartId 4","customerId":4,"productId":4,"price":0.53,"quantity":4,"id":1},{"cartId":"cartId 5","customerId":5,"productId":5,"price":0.48,"quantity":5,"id":87}],"Orders":[{"orderId":"orderId 1","customerId":1,"totalAmount":0.28,"vat":0.23,"productTotalAmount":0.76,"shippingCost":1,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-08-27T14:28:58.427Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":11},{"orderId":"orderId 2","customerId":2,"totalAmount":0.07,"vat":0.54,"productTotalAmount":0.32,"shippingCost":0.22,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2024-05-28T08:41:30.054Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":76},{"orderId":"orderId 3","customerId":3,"totalAmount":0.93,"vat":0.54,"productTotalAmount":0.77,"shippingCost":0.15,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2023-07-21T13:50:49.741Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":11},{"orderId":"orderId 4","customerId":4,"totalAmount":0.8,"vat":0.3,"productTotalAmount":0.73,"shippingCost":0.73,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2023-09-13T10:50:11.722Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":28},{"orderId":"orderId 5","customerId":5,"totalAmount":0.13,"vat":0.68,"productTotalAmount":0.48,"shippingCost":0.93,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2024-11-21T17:01:36.558Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":61}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.95,"quantity":1,"id":38},{"orderId":2,"productId":2,"price":0.36,"quantity":2,"id":23},{"orderId":3,"productId":3,"price":0.75,"quantity":3,"id":3},{"orderId":4,"productId":4,"price":0.51,"quantity":4,"id":15},{"orderId":5,"productId":5,"price":0.31,"quantity":5,"id":20}],"Payments":[{"paymentId":"paymentId 1","orderId":1,"amount":0.91,"paymentMethod":"paymentMethod 1","paymentDate":"2024-02-21T19:50:45.886Z","paymentStatus":"paymentStatus 1","id":93},{"paymentId":"paymentId 2","orderId":2,"amount":0.62,"paymentMethod":"paymentMethod 2","paymentDate":"2023-12-03T18:55:48.032Z","paymentStatus":"paymentStatus 2","id":6},{"paymentId":"paymentId 3","orderId":3,"amount":0.83,"paymentMethod":"paymentMethod 3","paymentDate":"2023-12-11T02:01:03.326Z","paymentStatus":"paymentStatus 3","id":84},{"paymentId":"paymentId 4","orderId":4,"amount":0.48,"paymentMethod":"paymentMethod 4","paymentDate":"2024-07-10T23:48:11.732Z","paymentStatus":"paymentStatus 4","id":94},{"paymentId":"paymentId 5","orderId":5,"amount":0.32,"paymentMethod":"paymentMethod 5","paymentDate":"2023-06-18T07:19:07.201Z","paymentStatus":"paymentStatus 5","id":52}],"Reviews":[{"reviewId":"reviewId 1","productId":1,"customerId":1,"vendorId":1,"rating":1,"reviewDetails":"reviewDetails 1","date":"2024-02-28T13:42:15.129Z","id":91},{"reviewId":"reviewId 2","productId":2,"customerId":2,"vendorId":2,"rating":2,"reviewDetails":"reviewDetails 2","date":"2024-10-01T13:04:58.497Z","id":73},{"reviewId":"reviewId 3","productId":3,"customerId":3,"vendorId":3,"rating":3,"reviewDetails":"reviewDetails 3","date":"2023-12-03T11:57:05.302Z","id":40},{"reviewId":"reviewId 4","productId":4,"customerId":4,"vendorId":4,"rating":4,"reviewDetails":"reviewDetails 4","date":"2025-02-04T03:19:30.513Z","id":4},{"reviewId":"reviewId 5","productId":5,"customerId":5,"vendorId":5,"rating":5,"reviewDetails":"reviewDetails 5","date":"2024-04-10T12:07:49.584Z","id":4}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-01-23T02:38:27.118Z","resolutionDate":"2025-01-22T22:17:02.956Z","id":12},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2025-01-27T02:56:07.394Z","resolutionDate":"2023-12-15T00:19:36.028Z","id":61},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2025-01-06T02:44:28.923Z","resolutionDate":"2024-07-31T18:02:50.233Z","id":16},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-08-16T03:34:52.752Z","resolutionDate":"2025-01-04T17:11:43.979Z","id":33},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-10-31T06:14:23.587Z","resolutionDate":"2023-02-19T20:14:27.385Z","id":31}]};
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

