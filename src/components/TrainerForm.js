import { useState } from "react";
import { createTrainer } from "../services/userService";


function TrainerForm(props) {
    const [trainer, setTrainer] = useState({});
    function saveUser($event) {
        $event.preventDefault();
        createTrainer(trainer);
    }

    /**
     * 
     * @param {HTMLSelectElement} selectElement 
     */
    function parseSelectedPokemon(selectElement) {
        const options = Array.from(selectElement.selectedOptions).map(option => {
            return option.value;
        });
        setTrainer({...trainer, ownedPokemon: options});
    }

    return (
        <form style={styles.container} onSubmit={$event => saveUser($event)}>
            <input type="text" placeholder="Name"
                onChange={$event => setTrainer({...trainer, name: $event.target.value})} required/>
            <input type="number" placeholder="Age" min={0}
                onChange={$event => setTrainer({...trainer, age: $event.target.value})}/>
            <select multiple onChange={$event => parseSelectedPokemon($event.target)}>
                <option>Pikachu</option>
                <option>Snorlax</option>
            </select>
            <button type="submit">
                Submit
            </button>
        </form>
    );
}
export default TrainerForm;

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        justifyContent: "start",
        alignItems: "center"
    }
}