import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f3dbedc2bb824d3b9a084115b98df9d7'
    }
})