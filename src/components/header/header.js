import React from "react"
import Navigation from "../navigation/navigation"
import SocialMedia from "../socialmedia/socialmedia"
import style from "./header.module.sass"
import ImageLogo from "../imagequeries/image_logo";
import ImageDeborah from "../imagequeries/image_deborah";

const Header = () => (
  <div>
    <div className={style.headerdiv}>
      
      <div className={style.headerdiv__text}>
        <h2 className={style.name}>Deborah Kopanitsak</h2>
        <div className={style.logo}><ImageLogo></ImageLogo></div>
        <SocialMedia/>
      </div>
      <div className ={style.headerdiv__image}><ImageDeborah></ImageDeborah></div>
    </div>
    
  </div>
)

export default Header