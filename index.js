/**
 * Infinite Flight Live API
 */

// import libs
import axios from 'axios'

/**
 * Infinite Flight Live API
 */
class IFLiveAPI {

  constructor({ apiKey }) {

    this.apiKey = apiKey

    this.apiUrl = `http://infinite-flight-public-api.cloudapp.net/v1/`

    this.endpoints = {
        getSessionInfo: `GetSessionsInfo.aspx`,
        flights: `Flights.aspx`,
        flightDetails: `FlightDetails.aspx`,
        getATCFacilities: `GetATCFacilities.aspx`,
        userDetails: `UserDetails.aspx`,
        getFlightPlans: `GetFlightPlans.aspx`,
    }

    this.axios = axios
}

  getSessionInfo = () => {

  }

  flights = () => {

  }

  flightDetails = () => {

  }

  getATCFacilities = () => {

  }

  userDetails = () => {

  }

  getFlightPlans = () => {
      
  }
}

export default IFLiveAPI