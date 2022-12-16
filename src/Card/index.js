import React, { createFactory } from "react";
import product_Mobile from "./images/image-product-mobile.jpg";
import product_Desktop from "./images/image-product-desktop.jpg";

import { BsCart3 } from "react-icons/bs";

import "./index.css"
function Card(){
    return(
        
        <div className="content-card">
            <div className="div-content-img-product">
                <section>
                <img src={product_Mobile} className="img-product-mobile"></img>
                <img src={product_Desktop} className="img-product-desktop"></img>

                </section>
            </div>
           
            <div className="div-info-product-content">

            <section className="section-Info">
                <p className="p-Perfume-text">
                    PERFUME
                </p>
            </section>

            <section className="section-Info">
                <h1 className="h1-Card-info">
                    Grabrielle Essence Eau De Parfum
                </h1>
            </section>
            
            <section className="section-Info">
                <h2 className="text-p-h2">
                    A floral, solar and voluptuous  
                    interpretation composed by olivier 
                    polge, Perfumer-Creator for the house of  
                    CHANEL.
                </h2>
            </section>

            <section className="section-Info section-Price">
                <p className="primary-price">
                    $149.99
                </p>
                <p className="descount-price">
                    $169.99
                </p>
            </section>

            <section className="section-Info">
                <button className="button-Add">
                  <div className="div-button">
                    <BsCart3 className="BsCart3"/>
                    <p className="p-button">
                        Add to Cart
                    </p>
                  </div>  
                </button>
            </section>
                
            </div>
            
        </div>
    )
}

export {Card}