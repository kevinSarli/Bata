import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Item = ({ prod }) => {
  //   let pricefinal = product.price - (product.price*product.discount/100)
  return (
    <>
            <article key={prod.id} className="containercard ">
              <a href="#">
                <div className="containerimg">
                  <div className="boximage"><img
                  className="product"
                  src={prod.image}
                  alt="imagen"
                />
                </div>

                <div className="detalles">
                  <h4 className="titlecard ">{prod.name}</h4>
                  <p
                    className={prod.discount !== 0 ? "pricecard2" : "pricecard"}
                  >
                    {prod.price}$
                  </p>
                  {prod.price - (prod.price * prod.discount) / 100 !==
                    prod.price && (
                    <p className="pricefinal">
                      {prod.discount !== 0 &&
                        prod.price - (prod.price * prod.discount) / 100}
                      $
                    </p>
                  )}
                  <p className="colorcard">c</p>
                  {prod.discount !== 0 && (
                    <p className="discountcard">{prod.discount}%</p>
                  )}
                </div>
                </div>
              </a>
            </article>
    </>
  );
};

export default Item;
