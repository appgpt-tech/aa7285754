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
const SupportTicketsTitle = () => {
  const record = useRecordContext();
  return <span>SupportTickets {record ? `"${ record.ticketId }"` : ""}</span>;
};

export const SupportTicketsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="ticketId" />
<ReferenceField source="userId" reference="Users"  />
<ReferenceField source="customerId" reference="Customers"  />
<TextField source="description" />
<TextField source="status" />
<DateField source="creationDate" />
<DateField source="resolutionDate" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const SupportTicketsEdit = () => (
                    <Edit title={<SupportTicketsTitle />}>
                      <SimpleForm>
                          <TextInput source="ticketId"   />
<ReferenceInput source="userId"  reference="Users"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="description"   />
<TextInput source="status"   />
<DateInput source="creationDate"   />
<DateInput source="resolutionDate"   />
                      </SimpleForm>
                    </Edit>
                  );

export const SupportTicketsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="ticketId"   />
<ReferenceInput source="userId"  reference="Users"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="description"   />
<TextInput source="status"   />
<DateInput source="creationDate"   />
<DateInput source="resolutionDate"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="userId" label="userId" reference="Users"   alwaysOn/>,
<ReferenceInput source="customerId" label="customerId" reference="Customers"   alwaysOn/>,
,
,
,
,

    ];


