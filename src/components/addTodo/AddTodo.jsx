import React, { useState } from 'react'
import './addTodo.css'

const AddTodo = () => {

    // passing states
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')



    // add words logic
    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            { title },

        ])
        setTitle('');


    }
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
                {notes.map((note) => (
                    <div className='todo-Container'>
                        <div key={note.title} className='todo'>
                            <ul className='todo-list'>

                                <li className='todo-item'> {note.title}</li>
                            </ul>

                            <button className='btnRmv' onClick={() => remove(note.title)}>Remove </button>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default AddTodo
