import React from 'react'
import { connect } from 'react-redux'
import { getLocation } from '../Redux/action/locationAction'

const LocItem = ({country, state, location, getLocation}) => {

    return (
        <li className="listItems">
            <div onClick={() => getLocation(location)}>{country},{state}...</div>
        </li>
    )
}

export default connect(null,{getLocation})(LocItem)
