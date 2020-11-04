import * as React from "react";
import { EventList, EventShow, EventCreate, EventEdit } from "./events";
import { Admin, Resource } from "react-admin";
import {
  FirebaseRealTimeSaga,
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";
import firebase from "firebase";
import CustomLoginPage from "./CustomLoginPage";
import frenchMessages from "ra-language-french";
import { firebaseConfig } from "./FIREBASE_CONFIG";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const options = {
  logging: true,
  app: firebaseApp,
  // rootRef: 'root_collection/some_document',
};

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

const i18nProvider = () => frenchMessages;

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={CustomLoginPage}
        customSagas={[firebaseRealtime]}
        dataProvider={dataProvider}
        authProvider={authProvider}
        locale="fr"
        i18nProvider={i18nProvider}
      >
        <Resource name="categories" />
        <Resource
          name="evenements"
          list={EventList}
          show={EventShow}
          create={EventCreate}
          edit={EventEdit}
        />
      </Admin>
    );
  }
}

export default App;
