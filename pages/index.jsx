import style from '../styles/Home.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { TbEdit } from 'react-icons/tb'
import Link from 'next/link'
export default function Home() {
  return (
    <>
        <header className={style.header}>
          <AiOutlineMenu className={style.menuIcon}/>
        </header>
        <div>
            <h1 className={style.title}>All Notes</h1>
            <p className={style.subTitle}>notes</p>
        </div>
        <div>
          NotesList
        </div>
        <Link href="/create">
            <div className={style.createNote}>
                <TbEdit className={style.createNoteIcon}/>
            </div>
        </Link>
    </>
  )
}
