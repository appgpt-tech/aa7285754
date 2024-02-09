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
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput
} from "react-admin";
import { useRecordContext } from "react-admin";
const ReadOnlyPasswordField = ({ record, source }) => {

  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword =  '********';

  return (
      <span>{maskedPassword}</span>
  );
};
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const tasksTitle = () => {
  const record = useRecordContext();
  return <span>tasks {record ? `"${ record.taskTitle }"` : ""}</span>;
};

export const tasksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="taskTitle" />

<DateField source="scheduledStartDate" />
<DateField source="scheduledEndDate" />
<DateField source="actualEndDate" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const tasksEdit = () => (
                    <Edit title={<tasksTitle />}>
                      <SimpleForm>
                          <TextInput source="taskTitle"   />
<TextInput source="description"   />
<DateInput source="scheduledStartDate"   />
<DateInput source="scheduledEndDate"   />
<DateInput source="actualEndDate"   />
                      </SimpleForm>
                    </Edit>
                  );

export const tasksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="taskTitle"   />
<TextInput source="description"   />
<DateInput source="scheduledStartDate"   />
<DateInput source="scheduledEndDate"   />
<DateInput source="actualEndDate"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,
,

    ];


