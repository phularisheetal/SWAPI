import axios from 'axios';

function InvalidLogin() {
  return {
    type:'INVALID',
    payload:'FAILURE'
  }
}

function Valid() {
  return {
    type:'VALID',
    payload:'SUCCESS'
  }
}

function Loading() {
  return {
    type:'LOADING',
    payload:'LOADING'
  }
}

export const getPersonDetail = (pname,ppwd) => {
  return (dispatch) => {
        dispatch(Loading());
        axios.get('https://swapi.co/api/people/?search='+pname)
            .then((response) => {
              
                if(response.data.results[0].birth_year == ppwd) {
                  dispatch(Valid());
                }else {
                  dispatch(InvalidLogin())
                }
            })
            .catch((err) => {dispatch(InvalidLogin())});
    };
}
