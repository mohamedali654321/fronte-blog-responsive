import React,{useEffect,useState} from 'react'
import axios from 'axios'

import LeftProduct from './KwareProduct/LeftProduct/LeftProduct'
import ProductHero from './ProductHero/ProductHero'

function Products() {

  
  const [products,setProducts]=useState([])

  useEffect(()=>{

axios.get('http://54.220.211.123:1335/products')
.then(res=>{
  setProducts(res.data)
})
.catch(err=>{console.log(err)})

  },[])

    return (
      <div>
      <ProductHero/>

        {
                    products.map((product, index)=>(

                        <LeftProduct
                            title={product.name}
                            slogan={product.slogan}
                            description={product.body}
                            url={product.url}
                            index={index}
                        />


                    ))
                }

      </div>
      
    )
}

export default Products
