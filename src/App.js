import React, { Suspense } from "react";
import Route from "./route/route";
import "./App.css";
import { PushSpinner } from "react-spinners-kit";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import ProviderLang from "./lang/ProviderLang";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProviderLang>
          <Suspense fallback={<PushSpinner size={30} color="#E42F86" />}>
            <Route />
          </Suspense>
        </ProviderLang>
      </PersistGate>
    </Provider>
  );
}

export default App;
