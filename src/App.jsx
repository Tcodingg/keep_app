import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import Content from "./Content";

const createNote = (contents) => {
  return <Note key={contents.id} title={contents.title} note={contents.note} />;
};

const App = () => {
  return (
    <div>
      <Header />
      <Footer />

      <div>{Content.map(createNote)}</div>
    </div>
  );
};

export default App;
