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
  FileInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const EventFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const EventList = (props) => (
  <List {...props} filters={<EventFilter />}>
    <Datagrid>
      <TextField source="name" />
      <RichTextField source="body" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <TextField source="eventDate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const EventShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      {/* <ReferenceField label="Comment" source="title" reference="comments">
        <TextField source="title" />
      </ReferenceField> */}
      <TextField source="createdate" />
      <TextField source="eventDate" />
      <TextField source="lastupdate" />
      <RichTextField source="body" />
      <FileField source="file.src" title="file.title" />
    </SimpleShowLayout>
  </Show>
);

export const EventCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="name" />
      <RichTextInput source="body" />
      <TextInput source="eventDate" />
      {/* <ReferenceInput label="Comment" source="title" reference="comments">
        <SelectInput optionText="title" />
      </ReferenceInput> */}
      <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export const EventEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <DisabledInput source="id" />
      <DisabledInput source="createdate" />
      <DisabledInput source="lastupdate" /> */}
      <TextInput source="eventDate" />
      {/* <ReferenceInput label="Comment" source="title" reference="comments">
        <SelectInput optionText="title" />
      </ReferenceInput> */}
      <TextInput source="name" />
      <RichTextInput source="body" />
      <SelectInput source="rating" choices={[
        { id: 1, name: 'Good' },
        { id: 2, name: 'Okay' },
        { id: 3, name: 'Bad' },
      ]} />
      <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
