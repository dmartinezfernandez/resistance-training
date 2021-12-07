import Report from "./components/Report";
import Calculator from "./components/Calculator";
import Form from "./components/Form";

function App() {
  return (
    <div>

      {/* RM Table */}
      {<Report></Report>}

      {/* RM Form */}
      <Form></Form>

      {/* 1RM Calculator */}
      <Calculator></Calculator>

    </div>
  );
}

export default App;
