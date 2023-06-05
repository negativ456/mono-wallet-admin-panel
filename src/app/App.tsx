import React from "react";
import { Header } from "../widgets/Header";
import { AppRouter } from "./providers/router/ui/AppRouter";
import { PageLayout } from "../shared/ui/templates/PageLayot/PageLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <PageLayout>
        <AppRouter />
      </PageLayout>
    </div>
  );
}

export default App;
