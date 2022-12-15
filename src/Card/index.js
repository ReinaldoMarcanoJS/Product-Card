import React, { createFactory } from "react";
import product_Mobile from "./image-product-mobile.jpg";
import { BsCart3 } from "react-icons/bs";

import "./index.css"
function Card(){
    return(
        
        <div className="content-card">

            <section>
                <img src={product_Mobile} className="img-product"></img>
            </section>

            <section className="section-Info">
                <p className="p-Perfume-text">
                    PERFUME
                </p>
            </section>

            <section className="section-Info">
                <h1 className="h1-Card-info">
                    Grabrielle Essence <br/> Eau De Parfum
                </h1>
            </section>
            
            <section className="section-Info">
                <h2 className="text-p-h2">
                    A floral, solar and voluptuous <br/> 
                    interpretation composed by oliver <br/>
                    polge, Perfumer-Creator for the house of <br/> 
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
    )
}

export {Card}