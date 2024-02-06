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
const ReviewsTitle = () => {
  const record = useRecordContext();
  return <span>Reviews {record ? `"${ record.reviewId }"` : ""}</span>;
};

export const ReviewsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="reviewId" />
<ReferenceField source="productId" reference="Products"  />
<ReferenceField source="customerId" reference="Customers"  />
<ReferenceField source="vendorId" reference="Vendors"  />
<NumberField source="rating" />
<TextField source="reviewDetails" />
<DateField source="date" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ReviewsEdit = () => (
                    <Edit title={<ReviewsTitle />}>
                      <SimpleForm>
                          <TextInput source="reviewId"   />
<ReferenceInput source="productId"  reference="Products"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<ReferenceInput source="vendorId"  reference="Vendors"   />
<NumberInput source="rating"   />
<TextInput source="reviewDetails"   />
<DateInput source="date"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const ReviewsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="reviewId"   />
<ReferenceInput source="productId"  reference="Products"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<ReferenceInput source="vendorId"  reference="Vendors"   />
<NumberInput source="rating"   />
<TextInput source="reviewDetails"   />
<DateInput source="date"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="productId" label="productId" reference="Products"   alwaysOn/>,
<ReferenceInput source="customerId" label="customerId" reference="Customers"   alwaysOn/>,
<ReferenceInput source="vendorId" label="vendorId" reference="Vendors"   alwaysOn/>,
,
,
,

    ];


