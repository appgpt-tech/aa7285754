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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":65},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":95},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":4},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":46},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":61}],"Employees":[{"employeeId":"employeeId 1","firstName":"firstName 1","lastName":"lastName 1","middleName":"middleName 1","dateOfBirth":"2023-10-05T11:36:00.621Z","gender":"gender 1","nationality":"nationality 1","maritalStatus":"maritalStatus 1","email":"email 1","phoneNumber":"phoneNumber 1","street":"street 1","city":"city 1","state":"state 1","zipCode":"zipCode 1","country":"country 1","departmentTeam":"departmentTeam 1","positionRole":"positionRole 1","managerSupervisor":"managerSupervisor 1","employmentType":"employmentType 1","startDate":"2024-11-10T22:24:16.646Z","endDate":"2024-07-17T16:34:11.276Z","salaryInformation":0.5,"profilePicture":"profilePicture 1","id":70},{"employeeId":"employeeId 2","firstName":"firstName 2","lastName":"lastName 2","middleName":"middleName 2","dateOfBirth":"2023-05-19T21:01:37.570Z","gender":"gender 2","nationality":"nationality 2","maritalStatus":"maritalStatus 2","email":"email 2","phoneNumber":"phoneNumber 2","street":"street 2","city":"city 2","state":"state 2","zipCode":"zipCode 2","country":"country 2","departmentTeam":"departmentTeam 2","positionRole":"positionRole 2","managerSupervisor":"managerSupervisor 2","employmentType":"employmentType 2","startDate":"2024-02-27T23:37:46.871Z","endDate":"2024-07-26T22:42:40.602Z","salaryInformation":0.21,"profilePicture":"profilePicture 2","id":88},{"employeeId":"employeeId 3","firstName":"firstName 3","lastName":"lastName 3","middleName":"middleName 3","dateOfBirth":"2024-05-17T05:41:46.079Z","gender":"gender 3","nationality":"nationality 3","maritalStatus":"maritalStatus 3","email":"email 3","phoneNumber":"phoneNumber 3","street":"street 3","city":"city 3","state":"state 3","zipCode":"zipCode 3","country":"country 3","departmentTeam":"departmentTeam 3","positionRole":"positionRole 3","managerSupervisor":"managerSupervisor 3","employmentType":"employmentType 3","startDate":"2025-01-05T11:54:40.353Z","endDate":"2023-09-02T22:21:11.658Z","salaryInformation":0.74,"profilePicture":"profilePicture 3","id":72},{"employeeId":"employeeId 4","firstName":"firstName 4","lastName":"lastName 4","middleName":"middleName 4","dateOfBirth":"2023-03-07T09:55:25.134Z","gender":"gender 4","nationality":"nationality 4","maritalStatus":"maritalStatus 4","email":"email 4","phoneNumber":"phoneNumber 4","street":"street 4","city":"city 4","state":"state 4","zipCode":"zipCode 4","country":"country 4","departmentTeam":"departmentTeam 4","positionRole":"positionRole 4","managerSupervisor":"managerSupervisor 4","employmentType":"employmentType 4","startDate":"2023-05-12T01:35:20.451Z","endDate":"2024-10-19T15:56:16.330Z","salaryInformation":0.09,"profilePicture":"profilePicture 4","id":20},{"employeeId":"employeeId 5","firstName":"firstName 5","lastName":"lastName 5","middleName":"middleName 5","dateOfBirth":"2023-10-01T07:04:19.629Z","gender":"gender 5","nationality":"nationality 5","maritalStatus":"maritalStatus 5","email":"email 5","phoneNumber":"phoneNumber 5","street":"street 5","city":"city 5","state":"state 5","zipCode":"zipCode 5","country":"country 5","departmentTeam":"departmentTeam 5","positionRole":"positionRole 5","managerSupervisor":"managerSupervisor 5","employmentType":"employmentType 5","startDate":"2023-04-27T14:59:57.121Z","endDate":"2023-10-04T05:18:38.861Z","salaryInformation":0.74,"profilePicture":"profilePicture 5","id":21}],"Evaluations":[{"reviewId":"reviewId 1","employeeId":1,"periodStartDate":"2023-03-01T21:56:45.090Z","periodEndDate":"2025-01-08T02:50:58.614Z","goalsObjectives":"goalsObjectives 1","achievements":"achievements 1","improvementAreas":"improvementAreas 1","feedbackFromSupervisor":"feedbackFromSupervisor 1","overallRating":0.91,"recommendations":"recommendations 1","id":29},{"reviewId":"reviewId 2","employeeId":2,"periodStartDate":"2023-10-10T18:04:58.523Z","periodEndDate":"2023-03-13T22:15:32.110Z","goalsObjectives":"goalsObjectives 2","achievements":"achievements 2","improvementAreas":"improvementAreas 2","feedbackFromSupervisor":"feedbackFromSupervisor 2","overallRating":0.12,"recommendations":"recommendations 2","id":92},{"reviewId":"reviewId 3","employeeId":3,"periodStartDate":"2024-12-10T15:44:27.351Z","periodEndDate":"2024-06-15T10:48:06.715Z","goalsObjectives":"goalsObjectives 3","achievements":"achievements 3","improvementAreas":"improvementAreas 3","feedbackFromSupervisor":"feedbackFromSupervisor 3","overallRating":0.78,"recommendations":"recommendations 3","id":43},{"reviewId":"reviewId 4","employeeId":4,"periodStartDate":"2024-05-06T10:17:55.716Z","periodEndDate":"2023-03-04T03:08:06.443Z","goalsObjectives":"goalsObjectives 4","achievements":"achievements 4","improvementAreas":"improvementAreas 4","feedbackFromSupervisor":"feedbackFromSupervisor 4","overallRating":0.89,"recommendations":"recommendations 4","id":85},{"reviewId":"reviewId 5","employeeId":5,"periodStartDate":"2023-04-11T11:38:51.782Z","periodEndDate":"2024-03-05T23:26:11.035Z","goalsObjectives":"goalsObjectives 5","achievements":"achievements 5","improvementAreas":"improvementAreas 5","feedbackFromSupervisor":"feedbackFromSupervisor 5","overallRating":0.99,"recommendations":"recommendations 5","id":6}],"Payroll":[{"payrollId":"payrollId 1","employeeId":1,"periodStartDate":"2024-12-22T03:42:21.504Z","periodEndDate":"2024-06-12T15:20:06.004Z","grossSalary":0.26,"deductions":"deductions 1","netSalary":0.14,"payDate":"2024-04-28T15:10:16.162Z","overtimeHours":85,"overtimePay":0,"id":36},{"payrollId":"payrollId 2","employeeId":2,"periodStartDate":"2024-11-12T18:16:54.574Z","periodEndDate":"2024-08-31T18:06:03.695Z","grossSalary":0.94,"deductions":"deductions 2","netSalary":0.8,"payDate":"2023-02-08T12:41:11.346Z","overtimeHours":97,"overtimePay":0.91,"id":20},{"payrollId":"payrollId 3","employeeId":3,"periodStartDate":"2024-08-26T22:41:02.328Z","periodEndDate":"2024-03-13T18:30:39.022Z","grossSalary":0.44,"deductions":"deductions 3","netSalary":0.06,"payDate":"2024-04-01T18:44:52.813Z","overtimeHours":30,"overtimePay":0.83,"id":79},{"payrollId":"payrollId 4","employeeId":4,"periodStartDate":"2023-05-23T21:28:27.889Z","periodEndDate":"2024-07-29T10:04:33.941Z","grossSalary":0.2,"deductions":"deductions 4","netSalary":0.56,"payDate":"2024-07-10T13:20:02.178Z","overtimeHours":10,"overtimePay":0.31,"id":9},{"payrollId":"payrollId 5","employeeId":5,"periodStartDate":"2023-09-01T08:59:17.722Z","periodEndDate":"2024-10-31T05:53:59.102Z","grossSalary":0.12,"deductions":"deductions 5","netSalary":0.84,"payDate":"2024-06-17T19:58:25.406Z","overtimeHours":58,"overtimePay":0.85,"id":72}],"LeaveRequests":[{"requestId":"requestId 1","employeeId":1,"typeOfLeave":"typeOfLeave 1","startDate":"2023-10-16T17:25:40.405Z","endDate":"2023-03-28T14:59:54.821Z","reason":"reason 1","approvalStatus":"approvalStatus 1","approverUserId":1,"id":34},{"requestId":"requestId 2","employeeId":2,"typeOfLeave":"typeOfLeave 2","startDate":"2024-08-30T04:18:09.099Z","endDate":"2024-10-07T20:08:23.463Z","reason":"reason 2","approvalStatus":"approvalStatus 2","approverUserId":2,"id":82},{"requestId":"requestId 3","employeeId":3,"typeOfLeave":"typeOfLeave 3","startDate":"2024-10-25T15:45:29.114Z","endDate":"2024-12-25T23:06:02.894Z","reason":"reason 3","approvalStatus":"approvalStatus 3","approverUserId":3,"id":10},{"requestId":"requestId 4","employeeId":4,"typeOfLeave":"typeOfLeave 4","startDate":"2023-12-16T23:14:21.606Z","endDate":"2024-10-15T13:03:02.609Z","reason":"reason 4","approvalStatus":"approvalStatus 4","approverUserId":4,"id":22},{"requestId":"requestId 5","employeeId":5,"typeOfLeave":"typeOfLeave 5","startDate":"2023-12-01T08:14:32.233Z","endDate":"2024-02-01T21:09:34.283Z","reason":"reason 5","approvalStatus":"approvalStatus 5","approverUserId":5,"id":3}]};
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

