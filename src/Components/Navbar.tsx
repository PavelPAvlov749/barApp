import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Styles/Navbar.module.css"
//Assets imports
import home from "../Assets/home.png"
import list from "../Assets/list.png"
import document from "../Assets/document.png"
import add from "../Assets/plus.png"

export const Navbar = React.memo(() => {
    return (
        <section className={style.navbarContainer}>
            <ul>
                
                <li>
                    <NavLink className={style.nav} to="productList">
                        <img src={document} alt="" />
                        
                        <span>Список</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={style.nav} to="selectedList">
                        <img src={list} alt="" />
                        
                        <span>В работе</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={style.nav} to="newProduct">
                        <img src={add} alt="" />
                        
                        <span>Добавить</span>
                    </NavLink>
                </li>
            </ul>
        </section>
    )
})