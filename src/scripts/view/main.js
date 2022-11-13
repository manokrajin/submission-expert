import data from '../../DATA.json';
import '../component/restaurant-list.js';

const main = () => {

    const restaurantListElement = document.querySelector('restaurant-list')
    const render = () => {
        restaurantListElement.restaurants = data.restaurants
        console.log(data.restaurants)
    }

    render();

}
export default main;