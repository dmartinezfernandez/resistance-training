import Essentials from "../model/Essentials";
/** @typedef {import("../model/Exercise").default} Exercise */

/**
 * RM Table component
 * @param {Object} props
 * @param {Exercise[]} props.exercises - Exercises
 * @param {number | string} props.precision - Precision
 */
function RMTable(props) {
    const precision = Number(props.precision);
    const decimals = !isNaN(precision) && !Number.isInteger(precision) ?
        precision.toString().split('.')[1].length : 0;
    const round = function (value) {
        let x = Math.round(value / precision) * precision;
        x = parseFloat(x.toFixed(decimals));
        return x;
    }
    const background = (factor) => {
        if (factor > 0.85) {
            return {
                'background-color': 'var(--strength-color)'
            };
        }
        else if (factor === 0.85) {
            return {
                'background-image': 'linear-gradient(var(--strength-color), var(--hypertrophy-color))'
            };
        }
        else if (factor > 0.67) {
            return {
                'background-color': 'var(--hypertrophy-color)'
            };
        }
        else if (factor === 0.67) {
            return {
                'background-image': 'linear-gradient(var(--hypertrophy-color), var(--undefined-color))'
            };
        }
        else {
            return {
                'background-color': 'var(--undefined-color)'
            }
        }
    };

    return (
        <div>
            <table class="numeric-table">
                <tr>
                    <th>Load</th>
                    <th>RM</th>
                    {props.exercises.map((exercise) => <th><i>{exercise.name}</i></th>)}
                </tr>
                {Essentials.data.map(rm =>
                    <tr>
                        <td style={background(rm.factor)}>{rm.factor * 100} %</td>
                        <td>{rm.reps}</td>
                        {props.exercises.map((exercise) =>
                            <td>{round(exercise.rm1 * rm.factor)}</td>)}
                    </tr>)}
            </table>
            <small class="darker">Precision = {precision}</small><br />
        </div>);
}

export default RMTable;