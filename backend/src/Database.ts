//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { WorkoutsEntity } from "./db/Workouts.entity";
import { NutritionEntity } from "./db/Nutrition.entity";
import { HealthMetricsEntity } from "./db/HealthMetrics.entity";
import { NotificationsEntity } from "./db/Notifications.entity";
import { SupportTicketsEntity } from "./db/SupportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, CustomersEntity, WorkoutsEntity, NutritionEntity, HealthMetricsEntity, NotificationsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":37},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":53},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":11},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":42},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":41}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","age":49,"gender":"gender 1","weight":0.74,"height":0.77,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":30},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","age":73,"gender":"gender 2","weight":0.49,"height":0.36,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":61},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","age":62,"gender":"gender 3","weight":0.38,"height":0.22,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":57},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","age":71,"gender":"gender 4","weight":0.98,"height":0.23,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":89},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","age":98,"gender":"gender 5","weight":0.23,"height":0.46,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":29}],"Workouts":[{"workoutId":"workoutId 1","customerId":1,"type":"type 1","duration":0.37,"intensity":"intensity 1","caloriesBurned":0.94,"date":"2024-11-09T13:25:59.729Z","id":86},{"workoutId":"workoutId 2","customerId":2,"type":"type 2","duration":0.55,"intensity":"intensity 2","caloriesBurned":0.36,"date":"2024-01-06T01:33:39.891Z","id":30},{"workoutId":"workoutId 3","customerId":3,"type":"type 3","duration":0.44,"intensity":"intensity 3","caloriesBurned":0.18,"date":"2023-03-27T02:10:24.424Z","id":83},{"workoutId":"workoutId 4","customerId":4,"type":"type 4","duration":0.88,"intensity":"intensity 4","caloriesBurned":0.42,"date":"2024-08-06T11:17:31.775Z","id":38},{"workoutId":"workoutId 5","customerId":5,"type":"type 5","duration":0.02,"intensity":"intensity 5","caloriesBurned":0.19,"date":"2023-11-02T10:30:07.971Z","id":20}],"Nutrition":[{"mealId":"mealId 1","customerId":1,"foodItem":"foodItem 1","quantity":0.57,"calories":0.33,"macronutrients":"macronutrients 1","date":"2023-03-16T07:25:17.595Z","id":24},{"mealId":"mealId 2","customerId":2,"foodItem":"foodItem 2","quantity":0.51,"calories":0.68,"macronutrients":"macronutrients 2","date":"2024-09-03T05:31:43.240Z","id":84},{"mealId":"mealId 3","customerId":3,"foodItem":"foodItem 3","quantity":0.87,"calories":1,"macronutrients":"macronutrients 3","date":"2023-02-17T15:11:46.354Z","id":53},{"mealId":"mealId 4","customerId":4,"foodItem":"foodItem 4","quantity":0.73,"calories":0.1,"macronutrients":"macronutrients 4","date":"2024-11-15T14:31:10.839Z","id":70},{"mealId":"mealId 5","customerId":5,"foodItem":"foodItem 5","quantity":0.63,"calories":0.51,"macronutrients":"macronutrients 5","date":"2023-07-25T05:15:48.952Z","id":33}],"HealthMetrics":[{"metricId":"metricId 1","customerId":1,"type":"type 1","value":0.15,"unit":"unit 1","date":"2024-02-18T13:50:15.281Z","id":95},{"metricId":"metricId 2","customerId":2,"type":"type 2","value":0.04,"unit":"unit 2","date":"2024-02-10T18:33:07.619Z","id":60},{"metricId":"metricId 3","customerId":3,"type":"type 3","value":0.56,"unit":"unit 3","date":"2024-11-11T22:32:42.403Z","id":34},{"metricId":"metricId 4","customerId":4,"type":"type 4","value":0.32,"unit":"unit 4","date":"2024-03-17T22:50:51.547Z","id":72},{"metricId":"metricId 5","customerId":5,"type":"type 5","value":0.92,"unit":"unit 5","date":"2023-06-12T06:13:39.412Z","id":93}],"Notifications":[{"notificationId":"notificationId 1","customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2025-01-08T02:39:25.784Z","status":"status 1","id":63},{"notificationId":"notificationId 2","customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2023-04-28T08:42:20.988Z","status":"status 2","id":16},{"notificationId":"notificationId 3","customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2024-11-10T13:45:06.844Z","status":"status 3","id":79},{"notificationId":"notificationId 4","customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2024-03-24T07:20:13.136Z","status":"status 4","id":41},{"notificationId":"notificationId 5","customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2023-09-10T11:53:13.939Z","status":"status 5","id":58}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-08-16T21:05:41.182Z","resolutionDate":"2024-12-07T18:54:22.624Z","id":67},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-07-20T01:10:25.140Z","resolutionDate":"2024-09-05T17:56:05.596Z","id":4},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-05-04T21:58:20.615Z","resolutionDate":"2023-09-14T03:32:54.869Z","id":74},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-05-02T07:40:25.818Z","resolutionDate":"2023-07-08T08:33:24.866Z","id":62},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-11-14T19:39:21.542Z","resolutionDate":"2024-10-01T05:15:51.902Z","id":90}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("WorkoutsEntity", data.Workouts);
await this.SeedResource("NutritionEntity", data.Nutrition);
await this.SeedResource("HealthMetricsEntity", data.HealthMetrics);
await this.SeedResource("NotificationsEntity", data.Notifications);
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

