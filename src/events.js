// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  // DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  SelectArrayInput,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
  DateInput,
  DateTimeInput,
} from "react-admin";
import { TimeInput } from 'react-admin-date-inputs';
import RichTextInput from "ra-input-rich-text";

let Name = "";

const EventTitle = ({ record }) => {
  return <span>Evénement {record ? `"${record.title}"` : ""}</span>;
};

const EventFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const EventList = props => (
  <List {...props} filters={<EventFilter />}>
    <Datagrid>
      <TextField source="name" />
      <RichTextField source="description" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <TextField source="eventDate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} undoable={false} />
    </Datagrid>
  </List>
);

export const EventShow = props => (
  <Show title={<EventTitle />} {...props}>
    <SimpleShowLayout>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      {/* <ReferenceField label="Comment" source="title" reference="comments">
        <TextField source="title" />
      </ReferenceField> */}
      <TextField source="createdate" />
      <TextField source="eventDate" />
      <TextField source="lastupdate" />
      <RichTextField source="description" />
    </SimpleShowLayout>
  </Show>
);

export const EventCreate = props => (
  <Create title="Création d'événement" {...props}>
    <SimpleForm>
      <TextInput source="name" label="Nom d'événement" />
      <RichTextInput source="description" />
      <DateInput source="eventDate" label="Date d'événement"/>
      <DateTimeInput source="published_at" />
      <TextInput autoFocus source="image" options={{ fullWidth: true }} />
      <ReferenceInput label="Catégorie" source="category" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      
    </SimpleForm>
  </Create>
);

export const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm>
      {/* <DisabledInput source="id" />
      <DisabledInput source="createdate" />
      <DisabledInput source="lastupdate" /> */}
      <TextInput source="eventDate" />
      {/* <ReferenceInput label="Comment" source="title" reference="comments">
        <SelectInput optionText="title" />
      </ReferenceInput> */}
      <TextInput source="name" />
      <RichTextInput source="description" />
      <SelectInput
        source="rating"
        choices={[
          { id: 1, name: "Good" },
          { id: 2, name: "Okay" },
          { id: 3, name: "Bad" }
        ]}
      />
      <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
