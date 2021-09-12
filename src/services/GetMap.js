import Mapir from "mapir-react-component";

export const Map = Mapir.setToken({
    transformRequest: url => {
      return {
        url: url,
        headers: {
          "x-api-key": `${process.env.REACT_APP_MAP_API}`, //Mapir api key
          "Mapir-SDK": "reactjs"
        }
      };
    }
  });