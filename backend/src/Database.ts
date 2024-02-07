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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":10},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":54},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":91},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":85},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":38}],"Vendors":[{"vendorId":"vendorId 1","companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":29},{"vendorId":"vendorId 2","companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":13},{"vendorId":"vendorId 3","companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":85},{"vendorId":"vendorId 4","companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":87},{"vendorId":"vendorId 5","companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":36}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","defaultShippingAddress":"defaultShippingAddress 1","country":"country 1","phone":"phone 1","cartId":"cartId 1","id":85},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","defaultShippingAddress":"defaultShippingAddress 2","country":"country 2","phone":"phone 2","cartId":"cartId 2","id":11},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","defaultShippingAddress":"defaultShippingAddress 3","country":"country 3","phone":"phone 3","cartId":"cartId 3","id":33},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","defaultShippingAddress":"defaultShippingAddress 4","country":"country 4","phone":"phone 4","cartId":"cartId 4","id":92},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","defaultShippingAddress":"defaultShippingAddress 5","country":"country 5","phone":"phone 5","cartId":"cartId 5","id":84}],"Inventory":[{"productId":"productId 1","quantity":1,"lowStockThreshold":1,"id":85},{"productId":"productId 2","quantity":2,"lowStockThreshold":2,"id":72},{"productId":"productId 3","quantity":3,"lowStockThreshold":3,"id":87},{"productId":"productId 4","quantity":4,"lowStockThreshold":4,"id":86},{"productId":"productId 5","quantity":5,"lowStockThreshold":5,"id":82}],"Products":[{"productId":"productId 1","vendorId":1,"name":"name 1","price":0.62,"weight":0.45,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createDate":"2023-10-04T13:05:12.269Z","stock":1,"id":75},{"productId":"productId 2","vendorId":2,"name":"name 2","price":0.98,"weight":0.11,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createDate":"2023-03-20T03:48:09.026Z","stock":2,"id":61},{"productId":"productId 3","vendorId":3,"name":"name 3","price":0.5,"weight":0.71,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createDate":"2024-03-30T23:27:02.775Z","stock":3,"id":11},{"productId":"productId 4","vendorId":4,"name":"name 4","price":0.2,"weight":0.16,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createDate":"2023-09-25T20:10:14.810Z","stock":4,"id":79},{"productId":"productId 5","vendorId":5,"name":"name 5","price":0.03,"weight":0.05,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createDate":"2024-07-03T01:09:53.271Z","stock":5,"id":96}],"ProductCategories":[{"categoryId":"categoryId 1","productId":1,"description":"description 1","id":81},{"categoryId":"categoryId 2","productId":2,"description":"description 2","id":21},{"categoryId":"categoryId 3","productId":3,"description":"description 3","id":4},{"categoryId":"categoryId 4","productId":4,"description":"description 4","id":100},{"categoryId":"categoryId 5","productId":5,"description":"description 5","id":51}],"Discounts":[{"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.82,"discountPercent":0.19,"id":42},{"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.47,"discountPercent":0.14,"id":9},{"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.11,"discountPercent":0.53,"id":25},{"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.71,"discountPercent":0.18,"id":13},{"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.12,"discountPercent":0.49,"id":3}],"ShoppingCart":[{"cartId":"cartId 1","customerId":1,"productId":1,"price":0.52,"quantity":1,"id":78},{"cartId":"cartId 2","customerId":2,"productId":2,"price":0.36,"quantity":2,"id":82},{"cartId":"cartId 3","customerId":3,"productId":3,"price":0.66,"quantity":3,"id":17},{"cartId":"cartId 4","customerId":4,"productId":4,"price":0.48,"quantity":4,"id":72},{"cartId":"cartId 5","customerId":5,"productId":5,"price":0.57,"quantity":5,"id":35}],"Orders":[{"orderId":"orderId 1","customerId":1,"totalAmount":0.6,"vat":0.77,"productTotalAmount":0.36,"shippingCost":0.35,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-02-16T03:30:23.595Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":8},{"orderId":"orderId 2","customerId":2,"totalAmount":0.67,"vat":0.85,"productTotalAmount":0.21,"shippingCost":0.85,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2023-10-21T18:04:33.518Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":75},{"orderId":"orderId 3","customerId":3,"totalAmount":0.4,"vat":0.59,"productTotalAmount":0.55,"shippingCost":0.89,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2024-05-25T15:38:27.264Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":99},{"orderId":"orderId 4","customerId":4,"totalAmount":0.1,"vat":0.62,"productTotalAmount":0.35,"shippingCost":0.64,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2023-09-15T22:51:12.970Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":62},{"orderId":"orderId 5","customerId":5,"totalAmount":0.79,"vat":0.87,"productTotalAmount":0.16,"shippingCost":0.24,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2023-04-06T09:01:12.830Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":67}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.3,"quantity":1,"id":83},{"orderId":2,"productId":2,"price":0.31,"quantity":2,"id":17},{"orderId":3,"productId":3,"price":0.48,"quantity":3,"id":8},{"orderId":4,"productId":4,"price":0.89,"quantity":4,"id":44},{"orderId":5,"productId":5,"price":0.01,"quantity":5,"id":90}],"Payments":[{"paymentId":"paymentId 1","orderId":1,"amount":0.74,"paymentMethod":"paymentMethod 1","paymentDate":"2024-02-04T07:52:59.457Z","paymentStatus":"paymentStatus 1","id":99},{"paymentId":"paymentId 2","orderId":2,"amount":0.33,"paymentMethod":"paymentMethod 2","paymentDate":"2024-03-26T09:27:45.335Z","paymentStatus":"paymentStatus 2","id":90},{"paymentId":"paymentId 3","orderId":3,"amount":0.72,"paymentMethod":"paymentMethod 3","paymentDate":"2024-08-01T06:05:13.537Z","paymentStatus":"paymentStatus 3","id":57},{"paymentId":"paymentId 4","orderId":4,"amount":0.44,"paymentMethod":"paymentMethod 4","paymentDate":"2023-07-19T00:06:15.273Z","paymentStatus":"paymentStatus 4","id":99},{"paymentId":"paymentId 5","orderId":5,"amount":0.4,"paymentMethod":"paymentMethod 5","paymentDate":"2023-08-20T22:08:22.949Z","paymentStatus":"paymentStatus 5","id":3}],"Reviews":[{"reviewId":"reviewId 1","productId":1,"customerId":1,"vendorId":1,"rating":1,"reviewDetails":"reviewDetails 1","date":"2024-01-28T05:52:29.588Z","id":20},{"reviewId":"reviewId 2","productId":2,"customerId":2,"vendorId":2,"rating":2,"reviewDetails":"reviewDetails 2","date":"2024-10-22T04:37:29.207Z","id":12},{"reviewId":"reviewId 3","productId":3,"customerId":3,"vendorId":3,"rating":3,"reviewDetails":"reviewDetails 3","date":"2023-06-12T17:42:36.335Z","id":18},{"reviewId":"reviewId 4","productId":4,"customerId":4,"vendorId":4,"rating":4,"reviewDetails":"reviewDetails 4","date":"2023-06-05T10:17:28.993Z","id":89},{"reviewId":"reviewId 5","productId":5,"customerId":5,"vendorId":5,"rating":5,"reviewDetails":"reviewDetails 5","date":"2024-10-07T20:01:46.903Z","id":39}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-08-04T08:59:25.055Z","resolutionDate":"2023-08-10T13:55:35.546Z","id":68},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-10-24T19:01:18.708Z","resolutionDate":"2024-04-11T07:23:05.167Z","id":20},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-12-07T16:28:46.223Z","resolutionDate":"2024-03-06T08:25:58.463Z","id":8},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-08-19T10:47:29.164Z","resolutionDate":"2023-11-21T11:33:43.405Z","id":37},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-08-03T04:09:06.813Z","resolutionDate":"2024-02-22T17:15:31.896Z","id":55}]};
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

