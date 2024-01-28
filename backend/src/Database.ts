//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { LoansEntity } from "./db/Loans.entity";
import { RealEstateEntity } from "./db/RealEstate.entity";
import { RiskFactorsEntity } from "./db/RiskFactors.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, LoansEntity, RealEstateEntity, RiskFactorsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Loans":[{"accountNumber":"12345678","loanAmount":5000,"productType":"Home Loan","outstandingBalance":4500},{"accountNumber":"87654321","loanAmount":8000,"productType":"Car Loan","outstandingBalance":2000},{"accountNumber":"23456789","loanAmount":10000,"productType":"Education Loan","outstandingBalance":6500}],"RealEstate":[{"propertyType":"Residential","value":200000,"location":"New York","floodRisk":"Low","earthquakeRisk":"Medium","fireRisk":"Low","geolocation":"40.7128, 74.0060"},{"propertyType":"Commercial","value":500000,"location":"San Francisco","floodRisk":"Medium","earthquakeRisk":"High","fireRisk":"Medium","geolocation":"37.7749, 122.4194"},{"propertyType":"Residential","value":150000,"location":"Chicago","floodRisk":"High","earthquakeRisk":"Low","fireRisk":"Medium","geolocation":"41.8781, 87.6298"}],"RiskFactors":[{"riskFactor":"Flood","riskWeight":0.3},{"riskFactor":"Fire","riskWeight":0.2},{"riskFactor":"Earthquake","riskWeight":0.5}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("LoansEntity", data.Loans);
await this.SeedResource("RealEstateEntity", data.RealEstate);
await this.SeedResource("RiskFactorsEntity", data.RiskFactors); 
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

