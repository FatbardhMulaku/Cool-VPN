import React, { Suspense } from "react";
import Route from "./route/route";
import "./App.css";
import { PushSpinner } from "react-spinners-kit";

function App() {
  return (
    <Suspense fallback={<PushSpinner size={30} color="#E42F86" />}>
      <Route />
    </Suspense>
  );
}

export default App;
