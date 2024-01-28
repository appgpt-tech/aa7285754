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
const BooksTitle = () => {
  const record = useRecordContext();
  return <span>Books {record ? `"${ record.id }"` : ""}</span>;
};

export const BooksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="bookTitle" />
<TextField source="releaseDate" />
<TextField source="numberOfBooksSold" />
<TextField source="author" />
<TextField source="numberOfEditions" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const BooksEdit = () => (
                    <Edit title={<BooksTitle />}>
                      <SimpleForm>
                          <TextInput source="bookTitle"   />
<TextInput source="releaseDate"   />
<TextInput source="numberOfBooksSold"   />
<TextInput source="author"   />
<TextInput source="numberOfEditions"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const BooksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="bookTitle"   />
<TextInput source="releaseDate"   />
<TextInput source="numberOfBooksSold"   />
<TextInput source="author"   />
<TextInput source="numberOfEditions"   />
<NumberInput source="id"   disabled/>
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

    ];


