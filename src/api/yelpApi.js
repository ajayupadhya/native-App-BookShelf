import axios from "axios";


export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    header : {
        Authorization : 'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiarolzlqUjwkA7nVxnWzryiTwfDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQ0nYFjLozpYnZQx-UsXXyx '
    }
})