/**
 *
 * Header
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import { makeSelectGlobal } from '../../../containers/App/selectors';
import * as actions from '../../../containers/App/actions';
import HeaderTop from '../HeaderTop/Loadable';
import styles from './styles';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.categoryMenuClose = React.createRef();
    this.state = {isScrolled : false}
  }

  onScroll = () => {
    // setIsScrolled(!!window.scrollY);
    this.setState({isScrolled: window.scrollY > 0})
  };

  componentDidMount() {
    window.addEventListener('scroll', () => this.onScroll());
    window.addEventListener("touchmove", () => this.onScroll());
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.onScroll());
    window.removeEventListener('touchmove', () => this.onScroll());
  }

  handleAddress = value => {
    this.props.setFilterAddressAction(value);
  };

  handleSelectItem = () => {
    document.getElementById('userTriger').click()
    this.categoryMenuClose.current && this.categoryMenuClose.current.click();
  };

  render() {
    const {
      classes,
      categories,
      isUserLogged,
      global: {
        user,
        // eslint-disable-next-line camelcase
        address,
      },
      dispatch,
    } = this.props;

    return (
      <>
        <input type="checkbox" hidden id="topMenuTriger" />
        <input type="checkbox" hidden id="searchTriger" />
        <input type="checkbox" hidden id="sidebarTriger" />
        <input type="checkbox" hidden id="filterTriger" />
        <input type="checkbox" hidden id="userTriger" />
        <header className={classes.header}>
          <HeaderTop
            isUserLogged={isUserLogged}
            user={user.data}
            dispatch={dispatch}
            handleAddress={this.handleAddress}
            /* eslint-disable-next-line camelcase */
            address={address ? address.formatted_address : { display_name: '' }}
            handleSelectItem={this.handleSelectItem}
          />
          <menu
            className={`${classes.menuWrap} ${this.state.isScrolled && classes.pageScrolled}`}
            // style={{top: this.state.isScrolled ? '107px' : '131px'}}
          >
            {categories.data &&
              _.map(categories.data, (item, index) => (
                <NavLink
                  to={{
                    pathname: `/service/${item.slug}`,
                    state: { title: item.name },
                  }}
                  key={index}
                  className={classes.link}
                  activeClassName={classes.activeLink}
                  onClick={() => document.getElementById('topMenuTriger').click()}
                >
                  {item.short_name}
                </NavLink>
              ))}
            <NavLink
              to={{
                pathname: `/service/all`,
                state: { title: "Все категории" },
              }}
              key="all"
              className={classes.link}
              activeClassName={classes.activeLink}
              onClick={() => document.getElementById('topMenuTriger').click()}
            >
              Все
            </NavLink>
          </menu>
        </header>
      </>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
  isUserLogged: PropTypes.bool,
  dispatch: PropTypes.func,
  setFilterAddressAction: PropTypes.func,
  global: PropTypes.object,
  categories: PropTypes.object,
};

const HeaderStyled = withStyles(styles)(Header);

export default connect(
  () =>
    createStructuredSelector({
      global: makeSelectGlobal(),
    }),
  dispatch => ({
    changeThemeAction: bindActionCreators(actions.changeThemeAction, dispatch),
    setFilterAddressAction: bindActionCreators(actions.setFilterAddressAction, dispatch),
    dispatch,
  }),
)(HeaderStyled);
