import React from 'react';
import Header from './header';
import styles from '../../styles/home.css';
import {getPlanets} from '../actions/planetActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BubbleChart from './BubbleChart';
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.getPlanets = this.getPlanets.bind(this);
  }

  getPlanets(event) {
    if(event.target.value.length) {
      this.props.getPlanets(event.target.value)
    }
  }
  componentWillMount() {
    if(this.props.login == 'FAILURE') {
      this.props.history.push('/')
    }
  }
  render() {
    return <div className={styles.home}>
    <Header getPlanets={this.getPlanets}/>
    <BubbleChart planets={this.props.planets}/>
    </div>
  }
}
function mapStateToProps(state) {
 return {planets:state.planets,login:state.login}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({getPlanets:getPlanets},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Home)
