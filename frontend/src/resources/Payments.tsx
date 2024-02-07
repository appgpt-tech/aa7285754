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
const PaymentsTitle = () => {
  const record = useRecordContext();
  return <span>Payments {record ? `"${ record.paymentId }"` : ""}</span>;
};

export const PaymentsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="paymentId" />
<ReferenceField source="orderId" reference="Orders"  />
<NumberField source="amount" />
<TextField source="paymentMethod" />
<DateField source="paymentDate" />
<TextField source="paymentStatus" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const PaymentsEdit = () => (
                    <Edit title={<PaymentsTitle />}>
                      <SimpleForm>
                          <TextInput source="paymentId"   />
<ReferenceInput source="orderId"  reference="Orders"   />
<NumberInput source="amount"   />
<TextInput source="paymentMethod"   />
<DateInput source="paymentDate"   />
<TextInput source="paymentStatus"   />
                      </SimpleForm>
                    </Edit>
                  );

export const PaymentsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="paymentId"   />
<ReferenceInput source="orderId"  reference="Orders"   />
<NumberInput source="amount"   />
<TextInput source="paymentMethod"   />
<DateInput source="paymentDate"   />
<TextInput source="paymentStatus"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="orderId" label="orderId" reference="Orders"   alwaysOn/>,
,
,
,
,

    ];


