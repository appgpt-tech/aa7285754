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
const websitesTitle = () => {
  const record = useRecordContext();
  return <span>websites {record ? `"${ record.siteName }"` : ""}</span>;
};

export const websitesList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="siteName" />
<TextField source="url" />
<NumberField source="rating" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const websitesEdit = () => (
                    <Edit title={<websitesTitle />}>
                      <SimpleForm>
                          <TextInput source="siteName"   />
<TextInput source="url"   />
<NumberInput source="rating"   />
                      </SimpleForm>
                    </Edit>
                  );

export const websitesCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="siteName"   />
<TextInput source="url"   />
<NumberInput source="rating"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];

