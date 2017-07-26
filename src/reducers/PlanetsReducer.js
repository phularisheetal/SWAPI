const PlanetsReducer = (state=[],action)=> {
  switch(action.type) {
    case 'LOADING':return 'LOADING';
    case 'SUCCESS' :return action.payload;
    case 'ERROR' :return 'FAILURE';
    default: return [];
  }
}

export default PlanetsReducer;
