import RMTable from "./RMTable";
import QueryString from "../model/QueryString";

function Report() {
    const data = QueryString;

    return (data.isValid &&
        <section>
            <RMTable exercises={data.exercises} precision={data.precision}></RMTable>
            <br />
        </section>);
}

export default Report;