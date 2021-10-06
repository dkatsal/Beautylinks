/**
 *
 * AboutUs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Link } from 'react-router-dom';
import makeSelectAboutUs from './selectors';
import reducer from './reducer';
import saga from './saga';
import aboutImg from '../../images/about-us.jpg';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
export class AboutUs extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Helmet>
          <title>AboutUs</title>
          <meta name="description" content="Description of AboutUs" />
        </Helmet>
        <section>
          <div className={classes.topBox}>
            <div className={classes.breadCrumbsBox}>
              <Link to="/" className={classes.breadCrumbsLink}>
                Главная
              </Link>
              <span> / </span>
              <span style={{ fontWeight: 700 }}>Наша история</span>
            </div>
            <h2 className={classes.title}>Наша история</h2>
          </div>
          <div className={classes.container}>
            <p>В эпоху диджитализации всех сфер бизнеса бьюти-индустрия не исключение.</p>
            <p><strong>BeautyLinks</strong> — это онлайн-сервис поиска услуг бьюти-индустрии, который был разработан как для клиентов, так и для специалистов и салонов красоты. Зачем? Чтобы:</p>
            <p>- расширить возможности клиентов при поиске и выборе услуг;</p>
            <p>- упростить ведение бизнеса специалистам и салонам красоты;</p>
            <p>- сделать удобнее поиск специалистов людям, которые ценят свое время и деньги;</p>
            <p>- упростить поиск нужных услуг в срочных и нестандартных ситуациях;</p>
            <p>- дать полную информацию о специалисте или салоне, возможность посмотреть реальные отзывы и наличие необходимых сертификатов, а также фото работ.</p>
            <p>Всего в несколько кликов клиент может найти нужные услуги в своем районе, выбрать место, узнать стоимость, и что самое главное — оплатить услугу онлайн, без звонков и записей по телефону.</p>
            <figure className={classes.figureLeft}>
              <img src={aboutImg} alt="About us" />
            </figure>
            <p>Если Вы находитесь не в своем городе или у Вас срочная встреча и нет возможности быстро посетить своего специалиста, но Вы боитесь довериться непроверенным людям, BeautyLinks — это решение всех проблем одновременно.</p>
            <p>Теперь все доступные салоны, кабинеты и мастера красоты будут в вашем смартфоне с указанной локацией на карте,  реальными отзывами, фото работ и без лишних звонков и ожидания записи. Сделайте это сами в несколько кликов. Кроме того, если услуга не будет оказана по вине специалиста —мы вернем Вам деньги</p>
            <p>Специалистам и салонам красоты наша платформа дает полный сервис по выходу и продвижению своего бизнеса в онлайн. Вам не потребуется тратить финансы и время на создание своего сайта, оплачивать его рекламу и продвижение, пользоваться сторонними сервисами и программами. Вы получите доступ к новой аудитории без вложений.</p>
            <p>Создание учетной записи на нашей платформе позволит вашим клиентам узнавать об оказываемых услугах и делать онлайн запись, видеть ваши работы, заходить на ваш профиль и читать реальные отзывы. BeautyLinks содержит клиентскую базу,  которой Вы можете предложить свои услуги без стартовых вкладов, и в отличие от непрофильных сайтов и сервисов, вся наша аудитория — целевая.</p>
            <p>Вы получаете электронный кабинет, календарь с расписанием, где сможете сами указывать часы работы, выходные дни, локацию, возможность выезда на дом, и прочий широкий спектр настроек, что ощутимо упростит запись к Вам. Также это сэкономит время, которое раньше тратилось на записи по телефону. Чем проще клиентам будет записаться к вам, тем больше они будут это делать.</p>
            <p>Онлайн-оплата упрощает Вам ведение бизнеса, и гарантирует минимизацию потерь от неприходов и переносов. При этом Вам не понадобятся дополнительные устройства или системы для принятия платежей, что ощутимо упростит работу и обезопасит Вас и Ваших клиентов.</p>
          </div>
        </section>
      </>
    );
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  aboutUs: makeSelectAboutUs(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'aboutUs', reducer });
const withSaga = injectSaga({ key: 'aboutUs', saga });

const AboutUsStyled = withStyles(styles)(AboutUs);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AboutUsStyled);
