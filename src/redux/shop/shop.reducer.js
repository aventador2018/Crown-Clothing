import SHOP_DATA from './shop.data';

const INITIAL_STATION = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATION, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;