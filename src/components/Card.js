import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'

function Card({title,imageSource,url}) {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
        <div className='overflow'>
        <img src={imageSource} alt="" className='card-img-top'/>
        </div>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            {/* <p className='card-texto text-secondary'>descripcion</p> */}
            <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank" rel="noreferrer">
                CLICK

            </a>
        </div>
    </div>
  )
}  
// aca lo que dice proptypes es que obliga a poner en titulo url image lo que corresponda
// para que no se rompa  y no de errores

Card.propTypes={
    title:PropTypes.string.isRequired,
    url:PropTypes.string,
    imageSource:PropTypes.string
}
export default Card
        
        
        
        
