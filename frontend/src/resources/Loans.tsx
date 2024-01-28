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
const LoansTitle = () => {
  const record = useRecordContext();
  return <span>Loans {record ? `"${ record.id }"` : ""}</span>;
};

export const LoansList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="accountNumber" />
<TextField source="loanAmount" />
<TextField source="productType" />
<TextField source="outstandingBalance" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const LoansEdit = () => (
                    <Edit title={<LoansTitle />}>
                      <SimpleForm>
                          <TextInput source="accountNumber"   />
<TextInput source="loanAmount"   />
<TextInput source="productType"   />
<TextInput source="outstandingBalance"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const LoansCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="accountNumber"   />
<TextInput source="loanAmount"   />
<TextInput source="productType"   />
<TextInput source="outstandingBalance"   />
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

    ];


