import Report from "./components/Report";
import Calculator from "./components/Calculator";
import Form from "./components/Form";

function App() {
  const exercises = [
    { name: 'Squat', rm1: 140 },
    { name: 'Bench Press', rm1: 100 }
  ];

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
