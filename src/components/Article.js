import React from "react";

export default function Article({title, date = "January 1, 1970", preview, time}){
    // const timeToRead = time.map(minutes => {
    //     if(minutes < 30){
    //         return minutes
    //     }
    // })
    let timePop = ""
    const tea = "☕️"
    const bento = "🍱"
    if(time < 30){
        timePop = ` ☕️ ${time}`
    }else if(time >= 30){
        timePop = ` 🍱 ${time}`
    }
    console.log(time)
     return(
        <article>
            <h3>{title}</h3>
            <small>{date} · {timePop}</small>
            <p>{preview}</p>
        </article>
    )
}