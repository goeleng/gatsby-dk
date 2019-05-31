import React from 'react'
import { Link } from "gatsby"
import style from "./navigation.module.css"

const Navigation = () => (
    <div>
        <ul className={style.ul}>
            <li className={style.li}><Link to="/">Willkommen</Link></li>
            <li className={style.li}><Link to="/">Über mich</Link></li>
            <li className={style.li}><Link to="/">Portfolio</Link></li>
            <li className={style.li}><Link to="/">Veranstaltungen</Link></li>
            <li className={style.li}><Link to="/">Kontakt</Link></li>
        </ul>
    </div>
)

export default Navigation