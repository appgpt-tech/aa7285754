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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":59},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":94},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":82},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":98},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":36}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.78,"height":0.49,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":92},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.73,"height":0.75,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":18},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0,"height":1,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":88},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":0.35,"height":0.24,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":87},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.57,"height":0.78,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":52}],"Workouts":[{"workoutId":"workoutId 1","customerId":1,"type":"type 1","duration":1,"intensity":"intensity 1","caloriesBurned":1,"date":"2024-11-05T09:32:28.926Z","id":53},{"workoutId":"workoutId 2","customerId":2,"type":"type 2","duration":2,"intensity":"intensity 2","caloriesBurned":2,"date":"2024-08-27T05:31:45.976Z","id":9},{"workoutId":"workoutId 3","customerId":3,"type":"type 3","duration":3,"intensity":"intensity 3","caloriesBurned":3,"date":"2023-11-07T03:12:02.418Z","id":51},{"workoutId":"workoutId 4","customerId":4,"type":"type 4","duration":4,"intensity":"intensity 4","caloriesBurned":4,"date":"2025-01-01T22:20:54.160Z","id":70},{"workoutId":"workoutId 5","customerId":5,"type":"type 5","duration":5,"intensity":"intensity 5","caloriesBurned":5,"date":"2024-05-31T06:28:44.082Z","id":69}],"Nutrition":[{"mealId":"mealId 1","customerId":1,"foodItem":"foodItem 1","quantity":0.74,"calories":1,"macronutrients":"macronutrients 1","date":"2024-01-12T06:42:38.623Z","id":68},{"mealId":"mealId 2","customerId":2,"foodItem":"foodItem 2","quantity":0.12,"calories":2,"macronutrients":"macronutrients 2","date":"2023-03-21T04:28:30.745Z","id":48},{"mealId":"mealId 3","customerId":3,"foodItem":"foodItem 3","quantity":0.37,"calories":3,"macronutrients":"macronutrients 3","date":"2023-04-15T22:15:25.713Z","id":79},{"mealId":"mealId 4","customerId":4,"foodItem":"foodItem 4","quantity":0.69,"calories":4,"macronutrients":"macronutrients 4","date":"2025-01-05T08:36:15.240Z","id":24},{"mealId":"mealId 5","customerId":5,"foodItem":"foodItem 5","quantity":0.1,"calories":5,"macronutrients":"macronutrients 5","date":"2024-04-28T04:41:57.884Z","id":21}],"HealthMetrics":[{"metricId":"metricId 1","customerId":1,"type":"type 1","value":0.13,"unit":"unit 1","date":"2024-02-20T13:07:49.601Z","id":73},{"metricId":"metricId 2","customerId":2,"type":"type 2","value":0.11,"unit":"unit 2","date":"2024-03-28T20:06:16.440Z","id":23},{"metricId":"metricId 3","customerId":3,"type":"type 3","value":0.77,"unit":"unit 3","date":"2023-11-25T22:21:38.525Z","id":14},{"metricId":"metricId 4","customerId":4,"type":"type 4","value":0.71,"unit":"unit 4","date":"2023-11-09T01:21:27.727Z","id":31},{"metricId":"metricId 5","customerId":5,"type":"type 5","value":0.64,"unit":"unit 5","date":"2024-07-03T03:13:24.807Z","id":39}],"Notifications":[{"notificationId":"notificationId 1","customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2023-03-09T04:56:10.605Z","status":"status 1","id":81},{"notificationId":"notificationId 2","customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2023-07-29T21:00:10.011Z","status":"status 2","id":30},{"notificationId":"notificationId 3","customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2023-08-01T06:54:58.686Z","status":"status 3","id":72},{"notificationId":"notificationId 4","customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2023-10-31T10:17:21.999Z","status":"status 4","id":17},{"notificationId":"notificationId 5","customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2024-06-21T14:10:36.741Z","status":"status 5","id":25}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-11-06T00:12:58.996Z","resolutionDate":"2024-08-04T02:15:22.738Z","id":82},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-05-28T19:16:42.408Z","resolutionDate":"2023-09-27T06:44:28.709Z","id":53},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-03-15T04:26:34.648Z","resolutionDate":"2024-11-18T08:16:52.601Z","id":0},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-08-27T12:41:59.992Z","resolutionDate":"2024-03-24T22:20:32.968Z","id":79},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-05-14T15:36:06.759Z","resolutionDate":"2023-02-27T23:20:23.399Z","id":28}]};
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

