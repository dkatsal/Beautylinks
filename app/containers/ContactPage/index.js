/**
 *
 * ContactPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/Loadable';
import makeSelectContactPage from './selectors';
import { postContactUsAction } from './actions';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import logoImg from '../../img/logo.svg';
import mapImg from '../../images/map.png';
import vkImg from '../../img/icons/vk-dark.svg';
import fbImg from '../../img/icons/fb-main.svg';
import instImg from '../../img/icons/inst-main.svg';

/* eslint-disable react/prefer-stateless-function */
export class ContactPage extends React.PureComponent {
  render() {
    const { classes, postContactUs } = this.props;
    return (
      <>
        <Helmet>
          <title>Beautylinks / Contact</title>
          <meta name="description" content="Description of ContactPage" />
        </Helmet>
        <div className={classes.topBox}>
          <div className={classes.breadCrumbsBox}>
            <Link to="/" className={classes.breadCrumbsLink}>
              Главная
            </Link>
            <span> / </span>
            <span style={{ fontWeight: 700 }}>Контакты</span>
          </div>
          <Link to="/" className={classes.logo}>
            <img src={logoImg} alt="Beauty links" />
          </Link>
          <p className={classes.topBoxDscr}>Команда разработчиков будет рада услышать ваши пожелания, а также оперативно отреагирует на уточнения и неисправности</p>
        </div>
        <div className={classes.container}>
          <h3 className={classes.mapTitle}>Контакты для связи</h3>
          <ContactForm handleSubmit={postContactUs} />
          <div className={classes.mapBox}>
            {/*<iframe className={classes.mapImg} width="100%" height="40%"
                    src="https://maps.google.com/maps?q=Sumska+St,+1+Kharkiv+Kharkivs%27ka+oblast+61000&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>*/}
            <div className={classes.mapText}>
              {/* <p className={classes.mapLabel}> </p>
              <p className={classes.mapDesc}>Lorem Ipsum is simply</p> */}
              <div className={classes.mapRow}>
                <p className={classes.mapLabel}>Поддержка: </p>
                <p className={classes.mapDesc}>support@beautylinks.com</p>
              </div>
              <div className={classes.mapRow}>
                <p className={classes.mapLabel}>Сотрудничество: </p>
                <p className={classes.mapDesc}>sales@beautylinks.com</p>
              </div>
              <div className={classes.mapRow}>
                <p className={classes.mapLabel}>Social: </p>
                <p className={classes.soclinks}>
                  {/* <Link to="/lol" style={{ color: '#fff', fontSize: 26, marginRight: 15 }}>
                    <img src={vkImg} alt="Vkontakte" />
                  </Link> */}
                  <Link to="//www.facebook.com/BeautyLinks-105507814246830/?modal=admin_todo_tour" target="_blank" style={{ color: '#fff', fontSize: 26, marginRight: 15 }}>
                    <img src={fbImg} alt="Facebook" />
                  </Link>
                  <Link to="//www.instagram.com/beautylinks_official/" target="_blank" style={{ color: '#fff', fontSize: 26 }}>
                    <img src={instImg} alt="Instagramm" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ContactPage.propTypes = {
  classes: PropTypes.object,
  postContactUs: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  contactPage: makeSelectContactPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    postContactUs: bindActionCreators(postContactUsAction, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'contactPage', reducer });
const withSaga = injectSaga({ key: 'contactPage', saga });

const ContactPageStyled = withStyles(styles)(ContactPage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactPageStyled);
