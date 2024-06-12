import React, { useState } from 'react';
import NotesContext from './NotesContext';

const NotesState = (props) => {
    // const s1 = {
    //     "name": "Aditya",
    //     "age": 18
    // }
    // const [state, setState] = useState(s1);

    // const update = ()=>{
    //     setTimeout(() => {
    //         setState(prevState => ({...prevState, age: 25}))
    //     }, 1000);
    // }

    // const changeName = ()=>{
    //     setTimeout(() => {
    //         setState(prevState => ({...prevState, name: "Addy"}))
    //     }, 1000);

    // }

    const host = "localhost:5000/api/notes";

    const initialNotes = [
        {
            "_id": "6669b0abc074a0fe305217a4",
            "user": "666827070bb290a7ad4e7e64",
            "title": "Shopping",
            "description": "Buy Tomatoes, Dhaniya",
            "tag": "General",
            "date": "2024-06-12T14:28:59.572Z",
            "__v": 0
        },
        {
            "_id": "6669b0b9c074a0fe305217a6",
            "user": "666827070bb290a7ad4e7e64",
            "title": "Cutting",
            "description": "Got to Hair Saloon",
            "tag": "General",
            "date": "2024-06-12T14:29:13.859Z",
            "__v": 0
        },
        {
            "_id": "6669b0cfc074a0fe305217a8",
            "user": "666827070bb290a7ad4e7e64",
            "title": "Market",
            "description": "Buy Milk Bread",
            "tag": "General",
            "date": "2024-06-12T14:29:35.978Z",
            "__v": 0
        }
    ];
    const [notes,setNotes] = useState(initialNotes);

    const getNotes = async ()=>{
        // API Call: To get all the notes
        const url = `${host}/fetchNotes`;
        const response = await fetch(url, {
            method: "GET", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjYwMzgzNjk2YjAyYjc3ZTlmZDUxYSIsImlhdCI6MTcxNzk2MTY5MH0.C19Xe3YRfm44iJyN0qWglmg8doj9dREJWmauSGKoHSk"
            },
        });
        const json = await response.json();
        console.log(json);
    }

    const addNote = async (title, description, tag) => {
        // API Call: To Add a note
        const url = `${host}/newNote`;

        const response = await fetch(url, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjYwMzgzNjk2YjAyYjc3ZTlmZDUxYSIsImlhdCI6MTcxNzk2MTY5MH0.C19Xe3YRfm44iJyN0qWglmg8doj9dREJWmauSGKoHSk"
            },
            body: JSON.stringify({title,description,tag}), 
        });
        const json = response.json();

        const newNote = {
            "_id": "6669b0abc074a0fe305217a4",
            "user": "666827070bb290a7ad4e7e64",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-06-12T14:28:59.572Z",
            "__v": 0
        }
        // setNotes([...notes, newNote]);
        setNotes(notes.concat(newNote));
    }

    const deleteNote = async (id) => {
        // API Call: To Delete a Note
        const noteID = "66660645fbfa5e1c79cd5358";
        const url = `${host}/deleteNote/${noteID}`;

        const response = await fetch(url, {
            method: "DEL", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjYwMzgzNjk2YjAyYjc3ZTlmZDUxYSIsImlhdCI6MTcxNzk2MTY5MH0.C19Xe3YRfm44iJyN0qWglmg8doj9dREJWmauSGKoHSk"
            },
            body: JSON.stringify(notes), 
        });
        const json = response.json();

        setNotes(notes.filter(note => note._id!== id));
    }

    const editNote = async (id, title, description, tag) => {
        // API Call: To Edit a note
        const noteID = "66660645fbfa5e1c79cd5358";
        const url = `${host}/updateNote/${noteID}`;

        const response = await fetch(url, {
            method: "PUT", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjYwMzgzNjk2YjAyYjc3ZTlmZDUxYSIsImlhdCI6MTcxNzk2MTY5MH0.C19Xe3YRfm44iJyN0qWglmg8doj9dREJWmauSGKoHSk"
            },
            body: JSON.stringify(notes), 
        });
        const json = response.json();

        setNotes(notes.map(note => {
            if(note._id === id){
                note.title = title;
                note.description = description;
                note.tag = tag;
            }
            return note;
        }));
    }

    return (
        // <NotesContext.Provider value={{state:state, updateAge:update, updateName:changeName}}>
        <NotesContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesState;