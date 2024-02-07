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
const credentialsTitle = () => {
  const record = useRecordContext();
  return <span>credentials {record ? `"${ record.url }"` : ""}</span>;
};

export const credentialsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="url" reference="websites"  />
<TextField source="username" />
<TextField source="password" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const credentialsEdit = () => (
                    <Edit title={<credentialsTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="url"  reference="websites"   />
<TextInput source="username"   />
<TextInput source="password"   />
                      </SimpleForm>
                    </Edit>
                  );

export const credentialsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="url"  reference="websites"   />
<TextInput source="username"   />
<TextInput source="password"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="url" label="url" reference="websites"   alwaysOn/>,
,
,

    ];


