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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":8},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":83},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":76},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":0},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":72}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.45,"height":0.95,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":62},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.64,"height":0.81,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":32},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0.5,"height":0.6,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":30},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":0.64,"height":0.99,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":36},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.48,"height":0.62,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":57}],"Workouts":[{"workoutId":"workoutId 1","customerId":1,"type":"type 1","duration":0.47,"intensity":"intensity 1","caloriesBurned":1,"date":"2023-05-01T21:52:02.233Z","id":20},{"workoutId":"workoutId 2","customerId":2,"type":"type 2","duration":0.65,"intensity":"intensity 2","caloriesBurned":2,"date":"2023-03-06T07:42:19.099Z","id":7},{"workoutId":"workoutId 3","customerId":3,"type":"type 3","duration":0.04,"intensity":"intensity 3","caloriesBurned":3,"date":"2024-05-06T12:37:44.224Z","id":44},{"workoutId":"workoutId 4","customerId":4,"type":"type 4","duration":0.02,"intensity":"intensity 4","caloriesBurned":4,"date":"2024-03-30T06:07:25.187Z","id":62},{"workoutId":"workoutId 5","customerId":5,"type":"type 5","duration":0.92,"intensity":"intensity 5","caloriesBurned":5,"date":"2024-02-28T01:05:15.677Z","id":59}],"Nutrition":[{"mealId":"mealId 1","customerId":1,"foodItem":"foodItem 1","quantity":0.62,"calories":1,"macronutrients":"macronutrients 1","date":"2023-07-20T05:59:58.295Z","id":45},{"mealId":"mealId 2","customerId":2,"foodItem":"foodItem 2","quantity":0.25,"calories":2,"macronutrients":"macronutrients 2","date":"2024-02-25T13:56:03.511Z","id":39},{"mealId":"mealId 3","customerId":3,"foodItem":"foodItem 3","quantity":0.49,"calories":3,"macronutrients":"macronutrients 3","date":"2025-02-02T19:37:13.749Z","id":61},{"mealId":"mealId 4","customerId":4,"foodItem":"foodItem 4","quantity":0.36,"calories":4,"macronutrients":"macronutrients 4","date":"2023-11-25T11:28:17.204Z","id":75},{"mealId":"mealId 5","customerId":5,"foodItem":"foodItem 5","quantity":0.88,"calories":5,"macronutrients":"macronutrients 5","date":"2024-03-17T07:56:59.307Z","id":35}],"HealthMetrics":[{"metricId":"metricId 1","customerId":1,"type":"type 1","value":0.39,"unit":"unit 1","date":"2024-06-25T21:34:18.559Z","id":40},{"metricId":"metricId 2","customerId":2,"type":"type 2","value":0.16,"unit":"unit 2","date":"2023-07-18T08:47:26.772Z","id":58},{"metricId":"metricId 3","customerId":3,"type":"type 3","value":0.48,"unit":"unit 3","date":"2024-08-05T14:31:48.656Z","id":31},{"metricId":"metricId 4","customerId":4,"type":"type 4","value":0.43,"unit":"unit 4","date":"2023-06-29T04:07:29.712Z","id":13},{"metricId":"metricId 5","customerId":5,"type":"type 5","value":0.05,"unit":"unit 5","date":"2024-04-28T01:12:05.734Z","id":11}],"Notifications":[{"notificationId":"notificationId 1","customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2024-08-09T20:26:47.222Z","status":"status 1","id":36},{"notificationId":"notificationId 2","customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2023-03-16T14:16:05.560Z","status":"status 2","id":22},{"notificationId":"notificationId 3","customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2023-09-24T09:50:52.498Z","status":"status 3","id":62},{"notificationId":"notificationId 4","customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2024-06-08T14:45:02.708Z","status":"status 4","id":69},{"notificationId":"notificationId 5","customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2025-01-05T00:54:31.865Z","status":"status 5","id":42}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-10-10T05:23:57.925Z","resolutionDate":"2023-12-13T05:47:27.900Z","id":53},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-10-02T12:46:55.639Z","resolutionDate":"2024-01-14T16:52:18.696Z","id":50},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2025-01-12T16:56:44.215Z","resolutionDate":"2023-07-15T16:53:53.876Z","id":34},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-12-26T12:52:37.598Z","resolutionDate":"2023-07-06T02:30:02.286Z","id":98},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-03-03T18:59:21.283Z","resolutionDate":"2023-02-18T12:30:44.389Z","id":92}]};
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

