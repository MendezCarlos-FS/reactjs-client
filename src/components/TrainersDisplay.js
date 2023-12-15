import { useEffect } from "react";
import { getTrainers } from "../services/userService";


function TrainersDisplay(props) {
    useEffect(() => {
        getTrainers().then(res => {
            console.log(res);
        });
    });

    return (
        <section>
            Is me :)
        </section>
    );
}
export default TrainersDisplay;