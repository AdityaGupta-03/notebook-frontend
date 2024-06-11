import notesContext from "./notesContext.js";

const notesState = (props) => {
    const state = {
        "name": "Aditya",
        "age": 20
    }

    return (
        <notesContext.Provider value={state}>
            {props.children}
        </notesContext.Provider>
    )
}

export default notesState;