import * as React from 'react'
import { EventList, EventShow, EventCreate, EventEdit } from './events'
import { Admin, Resource, Login } from 'react-admin'
import {
  FirebaseRealTimeSaga,
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase'
import firebase from 'firebase'
import frenchMessages from 'ra-language-french'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import { firebaseConfig } from './FIREBASE_CONFIG'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const options = {
  logging: true,
  app: firebaseApp,
  // rootRef: 'root_collection/some_document',
}

const dataProvider = FirebaseDataProvider(firebaseConfig, options)
const authProvider = FirebaseAuthProvider(firebaseConfig, options)
//const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options)

const i18nProvider = polyglotI18nProvider(() => frenchMessages, 'fr')

const MyLoginPage = () => (
  <Login
    // Condrieu Picture
    backgroundImage='https://www.parlezmoidimmo.fr/public/files/images/ou-vivre-dans-le-rhone.jpg'
  />
)

const App = () => (
  <Admin
    loginPage={MyLoginPage}
    //customSagas={[firebaseRealtime]}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    <Resource name='categories' />
    <Resource
      name='evenements'
      list={EventList}
      show={EventShow}
      create={EventCreate}
      edit={EventEdit}
    />
  </Admin>
)

export default App
