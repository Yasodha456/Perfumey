import React from 'react'

import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

function Items() {
  return (
    <div><div class="products">
               
                <div class="box">
                    
                            <img src={one} alt="one"></img>
                            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
                </div>
                      
                
                <div class="box">
                    <img src={two} alt="two"></img>
                    <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
                </div>
                <div class="box">
                    <img src={three} alt="three"></img>
                    <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume </p>
                </div>
    
                
                
            </div></div>
  )
}

export default Items