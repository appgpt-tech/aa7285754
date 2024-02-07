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
const HealthMetricsTitle = () => {
  const record = useRecordContext();
  return <span>HealthMetrics {record ? `"${ record.metricId }"` : ""}</span>;
};

export const HealthMetricsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="metricId" />
<ReferenceField source="customerId" reference="Customers"  />
<TextField source="type" />
<NumberField source="value" />
<TextField source="unit" />
<DateField source="date" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const HealthMetricsEdit = () => (
                    <Edit title={<HealthMetricsTitle />}>
                      <SimpleForm>
                          <TextInput source="metricId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="type"   />
<NumberInput source="value"   />
<TextInput source="unit"   />
<DateInput source="date"   />
                      </SimpleForm>
                    </Edit>
                  );

export const HealthMetricsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="metricId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="type"   />
<NumberInput source="value"   />
<TextInput source="unit"   />
<DateInput source="date"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="customerId" label="customerId" reference="Customers"   alwaysOn/>,
,
,
,
,

    ];


