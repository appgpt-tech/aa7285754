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
const contactsTitle = () => {
  const record = useRecordContext();
  return <span>contacts {record ? `"${ record.name }"` : ""}</span>;
};

export const contactsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="name" />
<TextField source="mobile" />
<EmailField source="email" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const contactsEdit = () => (
                    <Edit title={<contactsTitle />}>
                      <SimpleForm>
                          <TextInput source="name"   />
<TextInput source="mobile"   />
<TextInput source="email"   />
                      </SimpleForm>
                    </Edit>
                  );

export const contactsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="name"   />
<TextInput source="mobile"   />
<TextInput source="email"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


