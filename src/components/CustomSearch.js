import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Search } from "@material-ui/icons";
import { getLocations } from '../Redux/action/locationAction';
import LocItem from './LocItem';

const CustomSearch = ({locations, getLocations}) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        initLocations()
    }, [])

    const initLocations = async () => {
        await getLocations()
    }

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className="search-container">
                <button className="search-btn"><Search/></button>
                <input onClick={handleClick} type="search" className="search-feild"/>
            </div>
            
                <ul className={(open? "showListContainer" : "") + " listContainer"}>
                {locations.map(loc => (
                    <LocItem
                        country={loc.country.fname}
                        state={loc.state.fname}
                        location={loc.location}
                    />
                ))}
            </ul>
            
        </div>
    )
}

const mapStateToProps = state => ({
    locations: state.Locations.locations
})

export default connect(mapStateToProps,{getLocations})(CustomSearch)
