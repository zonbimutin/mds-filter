import {useEffect, useState} from "react";
import useFilter from '../hooks/useFilter'

const Nav = () => {

    const {filters, setFilters} = useFilter()
    const [data, setData] = useState(['toto', 'titi']);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.documentElement.style.setProperty('--menu-transform', 'var(--menu-transform-' + (open ? 'open' : 'closed') + ')');
    }, [open]);

    const handleOnClick = (filter) => {
        let newfilters = [
            ...filters
        ]

        if(newfilters.indexOf(filter) > -1 ){
            newfilters[newfilters.indexOf(filter)].isSelected = !newfilters[newfilters.indexOf(filter)].isSelected
        }
       
        setFilters(newfilters)
    }

    return (

        <nav className={'Nav'}>
            <div className={'Nav__content'}>
                <button className={"burger"} onClick={() => setOpen(value => !value)}>M</button>
                <ul>
                    {filters && filters.map((filter, index) => (
                        <li key={index}><button onClick={() => handleOnClick(filter)} className={"Filter " + (filter.isSelected ? 'Filter--active' : '')} >{filter.tag}</button></li>
                    ))}
                   
                </ul>
            </div>
        </nav>
    )
}

export default Nav;