function TrainersDisplay(props) {
    function mapTrainers() {
        return props.trainers.map((trainer, index) => {
            return (
                <article key={index} style={styles.trainer}>
                    <div style={styles.trainerHeader}>
                        <h2 style={styles.trainerName}>{trainer.name}</h2>
                        <button type="button" onClick={() => props.dltTrainer(trainer.name)}>X</button>
                    </div>
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
    trainerName: {
        textAlign: "center",
    },
    trainerHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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