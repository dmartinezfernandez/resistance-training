import RMTable from "./RMTable";
import Calculator from "./Calculator";

function App() {
  const exercises = [
    { name: 'Squat', rm1: 140 },
    { name: 'Bench Press', rm1: 100 }
  ];

  return (
    <div>

      {/* RM Table */}
      {exercises.length > 0 &&
        <RMTable exercises={exercises} precision={0.25}></RMTable>
      }
      <br />

      {/* RM Form */}

      {/* 1RM Calculator */}
      <Calculator></Calculator>

    </div>
  );
}

export default App;
