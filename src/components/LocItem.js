import { Clear, Edit } from '@material-ui/icons'
import React from 'react'
import { connect } from 'react-redux'
import { getLocation } from '../Redux/action/locationAction'

const LocItem = ({country, state, location, getLocation}) => {

    return (
        <li className="loc-item" style={{listStyle: 'none', padding: '.5rem .7rem', width: '17rem', display: 'flex', justifyContent: 'space-between'}}>
            <div onClick={() => getLocation(location)}>{country},{state}...</div>
            {/* <div>
                <button className="delete-btn"><Clear/></button>
                <button className="edit-btn"><Edit/></button>
            </div> */}
        </li>
    )
}

export default connect(null,{getLocation})(LocItem)
