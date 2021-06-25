import React, { useState } from 'react'
import './addTodo.css'

const AddTodo = () => {

    // passing states
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')




    // add words logic
    const addNote = (e) => {
        e.preventDefault()
        // add the text in notes array
        setNotes([
            ...notes,
            { title },

        ])
        // clear the input after the add
        setTitle('');


    }
    // remove the list element
    const remove = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    return (

        //add the data in the list
        <div>

            <div className='inputDiv'>
                <h2 className='titleTodo'>ToDo's List</h2>
                <form onSubmit={addNote}>
                    <input className='addInput' value={title} onChange={(e) => setTitle(e.target.value)} />

                    <div>
                        <button className='btnAdd'  >Add </button>
                    </div>

                </form>
                // after the click on add button the data come in the note array, after that map function showing the all add data dynamically
                {notes.map((note) => (
                    <div className='todo-Container'>
                        <div key={note.title} className='todo'>
                            <ul className='todo-list'>

                                <li className='todo-item'> {note.title}</li>
                            </ul>
                // when we click on the remove button this calls the remove function. this function filter the data and remove the selected list
                            <button className='btnRmv' onClick={() => remove(note.title)}>Remove </button>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default AddTodo
