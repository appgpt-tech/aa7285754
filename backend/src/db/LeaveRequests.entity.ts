//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("LeaveRequests")
export class LeaveRequestsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
requestId: string;

@Column({nullable: true})
employeeId: number;

@Column({nullable: true})
typeOfLeave: string;

@Column({nullable: true})
startDate: Date;

@Column({nullable: true})
endDate: Date;

@Column({nullable: true})
reason: string;

@Column({nullable: true})
approvalStatus: string;

@Column({nullable: true})
approverUserId: number;


}
