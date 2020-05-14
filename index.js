const redux = require("redux");
const logger = require("redux-logger").createLogger()
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

// Actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
// ActionCreator - Action creater is a function which returns a action

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}

// why do we create actions with action creator.

// Application state is represented by object
const initialCakeState = {
  numberOfCakes: 5,
};

const initialIcecreamState = {
  numberOfIceCream: 10
}

// Reducer Function
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      return state;
  }
};
// combineReducers accepts an Object
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log("State updated!!!", store.getState());
});

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe();