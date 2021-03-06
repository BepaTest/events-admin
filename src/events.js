// in src/posts.js
import * as React from 'react'
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  DateInput,
  ReferenceField,
  ImageInput,
  ImageField,
  DateField,
  required,
} from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import { v4 as uuidv4 } from 'uuid'

const EventTitle = ({ record }) => {
  return <span>Evénement {record ? `"${record.name}"` : ''}</span>
}

const EventFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='name' alwaysOn />
  </Filter>
)

export const EventList = (props) => (
  <List {...props} filters={<EventFilter />}>
    <Datagrid>
      <TextField source='name' label="Nom d'événement" />
      <TextField source='category' />
      <DateField source='eventDate' label="Date d'événement" />
      <TextField source='startTime' label='Heure de debut' />
      <TextField source='endTime' label='Heure de fin' />
      <ShowButton label='' />
      <EditButton label='' />
      <DeleteButton label='' redirect={false} undoable={false} />
    </Datagrid>
  </List>
)

export const EventShow = (props) => (
  <Show title={<EventTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source='name' label="Nom d'événement" />
      <ReferenceField
        source='category'
        reference='categories'
        label='Catégorie'
      >
        <TextField source='name' />
      </ReferenceField>
      <TextField source='eventDate' label="Date d'événement" />
      <TextField source='startTime' label='Heure de debut (HH:MM)' />
      <TextField source='endTime' label='Heure de fin (HH:MM)' />
      <TextField source='lastupdate' label='Dernier changement' />
      <TextField multiline source='description' label='Description' />
      <RichTextField source='link' label='Lien associé' />
      <TextField source='price' label='Prix' />
      <ImageField
        source='image.src'
        label="Image d'événement"
        title="Image d'événement"
      />
      <TextField source='address.street' label="Adresse d'événemet" />
      <TextField source='address.postCode' label='Adresse - code postal' />
      <TextField source='address.city' label='Adresse - nom de la ville' />
      <TextField source='contact.name' label='Contact - Prenom' />
      <TextField source='contact.surname' label='Contact - Nom' />
      <TextField source='contact.phone' label='Contact - Numero de téléphone' />
    </SimpleShowLayout>
  </Show>
)

export const EventCreate = (props) => (
  <Create title="Création d'événement" {...props}>
    <SimpleForm redirect='list'>
      <TextInput disabled source='id' defaultValue={() => uuidv4()} />
      <TextInput source='name' label="Nom d'événement" validate={required()} />
      <ReferenceInput
        source='category'
        reference='categories'
        label='Catégorie'
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
      <DateInput
        source='eventDate'
        label="Date d'événement"
        validate={required()}
      />
      <TextInput
        source='startTime'
        label='Heure de debut (HH:MM)'
        validate={required()}
      />
      <TextInput
        source='endTime'
        label='Heure de fin (HH:MM)'
        validate={required()}
      />
      <TextInput source='description' label='Description' />
      <RichTextInput
        source='link'
        label='Lien associé'
        toolbar={[['bold', 'italic', 'underline', 'link']]}
      />
      <TextInput source='price' label='Prix' validate={required()} />
      <ImageInput
        source='image'
        label='Photo'
        accept='image/*'
        validate={required()}
        placeholder={<p>Déposez votre photo ici</p>}
      >
        <ImageField source='src' title='title' />
      </ImageInput>
      <TextInput source='address.street' label="Adresse d'événemet" />
      <TextInput source='address.postCode' label='Adresse  - code postal' />
      <TextInput
        source='address.city'
        label='Adresse - nom de la ville'
        validate={required()}
      />
      <TextInput source='contact.name' label='Contact - Prenom' />
      <TextInput source='contact.surname' label='Contact - Nom' />
      <TextInput source='contact.phone' label='Contact - Numero de téléphone' />
    </SimpleForm>
  </Create>
)

export const EventEdit = (props) => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source='id' defaultValue={() => uuidv4()} />
      <TextInput source='name' label="Nom d'événement" validate={required()} />
      <ReferenceInput
        source='category'
        reference='categories'
        label='Catégorie'
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
      <DateInput
        source='eventDate'
        label="Date d'événement"
        validate={required()}
      />
      <TextInput
        source='startTime'
        label='Heure de debut (HH:MM)'
        validate={required()}
      />
      <TextInput
        source='endTime'
        label='Heure de fin (HH:MM)'
        validate={required()}
      />
      <TextInput source='description' label='Description' />
      <RichTextInput
        source='link'
        label='Lien associé'
        toolbar={[['bold', 'italic', 'underline', 'link']]}
      />
      <TextInput source='price' label='Prix' validate={required()} />
      <ImageInput
        source='image'
        label='Photo'
        accept='image/*'
        validate={required()}
        placeholder={<p>Déposez votre photo ici</p>}
      >
        <ImageField source='src' title='title' />
      </ImageInput>
      <TextInput source='address.street' label="Adresse d'événemet" />
      <TextInput source='address.postCode' label='Adresse - code postal' />
      <TextInput
        source='address.city'
        label='Adresse - nom de la ville'
        validate={required()}
      />
      <TextInput source='contact.name' label='Contact - Prenom' />
      <TextInput source='contact.surname' label='Contact - Nom' />
      <TextInput source='contact.phone' label='Contact - Numero de téléphone' />
    </SimpleForm>
  </Edit>
)
