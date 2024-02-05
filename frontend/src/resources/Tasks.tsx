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
const TasksTitle = () => {
  const record = useRecordContext();
  return <span>Tasks {record ? `"${ record.taskName }"` : ""}</span>;
};

export const TasksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="taskName" />
<TextField source="description" />
<DateField source="dueDate" />
<TextField source="status" />
<TextField source="priority" />
<ReferenceField source="assigneeName" reference="Assignees"  />
<ReferenceField source="projectName" reference="Projects"  />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const TasksEdit = () => (
                    <Edit title={<TasksTitle />}>
                      <SimpleForm>
                          <TextInput source="taskName"   />
<TextInput source="description"   />
<DateInput source="dueDate"   />
<TextInput source="status"   />
<TextInput source="priority"   />
<ReferenceInput source="assigneeName"  reference="Assignees"   />
<ReferenceInput source="projectName"  reference="Projects"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const TasksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="taskName"   />
<TextInput source="description"   />
<DateInput source="dueDate"   />
<TextInput source="status"   />
<TextInput source="priority"   />
<ReferenceInput source="assigneeName"  reference="Assignees"   />
<ReferenceInput source="projectName"  reference="Projects"   />
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
,
<ReferenceInput source="assigneeName" label="assigneeName" reference="Assignees"   alwaysOn/>,
<ReferenceInput source="projectName" label="projectName" reference="Projects"   alwaysOn/>,

    ];


