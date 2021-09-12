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
            {open?
                <ul className="loc-container position-absolute" style={{top: '5rem', right: '2rem', background:'white', borderRadius: '5px', padding: '0'}}>
                {locations.map(loc => (
                    <LocItem
                        country={loc.country.fname}
                        state={loc.state.fname}
                        location={loc.location}
                    />
                ))}
            </ul>
            :null}
        </div>
    )
}

const mapStateToProps = state => ({
    locations: state.Locations.locations
})

export default connect(mapStateToProps,{getLocations})(CustomSearch)
