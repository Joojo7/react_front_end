import React, { memo } from "react";
import { Link } from "react-router-dom";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link
          className={props.linkClass ? props.linkClass : "cards__item__link"}
          to={props.path}
        >
          <figure
            className={
              props.picWrapClass ? props.picWrapClass : "cards__item__pic-wrap"
            }
            data-category={props.label}
          >
            <img
              src={props.src}
              alt="Travel Image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item_info">
            {props.hotelStars ? (
              <Rater total={5} rating={props.hotelStars} />
            ) : null}
            <h5 className="cards__item__text">{props.text} </h5>
            {props.roomPrice ? (
              <h3 className="cards__item__price text-right">
                <i class="fas fa-dollar-sign"></i>
                {props.roomPrice}
              </h3>
            ) : null}
          </div>
        </Link>
      </li>
    </>
  );
}

CardItem.propTypes = {};

export default CardItem;
