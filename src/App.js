import './App.css';
import Header from "./components/Header"
import Form from "./components/Form"
import FormTwo from "./components/FormTwo"
import DataTable from "./components/DataTable"

function App() {
    return(
      <div className="App">
        <Header />
        <Form />
        <FormTwo />
        <DataTable />
      </div>
    );
}

export default App;