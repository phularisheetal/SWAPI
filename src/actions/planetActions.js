import axios from 'axios';

function Error() {
  return {
    type:'ERROR',
    payload:'FAILURE'
  }
}

function Success(data) {
  return {
    type:'SUCCESS',
    payload:data
  }
}

function Loading() {
  return {
    type:'LOADING',
    payload:'LOADING'
  }
}

export const getPlanets = (pname) => {
  return (dispatch) => {
        dispatch(Loading());
        axios.get('https://swapi.co/api/planets/?search='+pname)
            .then((response) => {
                  dispatch(Success(response.data.results));

            })
    };
}
