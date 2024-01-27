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
  return <span>Books {record ? `"${ record.ISBN }"` : ""}</span>;
};

export const BooksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="title" />
<TextField source="author" />
<TextField source="ISBN" />
<TextField source="copiesSold" />
<TextField source="issueDate" />
<TextField source="genre" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const BooksEdit = () => (
                    <Edit title={<BooksTitle />}>
                      <SimpleForm>
                          <TextInput source="title"   />
<TextInput source="author"   />
<TextInput source="ISBN"   />
<TextInput source="copiesSold"   />
<TextInput source="issueDate"   />
<TextInput source="genre"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const BooksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="title"   />
<TextInput source="author"   />
<TextInput source="ISBN"   />
<TextInput source="copiesSold"   />
<TextInput source="issueDate"   />
<TextInput source="genre"   />
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
,

    ];


