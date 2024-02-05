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
const AssigneesTitle = () => {
  const record = useRecordContext();
  return <span>Assignees {record ? `"${ record.assigneeName }"` : ""}</span>;
};

export const AssigneesList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="assigneeName" />
<TextField source="role" />
<TextField source="email" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const AssigneesEdit = () => (
                    <Edit title={<AssigneesTitle />}>
                      <SimpleForm>
                          <TextInput source="assigneeName"   />
<TextInput source="role"   />
<TextInput source="email"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const AssigneesCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="assigneeName"   />
<TextInput source="role"   />
<TextInput source="email"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


