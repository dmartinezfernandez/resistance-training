import Precision from "./Precision";

const QueryString = (
    function () {
        const exercises = [];
        const params = new URLSearchParams(window.location.search);
        const param1 = params.get("exercises");
        const param2 = params.get("1rm");
        const param3 = params.get("precision");

        if (param1 != null && param2 != null) {
            const split1 = param1.split(",").map(item => item.trim());
            const split2 = param2.split(",").map(item => item.trim()).map(Number);
            if (split1.length && split1.length === split2.length) {
                for (let i = 0; i < split1.length; i++) {
                    exercises.push({
                        name: split1[i],
                        rm1: split2[i]
                    });
                };
            }
        }

        const precision = Precision.parse(param3);

        return {
            exercises,
            precision,
            isValid: exercises.length > 0,
            params: {
                exercises: param1,
                rm1: param2,
                precision: param3
            }
        };
    }());

export default QueryString;