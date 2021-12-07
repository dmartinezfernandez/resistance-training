import { useState } from 'react';
import RMTable from "./RMTable";
import Essentials from '../model/Essentials';
import Precision from '../model/Precision';

/**
 * 1RM Calculator component
 */
function Calculator() {
    const [load, setLoad] = useState(undefined);
    const [reps, setReps] = useState(undefined);
    const rm1 = Essentials.calc1RM(load, reps);
    const showRMTable = !isNaN(rm1);
    const exercises = [{ name: 'Calc.', rm1: rm1 }];
    return <section>
        <details>
            <summary>1RM Calculator</summary>
            <br />
            <label>Load: </label><br />
            <input type="text" value={load} placeholder="Enter load here" onChange={(e) => setLoad(e.target.value)} /><br />
            <label>Repetitions: </label><br />
            <input type="text" value={reps} placeholder="Enter repetitions here" onChange={(e) => setReps(e.target.value)} /><br />
            {showRMTable &&
                <RMTable exercises={exercises} precision={Precision.default}></RMTable>
            }
        </details >
    </section>;
}

export default Calculator;