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
const VendorsTitle = () => {
  const record = useRecordContext();
  return <span>Vendors {record ? `"${ record.vendorId }"` : ""}</span>;
};

export const VendorsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="vendorId" />
<TextField source="companyName" />
<TextField source="contactName" />
<TextField source="email" />
<TextField source="password" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const VendorsEdit = () => (
                    <Edit title={<VendorsTitle />}>
                      <SimpleForm>
                          <TextInput source="vendorId"   />
<TextInput source="companyName"   />
<TextInput source="contactName"   />
<TextInput source="email"   />
<TextInput source="password"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const VendorsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="vendorId"   />
<TextInput source="companyName"   />
<TextInput source="contactName"   />
<TextInput source="email"   />
<TextInput source="password"   />
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


