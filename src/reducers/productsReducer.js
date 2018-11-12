import axios from "axios";

const LOAD_SAVE_DATABASE ="LOAD_SAVE_DATABASE";
const LOAD_FROM_DATABASE = "LOAD_FROM_DATABASE";
const CHANGE_MANUFACTURER = "CHANGE_MANUFACTURER";
const CHANGE_UNIT_NAME = "CHANGE_UNIT_NAME";
const CHANGE_UNIT_COST = "CHANGE_UNIT_COST";
const CHANGE_CHARACTERISTIC = "CHANGE_CHARACTERISTIC";
const CHANGE_PRODUCTTOCHANGE = "CHANGE_PRODUCTTOCHANGE";

const initialState = {
  products: [],
  manufacturer: "",
  unit_name: "",
  unit_cost: "",
  characteristic: "",
  loadingSave: false,
  productToChange:{}
};

export const loadDb = () => dispatch => {
  return axios.get('http://localhost:3001/api/v1/products')
    .then(response => {
      dispatch(fromDatabase(response.data))
    })
    .catch(error => {
      throw(error);
    });
};

export const writeToDb = (man, un, uc, ch) => dispatch => {
  dispatch(loadingSave(true));
  return axios.post('http://localhost:3001/api/v1/products',
  {
    manufacturer: man,
    unit_name: un,
    unit_cost: uc,
    characteristic: ch
  })
    .then(function (response) {
      if(response.data){
        dispatch(loadingSave(false))
      }
      console.log(response);
    })
    .catch(function (error) {
      dispatch(loadingSave(false));
      console.log(error);
    });
};

export const deleteFromDb = id => dispatch => {
  dispatch(loadingSave(true));
  return axios.delete(`http://localhost:3001/api/v1/products/${id}`)
    .then(function (response) {
      if(response.data){
        dispatch(loadingSave(false))
      }
      console.log(response);
    })
    .catch(function (error) {
      dispatch(loadingSave(false));
      console.log(error);
    });
};

export const updateInDb = (id, manufacturer, unit_name, unit_cost, characteristic) => dispatch => {
  dispatch(loadingSave(true));
  return axios({
    method: 'put',
    url: `http://localhost:3001/api/v1/products/${id}`,
    data:{
      "manufacturer": manufacturer,
      "unit_name": unit_name,
      "unit_cost": unit_cost,
      "characteristic": characteristic
    }
  })
    .then(function (response) {
      if(response.data){
        dispatch(loadingSave(false));
        dispatch(changeProductToChange({}));
      }
      console.log(response);
    })
    .catch(function (error) {
      dispatch(loadingSave(false));
      console.log(error);
    });
};

export const loadingSave = (value) => ({
  type: LOAD_SAVE_DATABASE,
  value
});



export const fromDatabase = (products) => ({
  type: LOAD_FROM_DATABASE,
  products
});

export const changeManufacturer = (manufacturer) => ({
  type: CHANGE_MANUFACTURER,
  manufacturer
});

export const changeUnitName = (unit_name) => ({
  type: CHANGE_UNIT_NAME,
  unit_name
});

export const changeUnitCost = (unit_cost) => ({
  type: CHANGE_UNIT_COST,
  unit_cost
});

export const changeCharacteristic = (characteristic) => ({
  type: CHANGE_CHARACTERISTIC,
  characteristic
});

export const changeProductToChange = (productToChange) => ({
  type: CHANGE_PRODUCTTOCHANGE,
  productToChange
});

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FROM_DATABASE:
      return Object.assign({}, state, {
        products: action.products
      });
    case CHANGE_MANUFACTURER:
      return Object.assign({}, state, {
        manufacturer: action.manufacturer
      });
    case CHANGE_UNIT_NAME:
      return Object.assign({}, state, {
        unit_name: action.unit_name
      });
    case CHANGE_UNIT_COST:
      return Object.assign({}, state, {
        unit_cost: action.unit_cost
      });
    case CHANGE_CHARACTERISTIC:
      return Object.assign({}, state, {
        characteristic: action.characteristic
      });
    case LOAD_SAVE_DATABASE:
      return Object.assign({}, state, {
        loadingSave: action.value
      });
    case CHANGE_PRODUCTTOCHANGE:
      return Object.assign({}, state, {
        productToChange: action.productToChange
      });
    default:
      return state;
  }
};

export default productsReducer;