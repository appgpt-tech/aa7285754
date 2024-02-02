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
const AuthorsTitle = () => {
  const record = useRecordContext();
  return <span>Authors {record ? `"${ record.authorName }"` : ""}</span>;
};

export const AuthorsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="authorName" />
<ReferenceField source="books" reference="Books"  />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const AuthorsEdit = () => (
                    <Edit title={<AuthorsTitle />}>
                      <SimpleForm>
                          <TextInput source="authorName"   />
<ReferenceInput source="books"  reference="Books"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const AuthorsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="authorName"   />
<ReferenceInput source="books"  reference="Books"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="books" label="books" reference="Books"   alwaysOn/>,

    ];


