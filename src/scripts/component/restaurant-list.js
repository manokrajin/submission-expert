import './restaurant-item'
class RestaurantList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set restaurants(restaurants) {
        this._restaurants = restaurants;
        this.render();
    }


    render() {
        this.shadowDOM.innerHTML = `
        <style>
            :host {
                display: grid;
                margin: 32px 16px;
                gap: 5em;
                grid-template-columns: repeat(3, 225px);
                justify-content: center;
                
            }

            @media screen and (min-width: 320px) {
                :host {
                    grid-template-columns: repeat(1, 225px);
                    gap: 2.5em;
                }
            }

            @media screen and (min-width: 375px) {
                :host {
                    grid-template-columns: repeat(1, 225px);
                    gap: 2.5em;
                }
            }

            @media screen and (min-width: 425px) {
                :host {
                    grid-template-columns: repeat(1, 225px);
                    gap: 2.5em;
                }
            }

            @media screen and (min-width: 768px) {
                :host {
                    grid-template-columns: repeat(3, 225px);
                    gap: 2em;
                }
            }

            @media screen and (min-width: 1024px) {
                :host {
                    grid-template-columns: repeat(3, 225px);
                    gap: 7.5em;
                }
            }

        </style>
        `
        this._restaurants.forEach(restaurant => {
            const itemContentElement = document.createElement('restaurant-item');
            itemContentElement.restaurant = restaurant;
            this.shadowDOM.appendChild(itemContentElement);
        });
    }
}

customElements.define("restaurant-list", RestaurantList);