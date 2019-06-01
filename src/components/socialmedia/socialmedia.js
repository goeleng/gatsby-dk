import React from "react"
import IconFB from "../imagequeries/icon_fb"
import IconDA from "../imagequeries/icon_da"
import IconIG from "../imagequeries/icon_ig"
import IconT from "../imagequeries/icon_t"
import IconTU from "../imagequeries/icon_tu"
import IconTW from "../imagequeries/icon_tw"
import IconYT from "../imagequeries/icon_yt"
import style from "./socialmedia.module.sass"

const SocialMedia = () => (
    <div className={style.div}>
        <ul className={style.ul}>
            <li className={style.li}><a href="https://twitter.com/DKopanitsak"><IconTW /></a></li>
            <li className={style.li}><a href="https://www.facebook.com/TheArtOfDeborahKopanitsak/"><IconFB /></a></li>
            <li className={style.li}><a href="https://www.instagram.com/deborahkopanitsak/"><IconIG /></a></li>
            <li className={style.li}><a href="https://www.youtube.com/channel/UCF6HQAA3kOt15M-sMK3Ua5A"><IconYT /></a></li>
            <li className={style.li}><a href="https://www.twitch.tv/kopanitsak"><IconT /></a></li>
            <li className={style.li}><a href="https://www.deviantart.com/kopanitsak"><IconDA /></a></li>  
            <li className={style.li}><a href="http://www.toonsup.com/kopanitsak"><IconTU /></a></li>    
        </ul>
    </div>
)

export default SocialMedia
