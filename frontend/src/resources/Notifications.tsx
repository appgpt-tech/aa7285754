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
const NotificationsTitle = () => {
  const record = useRecordContext();
  return <span>Notifications {record ? `"${ record.notificationId }"` : ""}</span>;
};

export const NotificationsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="notificationId" />
<ReferenceField source="customerId" reference="Customers"  />
<TextField source="type" />
<TextField source="message" />
<DateField source="dateScheduled" />
<TextField source="status" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const NotificationsEdit = () => (
                    <Edit title={<NotificationsTitle />}>
                      <SimpleForm>
                          <TextInput source="notificationId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="type"   />
<TextInput source="message"   />
<DateInput source="dateScheduled"   />
<TextInput source="status"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const NotificationsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="notificationId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="type"   />
<TextInput source="message"   />
<DateInput source="dateScheduled"   />
<TextInput source="status"   />
<NumberInput source="id"   disabled/>
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


