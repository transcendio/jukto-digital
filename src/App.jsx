import Routes from "routes";
import StateProvider from "store/provider";

function App() {
  return (
    <StateProvider>
      <Routes />
    </StateProvider>
  );
}

export default App;
