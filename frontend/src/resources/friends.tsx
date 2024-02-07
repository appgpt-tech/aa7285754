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
const friendsTitle = () => {
  const record = useRecordContext();
  return <span>friends {record ? `"${ record.name }"` : ""}</span>;
};

export const friendsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="name" />
<DateField source="birthday" />
<TextField source="starSign" />
<TextField source="gender" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const friendsEdit = () => (
                    <Edit title={<friendsTitle />}>
                      <SimpleForm>
                          <TextInput source="name"   />
<DateInput source="birthday"   />
<TextInput source="starSign"   />
<TextInput source="gender"   />
                      </SimpleForm>
                    </Edit>
                  );

export const friendsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="name"   />
<DateInput source="birthday"   />
<TextInput source="starSign"   />
<TextInput source="gender"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,

    ];


