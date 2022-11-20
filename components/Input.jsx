import style from '../styles/Input.module.css'
import { useState } from 'react'
export default function Input() {
    const [note, setNote] = useState({'title': '', 'note': ''})
    
    return (
        <>
            <section className={style.section}>
                <header className={style.header}>
                    <nav>
                        <input type="text" placeholder="Title" className={style.titleInput} onInput={(e) => setNote({'title': e.target.value, 'note': note.note})}/>
                    </nav>
                </header>
                <hr />
                <input type="text" className={style.inputNote} onInput={(e) => setNote({'title': note.title, 'note': e.target.value})}/>
            </section>
        </>
    )
}