import axios from "axios";

const url = "https://furniture-cart-react-app.herokuapp.com/";

const fetchCartItems = () => axios(url);

export { fetchCartItems };
