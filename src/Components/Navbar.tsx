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
                    <NavLink to="home">
                        <img src={home} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="productList">
                        <img src={document} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="selectedList">
                        <img src={list} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="newProduct">
                        <img src={add} alt="" />
                    </NavLink>
                </li>
            </ul>
        </section>
    )
})