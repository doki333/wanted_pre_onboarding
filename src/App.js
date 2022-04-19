import "./App.css";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <Toggle />
      <Tab />
      {/* <Slider /> */}
      {/* <Input /> */}
      <Dropdown />
    </div>
  );
}

export default App;
