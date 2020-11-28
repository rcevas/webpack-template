/* import "core-js/stable";
import "regenerator-runtime/runtime"; */ //to add polyfill
import './styles/main.scss';
import './assets/webpack.png';
import './views/users.html';

//example ES10
const arr1 = [1, 2, [3, 4, [5, 6]]]
console.log(arr1.flat(2)); // > [1, 2, 3, 4, 5, 6]