import React from "react"
import Card from './Card'

import img1 from '../assets/imagen1.jpeg'
import img2 from '../assets/React.jpg'
import img3 from '../assets/imagen3.jpg'


const cards = [
    {
        id:1,
        title:'Libreria para programadores',
        image:img1,
        url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
    },
    {
        id:2,
        title:'Todo sobre React',
        image:img2,
        url:'https://react.dev/learn/react-developer-tools'
    },
    {
        id:3,
        title:'Para usar CSS',
        image:img3,
        url:'https://www.shutterstock.com/es/explore/latam-stock-assets-1121?gad=1&gclid=CjwKCAjwrranBhAEEiwAzbhNtT-hGgJvOkYCMeVxTo__n9u9XwLhZFKWZTi1QXcVo5NwXzN0uScsthoCR88QAvD_BwE&gclsrc=aw.ds&kw=imagenes%20para%20descargar&kw=imagenes%20para%20descargar'
    }
]

function Cards() {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
         <div className="row">
            {
                cards.map(card=>(
                    <div className="col-md-4" key={card.id}>
                <Card title={card.title} imageSource={card.image} url={card.url}/>
         </div>  
            ))
            }
           </div>
        </div>
    )
}
export  default Cards





            
            
            
