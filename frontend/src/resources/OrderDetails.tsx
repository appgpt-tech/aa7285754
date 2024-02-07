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
const OrderDetailsTitle = () => {
  const record = useRecordContext();
  return <span>OrderDetails {record ? `"${ record.orderId }"` : ""}</span>;
};

export const OrderDetailsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="orderId" reference="Orders"  />
<ReferenceField source="productId" reference="Products"  />
<NumberField source="price" />
<NumberField source="quantity" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const OrderDetailsEdit = () => (
                    <Edit title={<OrderDetailsTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="orderId"  reference="Orders"   />
<ReferenceInput source="productId"  reference="Products"   />
<NumberInput source="price"   />
<NumberInput source="quantity"   />
                      </SimpleForm>
                    </Edit>
                  );

export const OrderDetailsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="orderId"  reference="Orders"   />
<ReferenceInput source="productId"  reference="Products"   />
<NumberInput source="price"   />
<NumberInput source="quantity"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="orderId" label="orderId" reference="Orders"   alwaysOn/>,
<ReferenceInput source="productId" label="productId" reference="Products"   alwaysOn/>,
,
,

    ];


