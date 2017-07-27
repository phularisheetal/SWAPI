import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPersonDetail} from '../actions/index';
import styles from '../../styles/login.css';

class Login extends React.Component {

    constructor(props) {
      super(props);
      this.getUserDetails = this.getUserDetails.bind(this);
    }

    componentWillReceiveProps(nextProps){
      if(this.props.login !== nextProps.login) {
        debugger
        if(nextProps.login == 'SUCCESS') {
          console.log('abc')

            this.props.history.push('/home')
        }else if(nextProps.login == 'FAILURE'){
          this.props.history.push('/')

        }
      }

    }
    getUserDetails() {
      this.props.getPersonDetail(this.refs.username.value,this.refs.password.value)
    }
    render() {

      if(this.props.login == 'LOADING'){
        return <div>Loading...</div>
      }
      return <div className={styles.login}>
            <h3>Login</h3>
          <div className={styles.loginForm}>
            <input type="text" ref="username" placeholder="USERNAME"/>
            <input type="password" ref="password" placeholder="PASSWORD"/>
            <button onClick={this.getUserDetails}>Login</button>
          </div>
      </div>
    }
}

function mapStateToProps(state) {
 return {login:state.login}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({getPersonDetail:getPersonDetail},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Login)
