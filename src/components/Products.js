import {useState, useEffect} from 'react'
import useFilter from '../hooks/useFilter'

const Products = () => {

    const { products, filters, setFilters } = useFilter()
    const [currentProducts, setCurrentProducts] = useState([])

    useEffect(() => {
        let currentProducts = []
        products.map((product) => {
            filters.map((filter) => {
                if(filter.isSelected && product.tags.indexOf(filter.tag) > -1 ){

                    if(currentProducts.indexOf(product) === -1){
                        let index = currentProducts.indexOf(product)
                        // debugger
                        currentProducts.push(product)
                       
                    }
                   
                }
            })
        })

        if(currentProducts.length > 0){
            setCurrentProducts(currentProducts)
        } else {
            setCurrentProducts(products)
        }
    }, [filters])

    const handleOnClick = (tag) => {
        console.log(tag)
        let newfilters = [...filters]
        newfilters.map((filter) => {
            
            filter.isSelected = false

            if(filter.tag === tag){
                filter.isSelected = true
            } 
        })

        setFilters(newfilters)
    }

    return (
        
        <div className={"Products"}>
            {currentProducts.map((product, index) => (
                
                <div key={index} className={"Product"}>
                    <div>{product.name}</div>
                    <img src={product.image} />
                    <ul className={"Product__tags"}>
                        {product.tags.map((tag, index) => (
                            <li key={index}><button onClick={() => handleOnClick(tag)} >{tag}</button></li>
                        ))}
                    
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Products;