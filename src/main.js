import './style.css';

import products from "../api/products.json";
import { showProductContainer } from "./homeProductCards";


// define the function name `showProductContainer` that takes an array of products as input
showProductContainer(products);