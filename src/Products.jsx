import React from 'react'
import Product from './Product'

function Products() {
    const products = [
       {id:1,title:'product1',desc:'this is product one'},
       {id:2,title:'product2',desc:'this is product two'},
       {id:3,title:'product3',desc:'this is product three'},
       {id:4,title:'product4',desc:'this is product four'},
    ];
  return (
    <section className="products mt-4">
    <div className="container">
        <div className="row text-center">
           {
            products.map (
                (product) => (
                    <Product key={product.id} {...product}/>
                )
            )
           }
        </div>
    </div>
</section>
  )
}

export default Products