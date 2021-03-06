import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux'
import ProcessBar from '../ProcessBar'
import styles from './index.scss'

class Header extends Component {
  render() {
    const {state} = this.props
    return (
      <div className={styles.header}>
        <ProcessBar width={state.processBarWidth} transition={state.processTransition} />
        <ul>
          <h1>Quick React</h1>
          <li>
            <IndexLink to="/" activeClassName="_menuActive">Home</IndexLink>
          </li>
          <li>
            <Link to="/counter" activeClassName="_menuActive">Counter</Link>
          </li>
          <li>
            <Link to="/uikit" activeClassName="_menuActive">UIkit</Link>
          </li>
          <li>
            <Link to="/form" activeClassName="_menuActive">Form</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(state => ({state: state.Header}))(Header)
