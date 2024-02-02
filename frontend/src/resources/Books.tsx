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
  return <span>Books {record ? `"${ record.title }"` : ""}</span>;
};

export const BooksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="title" />
<ReferenceField source="author" reference="authors"  />
<ReferenceField source="genre" reference="genres"  />
<TextField source="bookCover" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const BooksEdit = () => (
                    <Edit title={<BooksTitle />}>
                      <SimpleForm>
                          <TextInput source="title"   />
<ReferenceInput source="author"  reference="authors"   />
<ReferenceInput source="genre"  reference="genres"   />
<TextInput source="bookCover"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const BooksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="title"   />
<ReferenceInput source="author"  reference="authors"   />
<ReferenceInput source="genre"  reference="genres"   />
<TextInput source="bookCover"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="author" label="author" reference="authors"   alwaysOn/>,
<ReferenceInput source="genre" label="genre" reference="genres"   alwaysOn/>,
,

    ];


