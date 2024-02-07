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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":19},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":45},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":43},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":65},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":95}],"Employees":[{"employeeId":"employeeId 1","firstName":"firstName 1","lastName":"lastName 1","middleName":"middleName 1","dateOfBirth":"2024-12-30T01:14:14.480Z","gender":"gender 1","nationality":"nationality 1","maritalStatus":"maritalStatus 1","email":"email 1","phoneNumber":"phoneNumber 1","street":"street 1","city":"city 1","state":"state 1","zipCode":"zipCode 1","country":"country 1","departmentTeam":"departmentTeam 1","positionRole":"positionRole 1","managerSupervisor":"managerSupervisor 1","employmentType":"employmentType 1","startDate":"2024-04-21T00:32:47.125Z","endDate":"2024-07-25T15:37:59.666Z","salaryInformation":0.8,"profilePicture":"profilePicture 1","id":20},{"employeeId":"employeeId 2","firstName":"firstName 2","lastName":"lastName 2","middleName":"middleName 2","dateOfBirth":"2023-05-31T05:52:57.139Z","gender":"gender 2","nationality":"nationality 2","maritalStatus":"maritalStatus 2","email":"email 2","phoneNumber":"phoneNumber 2","street":"street 2","city":"city 2","state":"state 2","zipCode":"zipCode 2","country":"country 2","departmentTeam":"departmentTeam 2","positionRole":"positionRole 2","managerSupervisor":"managerSupervisor 2","employmentType":"employmentType 2","startDate":"2024-07-22T03:10:33.936Z","endDate":"2024-10-14T23:28:26.218Z","salaryInformation":0.11,"profilePicture":"profilePicture 2","id":39},{"employeeId":"employeeId 3","firstName":"firstName 3","lastName":"lastName 3","middleName":"middleName 3","dateOfBirth":"2024-11-02T02:42:13.521Z","gender":"gender 3","nationality":"nationality 3","maritalStatus":"maritalStatus 3","email":"email 3","phoneNumber":"phoneNumber 3","street":"street 3","city":"city 3","state":"state 3","zipCode":"zipCode 3","country":"country 3","departmentTeam":"departmentTeam 3","positionRole":"positionRole 3","managerSupervisor":"managerSupervisor 3","employmentType":"employmentType 3","startDate":"2024-06-26T00:17:51.354Z","endDate":"2023-11-24T13:47:08.785Z","salaryInformation":0.98,"profilePicture":"profilePicture 3","id":54},{"employeeId":"employeeId 4","firstName":"firstName 4","lastName":"lastName 4","middleName":"middleName 4","dateOfBirth":"2024-10-19T03:04:04.442Z","gender":"gender 4","nationality":"nationality 4","maritalStatus":"maritalStatus 4","email":"email 4","phoneNumber":"phoneNumber 4","street":"street 4","city":"city 4","state":"state 4","zipCode":"zipCode 4","country":"country 4","departmentTeam":"departmentTeam 4","positionRole":"positionRole 4","managerSupervisor":"managerSupervisor 4","employmentType":"employmentType 4","startDate":"2024-10-07T03:50:18.003Z","endDate":"2023-10-24T20:33:12.372Z","salaryInformation":0.38,"profilePicture":"profilePicture 4","id":8},{"employeeId":"employeeId 5","firstName":"firstName 5","lastName":"lastName 5","middleName":"middleName 5","dateOfBirth":"2024-06-15T21:33:16.471Z","gender":"gender 5","nationality":"nationality 5","maritalStatus":"maritalStatus 5","email":"email 5","phoneNumber":"phoneNumber 5","street":"street 5","city":"city 5","state":"state 5","zipCode":"zipCode 5","country":"country 5","departmentTeam":"departmentTeam 5","positionRole":"positionRole 5","managerSupervisor":"managerSupervisor 5","employmentType":"employmentType 5","startDate":"2024-12-14T14:48:16.010Z","endDate":"2024-12-31T20:02:57.438Z","salaryInformation":0.07,"profilePicture":"profilePicture 5","id":23}],"Evaluations":[{"reviewId":"reviewId 1","employeeId":1,"periodStartDate":"2024-03-02T07:46:00.935Z","periodEndDate":"2023-11-19T09:05:21.016Z","goalsObjectives":"goalsObjectives 1","achievements":"achievements 1","improvementAreas":"improvementAreas 1","feedbackFromSupervisor":"feedbackFromSupervisor 1","overallRating":0.56,"recommendations":"recommendations 1","id":32},{"reviewId":"reviewId 2","employeeId":2,"periodStartDate":"2023-06-24T21:43:48.844Z","periodEndDate":"2023-11-09T01:02:49.770Z","goalsObjectives":"goalsObjectives 2","achievements":"achievements 2","improvementAreas":"improvementAreas 2","feedbackFromSupervisor":"feedbackFromSupervisor 2","overallRating":0,"recommendations":"recommendations 2","id":74},{"reviewId":"reviewId 3","employeeId":3,"periodStartDate":"2024-04-26T23:03:48.153Z","periodEndDate":"2024-02-20T18:00:36.518Z","goalsObjectives":"goalsObjectives 3","achievements":"achievements 3","improvementAreas":"improvementAreas 3","feedbackFromSupervisor":"feedbackFromSupervisor 3","overallRating":0.91,"recommendations":"recommendations 3","id":13},{"reviewId":"reviewId 4","employeeId":4,"periodStartDate":"2023-05-18T05:38:44.771Z","periodEndDate":"2024-02-27T06:17:04.715Z","goalsObjectives":"goalsObjectives 4","achievements":"achievements 4","improvementAreas":"improvementAreas 4","feedbackFromSupervisor":"feedbackFromSupervisor 4","overallRating":0.54,"recommendations":"recommendations 4","id":16},{"reviewId":"reviewId 5","employeeId":5,"periodStartDate":"2024-04-04T01:55:06.315Z","periodEndDate":"2024-02-22T15:02:01.484Z","goalsObjectives":"goalsObjectives 5","achievements":"achievements 5","improvementAreas":"improvementAreas 5","feedbackFromSupervisor":"feedbackFromSupervisor 5","overallRating":0.11,"recommendations":"recommendations 5","id":28}],"Payroll":[{"payrollId":"payrollId 1","employeeId":1,"periodStartDate":"2023-03-02T17:16:29.773Z","periodEndDate":"2023-02-18T10:50:39.296Z","grossSalary":0.62,"deductions":"deductions 1","netSalary":0.25,"payDate":"2024-10-11T02:40:19.603Z","overtimeHours":1,"overtimePay":0.05,"id":53},{"payrollId":"payrollId 2","employeeId":2,"periodStartDate":"2024-04-06T11:26:57.515Z","periodEndDate":"2023-05-14T14:33:37.833Z","grossSalary":0.55,"deductions":"deductions 2","netSalary":0.54,"payDate":"2023-03-17T16:17:55.474Z","overtimeHours":2,"overtimePay":0.32,"id":37},{"payrollId":"payrollId 3","employeeId":3,"periodStartDate":"2023-02-08T02:53:20.300Z","periodEndDate":"2023-12-28T09:10:19.919Z","grossSalary":0.55,"deductions":"deductions 3","netSalary":0.05,"payDate":"2024-06-06T04:03:04.210Z","overtimeHours":3,"overtimePay":0.93,"id":21},{"payrollId":"payrollId 4","employeeId":4,"periodStartDate":"2023-05-30T19:10:26.432Z","periodEndDate":"2024-07-02T21:28:18.477Z","grossSalary":0.34,"deductions":"deductions 4","netSalary":0.46,"payDate":"2023-11-11T08:47:05.212Z","overtimeHours":4,"overtimePay":0.61,"id":55},{"payrollId":"payrollId 5","employeeId":5,"periodStartDate":"2023-09-26T03:16:03.957Z","periodEndDate":"2024-09-15T14:58:04.162Z","grossSalary":0.56,"deductions":"deductions 5","netSalary":0.79,"payDate":"2023-08-31T20:50:59.121Z","overtimeHours":5,"overtimePay":0.02,"id":69}],"LeaveRequests":[{"requestId":"requestId 1","employeeId":1,"typeOfLeave":"typeOfLeave 1","startDate":"2024-04-09T12:14:21.085Z","endDate":"2024-04-30T05:25:11.106Z","reason":"reason 1","approvalStatus":"approvalStatus 1","approverUserId":1,"id":36},{"requestId":"requestId 2","employeeId":2,"typeOfLeave":"typeOfLeave 2","startDate":"2024-03-07T17:50:47.551Z","endDate":"2023-07-14T18:11:04.534Z","reason":"reason 2","approvalStatus":"approvalStatus 2","approverUserId":2,"id":85},{"requestId":"requestId 3","employeeId":3,"typeOfLeave":"typeOfLeave 3","startDate":"2024-09-23T09:43:04.068Z","endDate":"2023-06-30T04:29:26.566Z","reason":"reason 3","approvalStatus":"approvalStatus 3","approverUserId":3,"id":80},{"requestId":"requestId 4","employeeId":4,"typeOfLeave":"typeOfLeave 4","startDate":"2023-08-10T15:02:37.323Z","endDate":"2024-09-21T23:41:45.799Z","reason":"reason 4","approvalStatus":"approvalStatus 4","approverUserId":4,"id":56},{"requestId":"requestId 5","employeeId":5,"typeOfLeave":"typeOfLeave 5","startDate":"2024-07-06T00:15:29.079Z","endDate":"2024-11-30T17:37:02.658Z","reason":"reason 5","approvalStatus":"approvalStatus 5","approverUserId":5,"id":45}]};
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

