import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const PayrollTitle = () => {
  const record = useRecordContext();
  return <span>Payroll {record ? `"${ record.payrollId }"` : ""}</span>;
};

export const PayrollList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="payrollId" />
<ReferenceField source="employeeId" reference="Employees"  />
<DateField source="periodStartDate" />
<DateField source="periodEndDate" />
<NumberField source="grossSalary" />
<TextField source="deductions" />
<NumberField source="netSalary" />
<DateField source="payDate" />
<NumberField source="overtimeHours" />
<NumberField source="overtimePay" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const PayrollEdit = () => (
                    <Edit title={<PayrollTitle />}>
                      <SimpleForm>
                          <TextInput source="payrollId"   />
<ReferenceInput source="employeeId"  reference="Employees"   />
<DateInput source="periodStartDate"   />
<DateInput source="periodEndDate"   />
<NumberInput source="grossSalary"   />
<TextInput source="deductions"   />
<NumberInput source="netSalary"   />
<DateInput source="payDate"   />
<NumberInput source="overtimeHours"   />
<NumberInput source="overtimePay"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const PayrollCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="payrollId"   />
<ReferenceInput source="employeeId"  reference="Employees"   />
<DateInput source="periodStartDate"   />
<DateInput source="periodEndDate"   />
<NumberInput source="grossSalary"   />
<TextInput source="deductions"   />
<NumberInput source="netSalary"   />
<DateInput source="payDate"   />
<NumberInput source="overtimeHours"   />
<NumberInput source="overtimePay"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="employeeId" label="employeeId" reference="Employees"   alwaysOn/>,
,
,
,
,
,
,
,
,

    ];


