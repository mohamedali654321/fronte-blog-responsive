import React from 'react'
import ProductResource from './Products/ProductResource/ProductResource'
import Navigation from './Products/Navigation/Navigation'
import SearchBar from './Products/SearchBar/SearchBar'
import Learn from './Products/Learn/Learn'
import Community from './Products/Community/Community'
import ChangeLog from './Products/ChangeLog/ChangeLog'

import './Products.css'

function Products() {
    return (
        <div class="productContainer">
         <SearchBar/>
          <div class="productWrapper productInnerWrapper">
            <div class="productCenterContainer">
           
               
               
                 
                  <Navigation/>
                  <div class="productCenterWrapper">

                          <ProductResource/>
                          <Learn/>
                          <ChangeLog/>
                          <Community/>












                          

                  

                 
                


              


             





















                



                
                  </div>  
            </div>
          </div>
        </div>
    )
}

export default Products
