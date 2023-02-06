import React, { useEffect } from "react";
import style from "../Styles/Done.module.css"
import check from "../Assets/check.png"

export const DonePage = () => {
    useEffect(() => {

var xhr = new XMLHttpRequest();
let name = "sefwefewf"
let surname = "wefwef"
var body = 'name=' + encodeURIComponent(name) +
  '&surname=' + encodeURIComponent(surname);

xhr.open("POST", '/submit', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');



xhr.send(body);
    },[])
    return (
        <section className={style.container}>
            <h1>Смена завершена</h1>
            <img src={check}></img>
        </section>
    )
}