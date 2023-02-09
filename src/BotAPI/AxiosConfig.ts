

import axios from "axios";

const TOKEN = "0970946509:AAHLHwNh6wIAbFVrvbHWQwh9-uh8Xo0H8TU";
const CHAT_ID = "-787827581"
const MESSAGE = "Tets webApp message"
const instance = axios.create(
    {
        withCredentials:true,
        baseURL: `https://api.telegram.org/bot${TOKEN}/`,
        headers:{
            
        }
    }
);

export const TelegramAPI = {
    sendMessage : () => {
        instance.post(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${MESSAGE}`).then((response) => {
            console.log(response)
        })
    }
}