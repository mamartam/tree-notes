import { useState } from "react";

function NavigationTree({ data }) {
  return (
    <>
      {data.map((item) => (
        <Element key={item.id} data={item} />
      ))}
    </>
  );
}

function Element({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleBoubleClick() {
    setIsOpen((prevStatus) => !prevStatus);
  }

  return (
    <div style={{ marginLeft: "15px" }}>
      <p onDoubleClick={handleBoubleClick} style={{ cursor: "pointer" }}>
        {data.type === "folder" ? (isOpen ? "📂" : "📁") : "📄"}
        {data.name}
      </p>
      {data.children &&
      data.children.length > 0 &&
      isOpen &&
      data.type === "folder" ? (
        <NavigationTree data={data.children} />
      ) : null}
    </div>
  );
}

export default NavigationTree;
