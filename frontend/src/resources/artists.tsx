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
const artistsTitle = () => {
  const record = useRecordContext();
  return <span>artists {record ? `"${ record.artistName }"` : ""}</span>;
};

export const artistsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="artistName" />
<TextField source="band" />
<DateField source="dateOfBirth" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const artistsEdit = () => (
                    <Edit title={<artistsTitle />}>
                      <SimpleForm>
                          <TextInput source="artistName"   />
<TextInput source="band"   />
<DateInput source="dateOfBirth"   />
                      </SimpleForm>
                    </Edit>
                  );

export const artistsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="artistName"   />
<TextInput source="band"   />
<DateInput source="dateOfBirth"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


