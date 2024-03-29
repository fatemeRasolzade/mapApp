import React from "react";
import { connect } from "react-redux";
import Mapir from "mapir-react-component";
import CustomSearch from "./components/CustomSearch";
import { Map } from "./services/GetMap";
import marker from "./assets/img/marker.png"

const App = ({location}) => {

  return (
    <div>
      <div className="position-fixed w-100 h-100" style={{top: '0', left: '0'}}>
        <Mapir center={location ? [location.longitude, location.latitude] : [51.42047, 35.729054]} Map={Map} >
          {location &&
            <Mapir.Marker
              coordinates={[location.longitude, location.latitude]}
              anchor="bottom"
              Image={marker}
            />
          }
        </Mapir>
      </div>
        <CustomSearch/>

    </div>
  );
};

const mapStateToProps = state => ({
  location: state.Locations.location
})

export default connect(mapStateToProps)(App);