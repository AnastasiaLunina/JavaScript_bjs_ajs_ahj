class Goods {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }

    setAvailable(value) {
        this.available = value;
    }
}

class BasketGood extends Goods {
    constructor(id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available);
        this.amount = amount;
    }
}

class GoodsList {
    #goods
    constructor(filter, sortPrice, sortDir) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    get list() {
        const resultList = this.#goods.filter(value => this.filter.test(value.name));

        if (!this.sortPrice) {
            return resultList;
        }

        if (this.sortDir) {
                return resultList.sort((initial, following) => (initial.price - following.price));
            }
        return resultList.sort((initial, following) => (following.price - initial.price));
    } 

    add(good) {
        this.#goods.push(good);
    }

    remove(id) {
        const getIndex = this.#goods.findIndex(value => value.id === id);
        if (getIndex != undefined) {
            this.#goods.splice(getIndex, 1);
        }
        return getIndex;
    }
}

class Basket {
    constructor() {
        this.goods = [];
    }

    get totalAmount() {
        return this.goods.map(item => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }

    get totalSum() {
        return this.goods.reduce((previousValue, currentValue) => previousValue + currentValue.amount * currentValue.price, 0);
    }

    add(good, amount) {
        let index = this.goods.findIndex(value => value.id === good.id);
        if (index >= 0) {
            this.goods[index].amount += amount;
        } else {
            let addGood = new BasketGood(good.id, good.name, good.description, good.sizes, good.price, good.available, amount);
            this.goods.push(addGood);
        }
    }

    remove(good, amount) {
        let index = this.goods.findIndex(value => value.id === good.id);
        if (index >= 0) {
            if (this.goods[index].amount - amount <= 0 || amount === 0) {
                this.goods.splice(index, 1);
            } else {
                this.goods[index].amount -= amount;
            }
        } 
    }

    clear() {
        this.goods.length = 0;
    }

    removeUnavailable() {
        this.goods.filter(item => item.available === false).forEach(value => this.remove(value));
    }
}

const first = new Goods(1, 'Jeans', 'Slim jeans', [24, 25, 26], 30, true);
const second = new Goods(2, 'Skirts', 'Silk skirt', ['s', 'm', 'l'], 20, true);
const third = new Goods(3, 'Dress', 'Mini dress', ['s', 'm', 'l'], 40, true);
const fourth = new Goods(4, 'Heels', 'High heels', [36, 37, 38], 50, true);
const fifth = new Goods(5, 'Jackets', 'Biker jacket', ['m', 'l', 'xl'], 100, true);

second.setAvailable = false;
third.setAvailable = false;

// console.log(`Setting avaliability to false: `, second, third)

const catalog = new GoodsList(/Dress/i, true, false);

catalog.add(first);
catalog.add(second);
catalog.add(third);
catalog.add(fourth);
catalog.add(fifth);

// console.log(`Add items to catalog:`, catalog.list);

catalog.filter = /s/i;

catalog.sortPrice = true;
catalog.sortDir = false;
console.log(`Sorting by price in descending order:`, catalog.list);

catalog.remove(4);
// console.log(`Removing item from catalog:`, catalog.list);

const basket = new Basket();

basket.add(first, 1);
basket.add(second, 2);
basket.add(third, 3);
basket.add(fourth, 4);
basket.add(fifth, 5);

console.log(`Total items in shopping cart: ${basket.totalAmount}`);
console.log(`Total sum for ${basket.totalAmount} items in a cart is: $${basket.totalSum}`);

basket.remove(second, 1);
basket.remove(third, 2);

basket.removeUnavailable();

basket.clear();
