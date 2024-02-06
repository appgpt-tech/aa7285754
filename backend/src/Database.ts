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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":97},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":26},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":16},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":70},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":47}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","age":74,"gender":"gender 1","weight":0.22,"height":0.93,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":66},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","age":0,"gender":"gender 2","weight":0.89,"height":0.6,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":87},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","age":8,"gender":"gender 3","weight":0.53,"height":0.12,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":84},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","age":10,"gender":"gender 4","weight":0.64,"height":0.94,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":17},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","age":62,"gender":"gender 5","weight":0.2,"height":0.43,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":39}],"Workouts":[{"workoutId":"workoutId 1","customerId":1,"type":"type 1","duration":0.23,"intensity":"intensity 1","caloriesBurned":71,"date":"2024-01-10T05:11:22.459Z","id":55},{"workoutId":"workoutId 2","customerId":2,"type":"type 2","duration":0.06,"intensity":"intensity 2","caloriesBurned":81,"date":"2024-07-22T15:03:31.155Z","id":5},{"workoutId":"workoutId 3","customerId":3,"type":"type 3","duration":0.15,"intensity":"intensity 3","caloriesBurned":63,"date":"2024-04-23T11:01:00.281Z","id":100},{"workoutId":"workoutId 4","customerId":4,"type":"type 4","duration":0.29,"intensity":"intensity 4","caloriesBurned":64,"date":"2024-04-19T02:39:27.488Z","id":47},{"workoutId":"workoutId 5","customerId":5,"type":"type 5","duration":0.76,"intensity":"intensity 5","caloriesBurned":83,"date":"2024-09-09T13:40:48.116Z","id":28}],"Nutrition":[{"mealId":"mealId 1","customerId":1,"foodItem":"foodItem 1","quantity":0.92,"calories":6,"macronutrients":"macronutrients 1","date":"2024-08-14T07:09:00.335Z","id":56},{"mealId":"mealId 2","customerId":2,"foodItem":"foodItem 2","quantity":0.93,"calories":42,"macronutrients":"macronutrients 2","date":"2024-09-24T05:34:18.340Z","id":68},{"mealId":"mealId 3","customerId":3,"foodItem":"foodItem 3","quantity":0.16,"calories":48,"macronutrients":"macronutrients 3","date":"2024-06-26T07:07:29.703Z","id":82},{"mealId":"mealId 4","customerId":4,"foodItem":"foodItem 4","quantity":0.89,"calories":66,"macronutrients":"macronutrients 4","date":"2025-01-18T01:29:15.435Z","id":32},{"mealId":"mealId 5","customerId":5,"foodItem":"foodItem 5","quantity":0.96,"calories":56,"macronutrients":"macronutrients 5","date":"2023-11-04T12:23:48.283Z","id":0}],"HealthMetrics":[{"metricId":"metricId 1","customerId":1,"type":"type 1","value":0.01,"unit":"unit 1","date":"2024-12-07T00:05:44.358Z","id":38},{"metricId":"metricId 2","customerId":2,"type":"type 2","value":0.68,"unit":"unit 2","date":"2024-09-22T10:21:30.236Z","id":27},{"metricId":"metricId 3","customerId":3,"type":"type 3","value":0.61,"unit":"unit 3","date":"2025-01-11T09:10:35.676Z","id":22},{"metricId":"metricId 4","customerId":4,"type":"type 4","value":0.5,"unit":"unit 4","date":"2023-12-01T18:17:53.594Z","id":1},{"metricId":"metricId 5","customerId":5,"type":"type 5","value":0.18,"unit":"unit 5","date":"2023-03-17T04:32:53.952Z","id":88}],"Notifications":[{"notificationId":"notificationId 1","customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2023-07-20T10:12:49.485Z","status":"status 1","id":24},{"notificationId":"notificationId 2","customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2023-11-13T17:39:48.904Z","status":"status 2","id":37},{"notificationId":"notificationId 3","customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2024-02-18T18:04:58.344Z","status":"status 3","id":52},{"notificationId":"notificationId 4","customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2024-06-08T04:07:08.246Z","status":"status 4","id":22},{"notificationId":"notificationId 5","customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2024-10-27T18:33:06.841Z","status":"status 5","id":61}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-01-05T14:40:43.620Z","resolutionDate":"2023-03-14T16:04:15.916Z","id":99},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-03-06T03:21:24.679Z","resolutionDate":"2023-06-26T20:38:49.952Z","id":53},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-09-20T10:09:13.112Z","resolutionDate":"2024-07-01T16:14:35.058Z","id":30},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-10-08T10:52:24.235Z","resolutionDate":"2024-11-26T05:09:17.038Z","id":54},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-11-22T21:16:36.219Z","resolutionDate":"2024-01-20T12:53:09.380Z","id":74}]};
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

