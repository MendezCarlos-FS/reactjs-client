import { useEffect, useState } from "react";
import { getTrainers } from "../services/userService";


function TrainersDisplay(props) {
    const [trainers, setTrainers] = useState([]);

    function mapTrainers() {
        return trainers.map((trainer, index) => {
            return (
                <article key={index} style={styles.trainer}>
                    <h2>{trainer.name}</h2>
                    <h3>Age: {trainer.age}</h3>
                    <h3>Owned Pokemon:</h3>
                    {!trainer.ownedPokemon.length
                        ? <h5 style={styles.noPokemon}>N/A</h5>
                        : (<ul style={styles.pokemonList}>
                            {trainer.ownedPokemon.map(mapPokemon)}
                        </ul>)
                    }
                </article>
            );
        })
    }

    function mapPokemon(pokemon, index) {
        return (
            <li key={index} style={styles.pokemon}>
                <hgroup>
                    <h3 style={styles.pokemonName}>{pokemon.name}</h3>
                    <p style={styles.pokemonDetails}>
                        Level: {pokemon.level}
                        <br/>
                        Shiny: {pokemon.shiny ? "Yes" : "No"}
                    </p>
                </hgroup>
                <h4>Abilities:</h4>
                <ul style={styles.abilityList}>
                    {pokemon.abilities.map(mapAbility)}
                </ul>
            </li>
        ); 
    }

    function mapAbility(ability, index) {
        return (
            <li key={index}>{ability}</li>
        );
    }

    useEffect(() => {
        getTrainers().then(trainers => {
            setTrainers(trainers);
        });
    });

    return (
        <section style={styles.container}>
            {mapTrainers()}
        </section>
    );
}
export default TrainersDisplay;

const styles = {
    container: {
        display: "flex",
        gap: "3px",
        justifyContent: "space-evenly",
        alignItems: "start",
    },
    trainer: {
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
    },
    noPokemon: {
        textAlign: "center",
    },
    pokemonList: {
        listStyleType: "none",
        padding: "5px",
    },
    pokemon: {
        textAlign: "left",
        padding: "5px",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "5px",
    },
    pokemonName: {
        textAlign: "center",
        marginTop: "5px",
        marginBottom: "5px",
    },
    pokemonDetails: {
        marginTop: "5px",
        marginBottom: "5px"
    },
    abilityList: {
        paddingLeft: "20px",
    }
}