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
const booksTitle = () => {
  const record = useRecordContext();
  return <span>books {record ? `"${ record.bookTitle }"` : ""}</span>;
};

export const booksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="bookTitle" />
<DateField source="releaseDate" />
<NumberField source="numberOfBooksSold" />
<ReferenceField source="author" reference="authors"  />
<NumberField source="numberOfEditions" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const booksEdit = () => (
                    <Edit title={<booksTitle />}>
                      <SimpleForm>
                          <TextInput source="bookTitle"   />
<DateInput source="releaseDate"   />
<NumberInput source="numberOfBooksSold"   />
<ReferenceInput source="author"  reference="authors"   />
<NumberInput source="numberOfEditions"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const booksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="bookTitle"   />
<DateInput source="releaseDate"   />
<NumberInput source="numberOfBooksSold"   />
<ReferenceInput source="author"  reference="authors"   />
<NumberInput source="numberOfEditions"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
<ReferenceInput source="author" label="author" reference="authors"   alwaysOn/>,
,

    ];


