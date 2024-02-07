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
const WorkoutsTitle = () => {
  const record = useRecordContext();
  return <span>Workouts {record ? `"${ record.workoutId }"` : ""}</span>;
};

export const WorkoutsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="workoutId" />
<ReferenceField source="customerId" reference="Customers"  />
<TextField source="type" />
<NumberField source="duration" />
<TextField source="intensity" />
<NumberField source="caloriesBurned" />
<DateField source="date" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const WorkoutsEdit = () => (
                    <Edit title={<WorkoutsTitle />}>
                      <SimpleForm>
                          <TextInput source="workoutId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="type"   />
<NumberInput source="duration"   />
<TextInput source="intensity"   />
<NumberInput source="caloriesBurned"   />
<DateInput source="date"   />
                      </SimpleForm>
                    </Edit>
                  );

export const WorkoutsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="workoutId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="type"   />
<NumberInput source="duration"   />
<TextInput source="intensity"   />
<NumberInput source="caloriesBurned"   />
<DateInput source="date"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="customerId" label="customerId" reference="Customers"   alwaysOn/>,
,
,
,
,
,

    ];


