import React, { memo } from "react";
import { Link } from "react-router-dom";

function ServicePanelItem(props) {
  return (
    <>
      <li className="service__item">
        <Link className="service__item__link" to={props.path}>
        <img
              src={props.src}
              alt="Service Icon"
              className="service__item__img"
            />
          <div className="service__item_info">
            <h5 className="service__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

ServicePanelItem.propTypes = {};

export default ServicePanelItem;
