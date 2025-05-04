import React from 'react'
function CardItem(props) {
  return (
    <>
    <li className="cards__item">
        <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="" className='cards__item__img' />
        </figure>
        <div className="cards__item__info">
            <h5 className="cards__item__title">{props.title}</h5>
            <p className="cards_item_text">{props.text}</p>

        </div>
    </li>
    </>
  )
}
export default CardItem;


