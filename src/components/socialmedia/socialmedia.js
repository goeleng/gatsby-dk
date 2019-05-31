import React from "react"
import IconFB from "../imagequeries/icon_fb"
import IconDA from "../imagequeries/icon_da"
import IconIG from "../imagequeries/icon_ig"
import IconP from "../imagequeries/icon_p"
import IconT from "../imagequeries/icon_t"
import IconTU from "../imagequeries/icon_tu"
import IconTW from "../imagequeries/icon_tw"
import IconYT from "../imagequeries/icon_yt"
import style from "./socialmedia.module.sass"

const SocialMedia = () => (
    <div className={style.div}>
        <ul className={style.ul}>
            <li className={style.li}><IconFB /></li>
            <li className={style.li}><IconDA /></li>
            <li className={style.li}><IconIG /></li>
            <li className={style.li}><IconP /></li>
            <li className={style.li}><IconT /></li>
            <li className={style.li}><IconFB /></li>
            <li className={style.li}><IconTU /></li>
            <li className={style.li}><IconTW /></li>
            <li className={style.li}><IconYT /></li>
        </ul>
    </div>
)

export default SocialMedia
