import request from '../services/axiosMethods'

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
  return request({url:'http://localhost:3001/api/v1/products'})
    .then(response => {
      dispatch(fromDatabase(response.data))
    })
    .catch(error => {
      throw(error);
    });
};

export const writeToDb = (manufacturer, unit_name, unit_cost, characteristic) => dispatch => {
  dispatch(loadingSave(true));
  return request({ url: '/products', method: 'POST', data: { manufacturer, unit_name, unit_cost, characteristic } })
    .then(response => {
      if(response.data){
        dispatch(loadingSave(false))
      }
    })
    .catch(error => {
      dispatch(loadingSave(false));
      throw(error);
    });
};

export const deleteFromDb = id => dispatch => {
  dispatch(loadingSave(true));
  return request({ url:`/products/${id}`, method: 'DELETE' })
    .then(response => {
      if(response.data){
        dispatch(loadingSave(false))
      }
    })
    .catch(error => {
      dispatch(loadingSave(false));
      throw(error);
    });
};

export const updateInDb = (id, manufacturer, unit_name, unit_cost, characteristic) => dispatch => {
  dispatch(loadingSave(true));
  return request({ url: `/products/${id}`,  method: 'PUT', data: { manufacturer, unit_name,unit_cost, characteristic } })
    .then(response => {
      if(response.data){
        dispatch(loadingSave(false));
        dispatch(changeProductToChange({}));
      }
    })
    .catch(error => {
      dispatch(loadingSave(false));
      throw(error);
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