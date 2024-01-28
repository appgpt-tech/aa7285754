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
const GenresTitle = () => {
  const record = useRecordContext();
  return <span>Genres {record ? `"${ record.category }"` : ""}</span>;
};

export const GenresList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="category" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const GenresEdit = () => (
                    <Edit title={<GenresTitle />}>
                      <SimpleForm>
                          <TextInput source="category"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const GenresCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="category"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,

    ];


