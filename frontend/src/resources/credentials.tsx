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
const credentialsTitle = () => {
  const record = useRecordContext();
  return <span>credentials {record ? `"${ record.url }"` : ""}</span>;
};

export const credentialsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <UrlField source="url" />
<TextField source="username" />
<ReadOnlyPasswordField source="password" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const credentialsEdit = () => (
                    <Edit title={<credentialsTitle />}>
                      <SimpleForm>
                          <TextInput source="url"   />
<TextInput source="username"   />
<PasswordInput source="password"   />
                      </SimpleForm>
                    </Edit>
                  );

export const credentialsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="url"   />
<TextInput source="username"   />
<PasswordInput source="password"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


