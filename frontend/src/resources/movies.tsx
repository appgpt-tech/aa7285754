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
const moviesTitle = () => {
  const record = useRecordContext();
  return <span>movies {record ? `"${ record.movieTitle }"` : ""}</span>;
};

export const moviesList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="movieTitle" />
<TextField source="genre" />
<BooleanField source="watchedStatus" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const moviesEdit = () => (
                    <Edit title={<moviesTitle />}>
                      <SimpleForm>
                          <TextInput source="movieTitle"   />
<TextInput source="genre"   />
<BooleanInput source="watchedStatus"   />
                      </SimpleForm>
                    </Edit>
                  );

export const moviesCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="movieTitle"   />
<TextInput source="genre"   />
<BooleanInput source="watchedStatus"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


