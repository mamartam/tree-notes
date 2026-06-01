const initialNotesData = [
  {
    id: "1",
    name: "Learning React",
    type: "folder",
    children: [
      {
        id: "2",
        name: "Components.txt",
        type: "file",
        content: "Recursive components are components that call themselves...",
      },
      {
        id: "3",
        name: "Hooks.txt",
        type: "file",
        content:
          "useState allows you to store state, while useEffect manages side effects.",
      },
    ],
  },
  {
    id: "4",
    name: "Personal",
    type: "folder",
    children: [
      {
        id: "5",
        name: "Shopping List.txt",
        type: "file",
        content:
          "Buy milk, bread, cheese, and definitely something sweet for making progress in React!",
      },
    ],
  },
];
export default initialNotesData;
