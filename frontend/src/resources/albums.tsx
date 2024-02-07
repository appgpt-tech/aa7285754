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
const albumsTitle = () => {
  const record = useRecordContext();
  return <span>albums {record ? `"${ record.albumName }"` : ""}</span>;
};

export const albumsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="albumName" />
<ReferenceField source="artistName" reference="artists"  />
<NumberField source="copiesSold" />
<DateField source="launchDate" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const albumsEdit = () => (
                    <Edit title={<albumsTitle />}>
                      <SimpleForm>
                          <TextInput source="albumName"   />
<ReferenceInput source="artistName"  reference="artists"   />
<NumberInput source="copiesSold"   />
<DateInput source="launchDate"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const albumsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="albumName"   />
<ReferenceInput source="artistName"  reference="artists"   />
<NumberInput source="copiesSold"   />
<DateInput source="launchDate"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="artistName" label="artistName" reference="artists"   alwaysOn/>,
,
,

    ];


