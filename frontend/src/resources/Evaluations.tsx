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
const EvaluationsTitle = () => {
  const record = useRecordContext();
  return <span>Evaluations {record ? `"${ record.reviewId }"` : ""}</span>;
};

export const EvaluationsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="reviewId" />
<ReferenceField source="employeeId" reference="Employees"  />
<DateField source="periodStartDate" />
<DateField source="periodEndDate" />
<TextField source="goalsObjectives" />
<TextField source="achievements" />
<TextField source="improvementAreas" />
<TextField source="feedbackFromSupervisor" />
<NumberField source="overallRating" />
<TextField source="recommendations" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const EvaluationsEdit = () => (
                    <Edit title={<EvaluationsTitle />}>
                      <SimpleForm>
                          <TextInput source="reviewId"   />
<ReferenceInput source="employeeId"  reference="Employees"   />
<DateInput source="periodStartDate"   />
<DateInput source="periodEndDate"   />
<TextInput source="goalsObjectives"   />
<TextInput source="achievements"   />
<TextInput source="improvementAreas"   />
<TextInput source="feedbackFromSupervisor"   />
<NumberInput source="overallRating"   />
<TextInput source="recommendations"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const EvaluationsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="reviewId"   />
<ReferenceInput source="employeeId"  reference="Employees"   />
<DateInput source="periodStartDate"   />
<DateInput source="periodEndDate"   />
<TextInput source="goalsObjectives"   />
<TextInput source="achievements"   />
<TextInput source="improvementAreas"   />
<TextInput source="feedbackFromSupervisor"   />
<NumberInput source="overallRating"   />
<TextInput source="recommendations"   />
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


