import axios from "axios"

export const getLocations = () => async (dispatch) => {

    // let data = {
        // internal : filters.internal
    // }

    return await axios(`http://172.16.1.56:8000/offices/office/`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('Authorization')
        },
        data : JSON.stringify()
        })
        .then(res=>{
          dispatch({type: 'GET_LOCATIONS', payload: res.data.offices})
        })
        .catch(error=>{
          return []
        })
}

export const getLocation = (location) => dispatch => {
  dispatch({type: 'GET_LOCATION', payload: location})
}