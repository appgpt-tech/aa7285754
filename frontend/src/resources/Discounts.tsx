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
const DiscountsTitle = () => {
  const record = useRecordContext();
  return <span>Discounts {record ? `"${ record.productId }"` : ""}</span>;
};

export const DiscountsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="productId" reference="Products"  />
<TextField source="discountName" />
<TextField source="description" />
<NumberField source="discountAmount" />
<NumberField source="discountPercent" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const DiscountsEdit = () => (
                    <Edit title={<DiscountsTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="productId"  reference="Products"   />
<TextInput source="discountName"   />
<TextInput source="description"   />
<NumberInput source="discountAmount"   />
<NumberInput source="discountPercent"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const DiscountsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="productId"  reference="Products"   />
<TextInput source="discountName"   />
<TextInput source="description"   />
<NumberInput source="discountAmount"   />
<NumberInput source="discountPercent"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="productId" label="productId" reference="Products"   alwaysOn/>,
,
,
,
,

    ];


