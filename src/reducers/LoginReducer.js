const LoginReducer = (state="",action)=> {
  switch(action.type) {
    case 'LOADING':return 'LOADING';
    case 'VALID' :return 'SUCCESS';
    case 'INVALID' :return 'FAILURE';
    default: return 'FAILURE';
  }
}

export default LoginReducer;
