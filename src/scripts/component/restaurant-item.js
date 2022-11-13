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
                .restaurant-item {
                    display: flex;
                    padding: 8px;
                    border-bottom: 1px solid #ccc;
                }
                .restaurant-item > img {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 8px;
                }
                .restaurant-item > .restaurant-info {
                    margin-left: 18px;
                }
                .restaurant-item > .restaurant-info > h2 {
                    font-size: 24px;
                    margin-top: 0;
                }
                .restaurant-item > .restaurant-info > p {
                    margin-top: 8px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 10;
                    -webkit-box-orient: vertical;
                }
            </style>
            <div class="restaurant-item">
            <div class="img-container">
            <img class="restaurant-img" src="${this._restaurant.pictureId}" alt="${this._restaurant.id}">
        </div>
        <div class="restaurant-details">
            <h2>${this._restaurant.name}</h2>
            <p>${this._restaurant.city}</p>
            <hr><br>
            <p>${this._restaurant.description.slice(0, 200)} <b>(Show more...)</b></p>
        </div>
            </div>
        `;
    }
}

customElements.define("restaurant-item", RestaurantItem);
