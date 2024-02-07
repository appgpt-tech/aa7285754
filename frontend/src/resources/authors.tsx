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
const authorsTitle = () => {
  const record = useRecordContext();
  return <span>authors {record ? `"${ record.authorName }"` : ""}</span>;
};

export const authorsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="authorName" />
<TextField source="gender" />
<DateField source="dateOfBirth" />
<NumberField source="numberOfBooks" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const authorsEdit = () => (
                    <Edit title={<authorsTitle />}>
                      <SimpleForm>
                          <TextInput source="authorName"   />
<TextInput source="gender"   />
<DateInput source="dateOfBirth"   />
<NumberInput source="numberOfBooks"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const authorsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="authorName"   />
<TextInput source="gender"   />
<DateInput source="dateOfBirth"   />
<NumberInput source="numberOfBooks"   />
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

    ];


