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
const UsersTitle = () => {
  const record = useRecordContext();
  return <span>Users {record ? `"${ record.userId }"` : ""}</span>;
};

export const UsersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="userId" />
<TextField source="name" />
<TextField source="email" />
<TextField source="password" />
<TextField source="role" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const UsersEdit = () => (
                    <Edit title={<UsersTitle />}>
                      <SimpleForm>
                          <TextInput source="userId"   />
<TextInput source="name"   />
<TextInput source="email"   />
<TextInput source="password"   />
<TextInput source="role"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const UsersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="userId"   />
<TextInput source="name"   />
<TextInput source="email"   />
<TextInput source="password"   />
<TextInput source="role"   />
<NumberInput source="id"   disabled/>
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


