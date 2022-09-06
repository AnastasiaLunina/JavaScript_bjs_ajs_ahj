const goods = [
    {
        id: '12',
        name: 'shirt',
        description: 'cotton shirt',
        sizes: ['xs', 's', 'm'],
        price: 20,
        available: true,
    },
    {
        id: '34',
        name: 'dress',
        description: 'silk dress',
        sizes: ['xs', 's', 'm'],
        price: 200,
        available: true,
    },
    {
        id: '56',
        name: 'skirt',
        description: 'linen skirt',
        sizes: ['xs', 's', 'm'],
        price: 150,
        available: true,
    },
    {
        id: '78',
        name: 'jeans',
        description: 'flare jeans',
        sizes: ['xs', 's', 'm'],
        price: 70,
        available: true,
    },
    {
        id: '91',
        name: 'pants',
        description: 'costume pants',
        sizes: ['xs', 's', 'm'],
        price: 100,
        available: true,
    },

];

let shoppingСart = [
    
];

const goodsIndex = [goods[0], goods[1], goods[2], goods[3], goods[4],];

shoppingСart.addItem = function(goodsIndex, amount) {
    this.push({
        item: goodsIndex,
        amount: amount,
    })
}

shoppingСart.removeItem = function(goodsIndex, amount) {
    for(let i = 0; i < this.length; i++) {
        if (this[i].item == goodsIndex) {
            if (amount >= this[i].amount) {
                this.splice(i, 1);
                return;
            } 
            this[i].amount -= amount;
        }    
    }
}

shoppingСart.clear = function() {
    this.splice(0, this.length);
}

shoppingСart.getTotal = function(goods) {
    result = {
        totalAmount: 0,
        totalSum: 0,
    }

    for(let each of this) {
        result.totalAmount += each.amount;
        result.totalSum += goods[each.item].price * each.amount;
    }
    return result;
}

function checkShoppingCart(shoppingСart, goods) {
    shoppingСart.addItem(0, 7);
    shoppingСart.addItem(1, 4);
    shoppingСart.removeItem(0, 5);
    shoppingСart.addItem(2, 2);
    shoppingСart.removeItem(2, 1);
    console.log(shoppingСart)
    console.log(shoppingСart.getTotal(goods));
    shoppingСart.clear();
    console.log(shoppingСart.getTotal(goods));
}

checkShoppingCart(shoppingСart, goods);