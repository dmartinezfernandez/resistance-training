import { useState } from 'react';
import Precision from '../model/Precision';
import QueryString from '../model/QueryString';

function Form() {
    const [exercises, setExercises] = useState(QueryString.params.exercises);
    const [rm1, setRM1] = useState(QueryString.params.rm1);
    const [precision, setPrecision] = useState(QueryString.precision);

    const submit = (e) => {
        e.preventDefault();
        window.location = window.location.origin + window.location.pathname + "?exercises=" + exercises + "&1rm=" + rm1 + "&precision=" + precision;
    }

    return <section>
        <details>
            <summary>Query</summary>

            <br />
            <label>Exercises:</label><br />
            <input type="text" placeholder="Enter comma separated exercises here" style={{ width: '100%' }}
                value={exercises} onChange={e => setExercises(e.target.value)} />
            <label>1RM:</label><br />
            <input type="text" placeholder="Enter comma separated 1RM values here" style={{ width: '100%' }}
                value={rm1} onChange={e => setRM1(e.target.value)} /><br />
            <label>Precision:</label><br />
            <select value={precision} onChange={e => setPrecision(e.target.selectedOptions[0].value)}>
                {Precision.values.map(value => <option value={value}>{value}</option>)}
            </select><br />
            <br />
            <a href="." onClick={(e) => submit(e)}>Submit</a><br />
            Enter comma separated exercises and 1RM values, then click submit and add the new URL to your browser bookmarks.
        </details>
        <br />
    </section >;
}

export default Form;