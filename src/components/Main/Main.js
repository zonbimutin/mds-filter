import React, {useState, useEffect} from 'react'
import './Main.scss'

import FilterContext from '../../context/FilterContext'

import Nav from '../Nav'
import Products from '../Products'

const Main = () => {

    const [filters, setFilters] = useState(undefined)
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('/products.json')
        .then(response => response.json())
        .then(data => setProducts(data.items));
       
    }, [])

    useEffect(() => {
        let filters = []
        let preFilters = []
        products.map((product) => {

            if(product.tags){
                product.tags.map((tag) => {
                    if(preFilters.indexOf(tag) === -1){
                        preFilters.push(tag);
                    }
                })
            }
        })
        if(preFilters.length > 0){
            preFilters.map((tag) => {
                filters.push({tag:tag, isSelected: false})
            })
        }
        
        console.log(filters)
        setFilters(filters)
    }, [products])

    useEffect(() => {
        
    }, [filters])

    const value = {products, setProducts, filters, setFilters}

    return (
        <FilterContext.Provider value={value}>
            <Nav/>
            <Products/>
        </FilterContext.Provider>
    )
}

export default Main
