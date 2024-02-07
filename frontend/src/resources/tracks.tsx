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
const tracksTitle = () => {
  const record = useRecordContext();
  return <span>tracks {record ? `"${ record.trackName }"` : ""}</span>;
};

export const tracksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="trackName" />
<ReferenceField source="album" reference="albums"  />
<TextField source="lyrics" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const tracksEdit = () => (
                    <Edit title={<tracksTitle />}>
                      <SimpleForm>
                          <TextInput source="trackName"   />
<ReferenceInput source="album"  reference="albums"   />
<TextInput source="lyrics"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const tracksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="trackName"   />
<ReferenceInput source="album"  reference="albums"   />
<TextInput source="lyrics"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="album" label="album" reference="albums"   alwaysOn/>,
,

    ];


