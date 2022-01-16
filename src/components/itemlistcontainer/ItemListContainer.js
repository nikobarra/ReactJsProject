import React from "react";
import image1 from "../../assets/img/golosinas1.jpg";
import ItemCount from "../ItemCount/ItemCount"

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={image1} alt="Golosinas" />
            <div className="card-body">
              <h4 className="card-title text-primary"> {greeting} </h4>
              <p className="card-text text-secondary">
                {" "}
                lorem ipsum dolor sit am
              </p>
              <ItemCount stock ={5} initial ={1}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
