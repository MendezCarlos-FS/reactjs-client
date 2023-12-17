function Notification(props) {
    if (props.message) {
        return (
            <section style={styles.container}>
                <h3 style={styles.text}>{props.message}</h3>
            </section>
        );
    }
    
    return (
        <section style={styles.containerHide}>
        </section>
    );
}
export default Notification;

const styles = {
    container: {
        position: "fixed",
        backgroundColor: "#c4c4e4",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "5px",
        left: "10%",
        top: "10px",
        maxWidth: "50%",
    },
    containerHide: {
        display: "none",
    },
    text: {
        marginTop: "4px",
        marginBottom: "4px",
    }
}