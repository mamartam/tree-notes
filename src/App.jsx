import { useState } from "react";
import NavigationTree from "./components/NavigationTree";
import WorkPanel from "./components/WorkPanel";
import data from "./data";

function App() {
  const [content, setContent] = useState("Choose Note");
  return (
    <>
      <header>
        <h1>Tree Notes</h1>
      </header>
      <main>
        <NavigationTree data={data} onNoteSelect={setContent} />
        <WorkPanel content={content} />
      </main>
    </>
  );
}

export default App;
