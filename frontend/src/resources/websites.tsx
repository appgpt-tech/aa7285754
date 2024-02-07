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
const websitesTitle = () => {
  const record = useRecordContext();
  return <span>websites {record ? `"${ record.websiteTitle }"` : ""}</span>;
};

export const websitesList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="websiteTitle" />
<UrlField source="url" />
<TextField source="category" />
<NumberField source="rating" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const websitesEdit = () => (
                    <Edit title={<websitesTitle />}>
                      <SimpleForm>
                          <TextInput source="websiteTitle"   />
<TextInput source="url"   />
<TextInput source="category"   />
<NumberInput source="rating"   />
                      </SimpleForm>
                    </Edit>
                  );

export const websitesCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="websiteTitle"   />
<TextInput source="url"   />
<TextInput source="category"   />
<NumberInput source="rating"   />
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


