// for add items to cart

export function addCART(product) {
    return {
        type: "ADDITEM",
        payload: product
    };

}

// for delete items from cart
export const delCART = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }

};