//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { EmployeesEntity } from "./db/Employees.entity";
import { EvaluationsEntity } from "./db/Evaluations.entity";
import { PayrollEntity } from "./db/Payroll.entity";
import { LeaveRequestsEntity } from "./db/LeaveRequests.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, EmployeesEntity, EvaluationsEntity, PayrollEntity, LeaveRequestsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":64},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":95},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":7},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":31},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":90}],"Employees":[{"employeeId":"employeeId 1","firstName":"firstName 1","lastName":"lastName 1","middleName":"middleName 1","dateOfBirth":"2023-11-09T05:33:04.356Z","gender":"gender 1","nationality":"nationality 1","maritalStatus":"maritalStatus 1","email":"email 1","phoneNumber":"phoneNumber 1","street":"street 1","city":"city 1","state":"state 1","zipCode":"zipCode 1","country":"country 1","departmentTeam":"departmentTeam 1","positionRole":"positionRole 1","managerSupervisor":"managerSupervisor 1","employmentType":"employmentType 1","startDate":"2024-01-12T13:34:32.007Z","endDate":"2024-02-16T15:51:55.052Z","salaryInformation":0.19,"profilePicture":"profilePicture 1","id":52},{"employeeId":"employeeId 2","firstName":"firstName 2","lastName":"lastName 2","middleName":"middleName 2","dateOfBirth":"2023-12-15T22:33:20.077Z","gender":"gender 2","nationality":"nationality 2","maritalStatus":"maritalStatus 2","email":"email 2","phoneNumber":"phoneNumber 2","street":"street 2","city":"city 2","state":"state 2","zipCode":"zipCode 2","country":"country 2","departmentTeam":"departmentTeam 2","positionRole":"positionRole 2","managerSupervisor":"managerSupervisor 2","employmentType":"employmentType 2","startDate":"2023-05-05T18:09:30.749Z","endDate":"2024-02-08T12:37:04.009Z","salaryInformation":0.94,"profilePicture":"profilePicture 2","id":64},{"employeeId":"employeeId 3","firstName":"firstName 3","lastName":"lastName 3","middleName":"middleName 3","dateOfBirth":"2023-04-30T21:11:25.038Z","gender":"gender 3","nationality":"nationality 3","maritalStatus":"maritalStatus 3","email":"email 3","phoneNumber":"phoneNumber 3","street":"street 3","city":"city 3","state":"state 3","zipCode":"zipCode 3","country":"country 3","departmentTeam":"departmentTeam 3","positionRole":"positionRole 3","managerSupervisor":"managerSupervisor 3","employmentType":"employmentType 3","startDate":"2024-11-09T20:27:32.138Z","endDate":"2023-02-09T00:21:52.278Z","salaryInformation":0.39,"profilePicture":"profilePicture 3","id":51},{"employeeId":"employeeId 4","firstName":"firstName 4","lastName":"lastName 4","middleName":"middleName 4","dateOfBirth":"2024-10-01T22:30:11.248Z","gender":"gender 4","nationality":"nationality 4","maritalStatus":"maritalStatus 4","email":"email 4","phoneNumber":"phoneNumber 4","street":"street 4","city":"city 4","state":"state 4","zipCode":"zipCode 4","country":"country 4","departmentTeam":"departmentTeam 4","positionRole":"positionRole 4","managerSupervisor":"managerSupervisor 4","employmentType":"employmentType 4","startDate":"2023-10-02T11:56:18.454Z","endDate":"2023-02-24T07:58:28.443Z","salaryInformation":1,"profilePicture":"profilePicture 4","id":47},{"employeeId":"employeeId 5","firstName":"firstName 5","lastName":"lastName 5","middleName":"middleName 5","dateOfBirth":"2025-01-23T03:43:36.226Z","gender":"gender 5","nationality":"nationality 5","maritalStatus":"maritalStatus 5","email":"email 5","phoneNumber":"phoneNumber 5","street":"street 5","city":"city 5","state":"state 5","zipCode":"zipCode 5","country":"country 5","departmentTeam":"departmentTeam 5","positionRole":"positionRole 5","managerSupervisor":"managerSupervisor 5","employmentType":"employmentType 5","startDate":"2024-07-15T12:13:35.425Z","endDate":"2023-05-15T23:42:29.667Z","salaryInformation":0.27,"profilePicture":"profilePicture 5","id":68}],"Evaluations":[{"reviewId":"reviewId 1","employeeId":1,"periodStartDate":"2023-03-23T08:41:11.525Z","periodEndDate":"2023-07-22T03:17:14.861Z","goalsObjectives":"goalsObjectives 1","achievements":"achievements 1","improvementAreas":"improvementAreas 1","feedbackFromSupervisor":"feedbackFromSupervisor 1","overallRating":0.74,"recommendations":"recommendations 1","id":24},{"reviewId":"reviewId 2","employeeId":2,"periodStartDate":"2024-02-18T11:36:51.280Z","periodEndDate":"2024-02-23T12:37:30.918Z","goalsObjectives":"goalsObjectives 2","achievements":"achievements 2","improvementAreas":"improvementAreas 2","feedbackFromSupervisor":"feedbackFromSupervisor 2","overallRating":0.98,"recommendations":"recommendations 2","id":28},{"reviewId":"reviewId 3","employeeId":3,"periodStartDate":"2024-02-13T15:45:05.155Z","periodEndDate":"2023-11-07T13:53:11.757Z","goalsObjectives":"goalsObjectives 3","achievements":"achievements 3","improvementAreas":"improvementAreas 3","feedbackFromSupervisor":"feedbackFromSupervisor 3","overallRating":0.14,"recommendations":"recommendations 3","id":77},{"reviewId":"reviewId 4","employeeId":4,"periodStartDate":"2024-12-29T08:38:28.610Z","periodEndDate":"2024-03-06T22:30:09.845Z","goalsObjectives":"goalsObjectives 4","achievements":"achievements 4","improvementAreas":"improvementAreas 4","feedbackFromSupervisor":"feedbackFromSupervisor 4","overallRating":0.11,"recommendations":"recommendations 4","id":96},{"reviewId":"reviewId 5","employeeId":5,"periodStartDate":"2023-10-25T01:02:34.004Z","periodEndDate":"2024-09-22T11:47:30.682Z","goalsObjectives":"goalsObjectives 5","achievements":"achievements 5","improvementAreas":"improvementAreas 5","feedbackFromSupervisor":"feedbackFromSupervisor 5","overallRating":0.07,"recommendations":"recommendations 5","id":61}],"Payroll":[{"payrollId":"payrollId 1","employeeId":1,"periodStartDate":"2023-10-23T01:04:25.871Z","periodEndDate":"2023-05-15T05:40:56.956Z","grossSalary":0.7,"deductions":"deductions 1","netSalary":0.29,"payDate":"2024-02-02T04:34:50.190Z","overtimeHours":1,"overtimePay":0.09,"id":12},{"payrollId":"payrollId 2","employeeId":2,"periodStartDate":"2023-02-07T20:38:36.152Z","periodEndDate":"2024-07-04T20:06:04.036Z","grossSalary":0.09,"deductions":"deductions 2","netSalary":0.6,"payDate":"2023-04-29T05:23:39.535Z","overtimeHours":2,"overtimePay":0.53,"id":37},{"payrollId":"payrollId 3","employeeId":3,"periodStartDate":"2023-03-11T04:40:09.778Z","periodEndDate":"2024-07-30T08:40:08.898Z","grossSalary":0.21,"deductions":"deductions 3","netSalary":0.98,"payDate":"2024-07-26T10:12:36.712Z","overtimeHours":3,"overtimePay":0.65,"id":32},{"payrollId":"payrollId 4","employeeId":4,"periodStartDate":"2024-06-01T20:31:24.925Z","periodEndDate":"2023-05-20T22:35:25.890Z","grossSalary":0.21,"deductions":"deductions 4","netSalary":0.7,"payDate":"2023-10-17T08:08:33.011Z","overtimeHours":4,"overtimePay":0.8,"id":54},{"payrollId":"payrollId 5","employeeId":5,"periodStartDate":"2023-07-19T17:54:42.812Z","periodEndDate":"2024-11-25T07:17:47.958Z","grossSalary":0.04,"deductions":"deductions 5","netSalary":0.9,"payDate":"2024-08-20T13:15:02.628Z","overtimeHours":5,"overtimePay":0.26,"id":61}],"LeaveRequests":[{"requestId":"requestId 1","employeeId":1,"typeOfLeave":"typeOfLeave 1","startDate":"2024-04-29T20:53:03.115Z","endDate":"2023-08-12T19:09:54.085Z","reason":"reason 1","approvalStatus":"approvalStatus 1","approverUserId":1,"id":90},{"requestId":"requestId 2","employeeId":2,"typeOfLeave":"typeOfLeave 2","startDate":"2024-06-16T08:58:57.421Z","endDate":"2025-01-01T14:21:39.529Z","reason":"reason 2","approvalStatus":"approvalStatus 2","approverUserId":2,"id":87},{"requestId":"requestId 3","employeeId":3,"typeOfLeave":"typeOfLeave 3","startDate":"2024-02-13T06:32:35.612Z","endDate":"2024-12-01T03:56:24.416Z","reason":"reason 3","approvalStatus":"approvalStatus 3","approverUserId":3,"id":21},{"requestId":"requestId 4","employeeId":4,"typeOfLeave":"typeOfLeave 4","startDate":"2023-07-20T19:25:15.640Z","endDate":"2024-12-22T13:41:28.654Z","reason":"reason 4","approvalStatus":"approvalStatus 4","approverUserId":4,"id":89},{"requestId":"requestId 5","employeeId":5,"typeOfLeave":"typeOfLeave 5","startDate":"2023-05-02T09:41:31.890Z","endDate":"2023-11-27T08:39:11.327Z","reason":"reason 5","approvalStatus":"approvalStatus 5","approverUserId":5,"id":84}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("EmployeesEntity", data.Employees);
await this.SeedResource("EvaluationsEntity", data.Evaluations);
await this.SeedResource("PayrollEntity", data.Payroll);
await this.SeedResource("LeaveRequestsEntity", data.LeaveRequests); 
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

