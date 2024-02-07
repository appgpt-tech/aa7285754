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
const OrdersTitle = () => {
  const record = useRecordContext();
  return <span>Orders {record ? `"${ record.orderId }"` : ""}</span>;
};

export const OrdersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="orderId" />
<ReferenceField source="customerId" reference="Customers"  />
<NumberField source="totalAmount" />
<NumberField source="vat" />
<NumberField source="productTotalAmount" />
<NumberField source="shippingCost" />
<TextField source="shippingAddress" />
<TextField source="orderAddress" />
<TextField source="orderEmail" />
<DateField source="orderDate" />
<TextField source="orderStatus" />
<TextField source="trackingNo" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const OrdersEdit = () => (
                    <Edit title={<OrdersTitle />}>
                      <SimpleForm>
                          <TextInput source="orderId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<NumberInput source="totalAmount"   />
<NumberInput source="vat"   />
<NumberInput source="productTotalAmount"   />
<NumberInput source="shippingCost"   />
<TextInput source="shippingAddress"   />
<TextInput source="orderAddress"   />
<TextInput source="orderEmail"   />
<DateInput source="orderDate"   />
<TextInput source="orderStatus"   />
<TextInput source="trackingNo"   />
                      </SimpleForm>
                    </Edit>
                  );

export const OrdersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="orderId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<NumberInput source="totalAmount"   />
<NumberInput source="vat"   />
<NumberInput source="productTotalAmount"   />
<NumberInput source="shippingCost"   />
<TextInput source="shippingAddress"   />
<TextInput source="orderAddress"   />
<TextInput source="orderEmail"   />
<DateInput source="orderDate"   />
<TextInput source="orderStatus"   />
<TextInput source="trackingNo"   />
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
,
,
,
,
,
,

    ];


