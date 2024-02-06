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
const WishlistTitle = () => {
  const record = useRecordContext();
  return <span>Wishlist {record ? `"${ record.userId }"` : ""}</span>;
};

export const WishlistList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="userId" reference="Users"  />
<ReferenceField source="cardId" reference="Cards"  />
<DateField source="insertedDate" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const WishlistEdit = () => (
                    <Edit title={<WishlistTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="userId"  reference="Users"   />
<ReferenceInput source="cardId"  reference="Cards"   />
<DateInput source="insertedDate"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const WishlistCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="userId"  reference="Users"   />
<ReferenceInput source="cardId"  reference="Cards"   />
<DateInput source="insertedDate"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="userId" label="userId" reference="Users"   alwaysOn/>,
<ReferenceInput source="cardId" label="cardId" reference="Cards"   alwaysOn/>,
,

    ];


