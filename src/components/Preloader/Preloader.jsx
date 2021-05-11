import React from "react";
import s from './Preloader.module.css'

const Preloader = () => {
    return(
        <div className={s.preloader}>
            <div className={s.preloader__image_animate}>
            </div>
        </div>
    )
}

export default Preloader