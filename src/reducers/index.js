import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import PlanetsReducer from './PlanetsReducer';

const rootReducer = combineReducers({
  login:LoginReducer,
  planets:PlanetsReducer
});

export default rootReducer;
