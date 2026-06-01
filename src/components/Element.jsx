import { useState } from "react";
import NavigationTree from "./NavigationTree";

function Element({ data, onNoteSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleBoubleClick(event = event, data) {
    setIsOpen((prevStatus) => !prevStatus);
  }
  function handleFileClick() {
    if (data.type === "file") {
      onNoteSelect(data.content);
    }
  }

  return (
    <div style={{ marginLeft: "15px" }}>
      <p
        onDoubleClick={() => {
          handleBoubleClick(data);
        }}
        onClick={handleFileClick}
        style={{ cursor: "pointer" }}
      >
        {data.type === "folder" ? (isOpen ? "📂" : "📁") : "📄"}
        {data.name}
      </p>
      {data.children &&
      data.children.length > 0 &&
      isOpen &&
      data.type === "folder" ? (
        <NavigationTree data={data.children} onNoteSelect={onNoteSelect} />
      ) : null}
    </div>
  );
}

export default Element;
