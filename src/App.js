import { CardList } from "./components/CardList/CardList";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        fontSize: 30,
        color: "#010101",
      }}
    >
      <CardList />
    </div>
  );
}

export default App;
