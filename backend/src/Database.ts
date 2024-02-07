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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":9},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":12},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":63},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":9},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":3}],"Vendors":[{"vendorId":"vendorId 1","companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":58},{"vendorId":"vendorId 2","companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":51},{"vendorId":"vendorId 3","companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":70},{"vendorId":"vendorId 4","companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":66},{"vendorId":"vendorId 5","companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":32}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","defaultShippingAddress":"defaultShippingAddress 1","country":"country 1","phone":"phone 1","cartId":"cartId 1","id":30},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","defaultShippingAddress":"defaultShippingAddress 2","country":"country 2","phone":"phone 2","cartId":"cartId 2","id":52},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","defaultShippingAddress":"defaultShippingAddress 3","country":"country 3","phone":"phone 3","cartId":"cartId 3","id":79},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","defaultShippingAddress":"defaultShippingAddress 4","country":"country 4","phone":"phone 4","cartId":"cartId 4","id":30},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","defaultShippingAddress":"defaultShippingAddress 5","country":"country 5","phone":"phone 5","cartId":"cartId 5","id":95}],"Inventory":[{"productId":"productId 1","quantity":1,"lowStockThreshold":1,"id":55},{"productId":"productId 2","quantity":2,"lowStockThreshold":2,"id":79},{"productId":"productId 3","quantity":3,"lowStockThreshold":3,"id":37},{"productId":"productId 4","quantity":4,"lowStockThreshold":4,"id":64},{"productId":"productId 5","quantity":5,"lowStockThreshold":5,"id":40}],"Products":[{"productId":"productId 1","vendorId":1,"name":"name 1","price":0.1,"weight":0.3,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createDate":"2023-02-28T13:11:12.984Z","stock":1,"id":32},{"productId":"productId 2","vendorId":2,"name":"name 2","price":0.85,"weight":0.89,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createDate":"2023-06-03T05:59:13.218Z","stock":2,"id":43},{"productId":"productId 3","vendorId":3,"name":"name 3","price":0.38,"weight":0.5,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createDate":"2023-08-03T17:25:23.607Z","stock":3,"id":66},{"productId":"productId 4","vendorId":4,"name":"name 4","price":0.34,"weight":0.25,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createDate":"2023-10-07T19:29:48.983Z","stock":4,"id":34},{"productId":"productId 5","vendorId":5,"name":"name 5","price":0.74,"weight":0.1,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createDate":"2024-06-08T17:42:45.844Z","stock":5,"id":36}],"ProductCategories":[{"categoryId":"categoryId 1","productId":1,"description":"description 1","id":67},{"categoryId":"categoryId 2","productId":2,"description":"description 2","id":98},{"categoryId":"categoryId 3","productId":3,"description":"description 3","id":18},{"categoryId":"categoryId 4","productId":4,"description":"description 4","id":0},{"categoryId":"categoryId 5","productId":5,"description":"description 5","id":0}],"Discounts":[{"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.43,"discountPercent":0.47,"id":65},{"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.36,"discountPercent":0.55,"id":48},{"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.19,"discountPercent":0.62,"id":18},{"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.03,"discountPercent":0.88,"id":32},{"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.65,"discountPercent":0.08,"id":10}],"ShoppingCart":[{"cartId":"cartId 1","customerId":1,"productId":1,"price":0.73,"quantity":1,"id":30},{"cartId":"cartId 2","customerId":2,"productId":2,"price":0.51,"quantity":2,"id":92},{"cartId":"cartId 3","customerId":3,"productId":3,"price":0.93,"quantity":3,"id":10},{"cartId":"cartId 4","customerId":4,"productId":4,"price":0.08,"quantity":4,"id":81},{"cartId":"cartId 5","customerId":5,"productId":5,"price":0.43,"quantity":5,"id":34}],"Orders":[{"orderId":"orderId 1","customerId":1,"totalAmount":0.08,"vat":0.74,"productTotalAmount":0.37,"shippingCost":0.67,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-11-21T07:12:40.979Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":30},{"orderId":"orderId 2","customerId":2,"totalAmount":0.17,"vat":0.18,"productTotalAmount":0.24,"shippingCost":0.35,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2024-09-11T08:46:14.781Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":95},{"orderId":"orderId 3","customerId":3,"totalAmount":0.06,"vat":0.33,"productTotalAmount":0.97,"shippingCost":0.91,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2023-10-17T19:47:10.152Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":4},{"orderId":"orderId 4","customerId":4,"totalAmount":0.68,"vat":0.69,"productTotalAmount":0.31,"shippingCost":0.77,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2024-09-25T10:44:23.954Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":69},{"orderId":"orderId 5","customerId":5,"totalAmount":0.24,"vat":0.12,"productTotalAmount":0.18,"shippingCost":0.39,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2023-08-19T15:44:56.648Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":79}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.54,"quantity":1,"id":83},{"orderId":2,"productId":2,"price":0.79,"quantity":2,"id":14},{"orderId":3,"productId":3,"price":0.44,"quantity":3,"id":43},{"orderId":4,"productId":4,"price":0.04,"quantity":4,"id":75},{"orderId":5,"productId":5,"price":0.7,"quantity":5,"id":82}],"Payments":[{"paymentId":"paymentId 1","orderId":1,"amount":0.35,"paymentMethod":"paymentMethod 1","paymentDate":"2023-03-07T00:51:22.018Z","paymentStatus":"paymentStatus 1","id":39},{"paymentId":"paymentId 2","orderId":2,"amount":0.69,"paymentMethod":"paymentMethod 2","paymentDate":"2024-10-02T23:11:19.824Z","paymentStatus":"paymentStatus 2","id":25},{"paymentId":"paymentId 3","orderId":3,"amount":0.15,"paymentMethod":"paymentMethod 3","paymentDate":"2023-10-28T00:26:54.929Z","paymentStatus":"paymentStatus 3","id":28},{"paymentId":"paymentId 4","orderId":4,"amount":0.84,"paymentMethod":"paymentMethod 4","paymentDate":"2024-03-20T17:59:28.126Z","paymentStatus":"paymentStatus 4","id":84},{"paymentId":"paymentId 5","orderId":5,"amount":0.17,"paymentMethod":"paymentMethod 5","paymentDate":"2024-12-25T03:50:47.719Z","paymentStatus":"paymentStatus 5","id":55}],"Reviews":[{"reviewId":"reviewId 1","productId":1,"customerId":1,"vendorId":1,"rating":1,"reviewDetails":"reviewDetails 1","date":"2023-08-29T00:34:35.464Z","id":44},{"reviewId":"reviewId 2","productId":2,"customerId":2,"vendorId":2,"rating":2,"reviewDetails":"reviewDetails 2","date":"2023-09-13T12:24:02.256Z","id":21},{"reviewId":"reviewId 3","productId":3,"customerId":3,"vendorId":3,"rating":3,"reviewDetails":"reviewDetails 3","date":"2023-11-10T23:18:37.336Z","id":37},{"reviewId":"reviewId 4","productId":4,"customerId":4,"vendorId":4,"rating":4,"reviewDetails":"reviewDetails 4","date":"2023-06-27T12:15:58.262Z","id":40},{"reviewId":"reviewId 5","productId":5,"customerId":5,"vendorId":5,"rating":5,"reviewDetails":"reviewDetails 5","date":"2025-01-14T16:40:46.911Z","id":8}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-03-05T09:12:13.961Z","resolutionDate":"2023-05-11T09:42:34.903Z","id":25},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-03-14T14:52:28.070Z","resolutionDate":"2023-10-30T23:29:29.035Z","id":47},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-08-20T05:17:33.556Z","resolutionDate":"2024-11-05T19:41:50.872Z","id":97},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-11-06T07:58:13.002Z","resolutionDate":"2023-04-22T05:38:13.613Z","id":4},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-06-18T14:40:40.600Z","resolutionDate":"2023-05-28T07:08:14.918Z","id":33}]};
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

