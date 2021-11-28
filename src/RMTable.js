function RMTable() {
    let exercise_name, rm_reps, $ctrl_precision, rm_factor, $ctrl_round = (_) => undefined, exercise_rm1;

    /*

     */
    return (
        <div ng-if="$ctrl.hasData">
            <table class="numeric-table">
                <tr>
                    <th>Load</th>
                    <th>RM</th>
                    <th ng-repeat="exercise in $ctrl.exercises"><i>{exercise_name}</i></th>
                </tr>
                <tr ng-repeat="rm in $ctrl.rmData">
                    <td ng-style="{{$ctrl.background(rm.factor)}}">{rm_factor * 100} %</td>
                    <td>{rm_reps}</td>
                    <td ng-repeat="exercise in $ctrl.exercises">{$ctrl_round(exercise_rm1 * rm_factor)}</td>
                </tr>
            </table>
            <small class="darker">Precision = {$ctrl_precision}</small>
        </div>);
}

export default RMTable;