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
const RealEstateTitle = () => {
  const record = useRecordContext();
  return <span>RealEstate {record ? `"${ record.geolocation }"` : ""}</span>;
};

export const RealEstateList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="propertyType" />
<TextField source="value" />
<TextField source="location" />
<TextField source="floodRisk" />
<TextField source="earthquakeRisk" />
<TextField source="fireRisk" />
<TextField source="geolocation" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const RealEstateEdit = () => (
                    <Edit title={<RealEstateTitle />}>
                      <SimpleForm>
                          <TextInput source="propertyType"   />
<TextInput source="value"   />
<TextInput source="location"   />
<TextInput source="floodRisk"   />
<TextInput source="earthquakeRisk"   />
<TextInput source="fireRisk"   />
<TextInput source="geolocation"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const RealEstateCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="propertyType"   />
<TextInput source="value"   />
<TextInput source="location"   />
<TextInput source="floodRisk"   />
<TextInput source="earthquakeRisk"   />
<TextInput source="fireRisk"   />
<TextInput source="geolocation"   />
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
,

    ];


