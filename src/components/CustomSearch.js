import React, { useEffect, useState, useRef } from 'react'
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

    const useOutsideAlerter = ref => {
        useEffect(() => {
            const handleClickOutside = event => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);
    }
    
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div>
            <div className="search-container">
                <button className="search-btn"><Search/></button>
                <input onClick={handleClick} type="search" className="search-feild"/>
            </div>

                <ul ref={wrapperRef} className={(open? "showListContainer" : "") + " listContainer"}>
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
