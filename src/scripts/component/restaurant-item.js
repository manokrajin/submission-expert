class RestaurantItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }

                .restaurant-img {
                    max-width: 100%;
                    border-radius: 2em 2em 0 0;
                    border-bottom: 1px solid black;
                    object-fit: contain;
                }

                .restaurant-details {
                    width: 100%;
                    padding: 16px;
                }

                .img-container{
                    max-width:100%;
                    max-height:100%;
                }

                .restaurant-rating {
                    gap: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    margin-bottom: 8px;
                }

                .restaurant-rating img {
                    width: 15px;
                    heigth: 15px;
                }

                :host {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    border-radius: 32px;
                    box-shadow: 5px 5px 15px grey;
                    border: 1px solid black;
                }

                @media screen and (min-width: 768px) {
                    h2 {
                        font-size: 18px;
                    }

                    p {
                        font-size: 12px;
                    }
                  }

            </style>
                <p>hai</p>
            
        `
    }
}
customElements.define('restaurant-item', RestaurantItem)