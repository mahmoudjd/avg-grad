import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotesTable from "./components/NotesTable";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <NotesTable />
      <Footer />
    </div>
  );
}

export default App;
