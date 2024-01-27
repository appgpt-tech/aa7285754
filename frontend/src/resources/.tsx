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
const Title = () => {
  const record = useRecordContext();
  return <span> {record ? `"${ record. }"` : ""}</span>;
};

export const List = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="" />
<TextField source="" />
<TextField source="" />
<NumberField source="" />
<TextField source="" />
<TextField source="" />
<NumberField source="" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const Edit = () => (
                    <Edit title={<Title />}>
                      <SimpleForm>
                          <TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<NumberInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<NumberInput source=""   />
                      </SimpleForm>
                    </Edit>
                  );

export const Create = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<NumberInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<NumberInput source=""   />
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
,

    ];


