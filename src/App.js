import * as React from "react";
import { EventList, EventShow, EventCreate, EventEdit } from "./events";
import { Admin, Resource, ListGuesser } from "react-admin";
import {
  FirebaseRealTimeSaga,
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import CustomLoginPage from "./CustomLoginPage";
import frenchMessages from 'ra-language-french';
import { firebaseConfig as config } from "./FIREBASE_CONFIG";

const i18nProvider = () => frenchMessages

const options = {
  logging: true
  // rootRef: 'root_collection/some_document',
  // watch: ["posts"]
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

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
