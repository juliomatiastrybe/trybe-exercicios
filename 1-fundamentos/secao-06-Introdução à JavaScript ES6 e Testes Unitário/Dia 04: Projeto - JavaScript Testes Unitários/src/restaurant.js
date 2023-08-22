/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => {
    const menuObject = {
        fetchMenu: () => menu,
        consumption: [],
        order: (menuOrder) => {
            const arrayMenu = Object.values(menuObject.fetchMenu());
            // console.log(arrayMenu);
            const keysArray = Object.keys(arrayMenu[0]).concat(Object.keys(arrayMenu[1]));
            // console.log(keysArray);
            if (keysArray.includes(menuOrder)) {
                menuObject.consumption.push(menuOrder);
                // console.log(menuObject);
            } else {
                return 'Item indisponível';
            }
        },
        pay: () => {
            let totalPay = 0;
            const requests = menuObject.consumption;
            const arrayMenu = Object.values(menuObject.fetchMenu());
            const entriesMenu = Object.entries(arrayMenu[0]).concat(Object.entries(arrayMenu[1]));
            // console.log(requests);
            // console.log(arrayMenu);
            // console.log(entriesMenu);
            for (let index = 0; index < entriesMenu.length; index += 1) {
                // console.log(entriesMenu[index][0]);
                const itemName = entriesMenu[index][0];
                // console.log(itemName);
                const itemPrice = entriesMenu[index][1];
                // console.log(itemPrice);

                const itemCount = requests.filter((item) => item === itemName).length;
                // console.log(itemCount);
                totalPay += itemPrice * itemCount;
                // console.log(totalPay);
            }
            return totalPay * 1.10;
        },

    };
    return menuObject;
};
// console.log(typeof Object.values(createMenu()));
// console.log(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu()));
// const menu = createMenu({ food: {}, drinks: {} });
// const menu = createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 },
//     drinks: { agua: 3.90, cerveja: 6.90 } });
// console.log(menu);
// const keyMenu = Object.keys(menu.fetchMenu());
// console.log(keyMenu);
// console.log(createMenu({ food: {}, drinks: {} }).fetchMenu());
// const recoverMenu = menu.fetchMenu();
// console.log(recoverMenu);
// const foods = Object.values(recoverMenu);
// console.log(foods);
// console.log(Object.keys(foods[1]));
// menu.order('sanduiche');
// menu.order('coxinha');
// menu.order('cerveja');
// menu.order('coxinha');
// menu.order('agua');
// menu.order('cerveja');
// console.log(menu);
// console.log(menu.order('agua'));
// menu.order('xablau');
// console.log(menu.order('xablau'));
// console.log(menu);
// console.log(menu.pay());
module.exports = createMenu;