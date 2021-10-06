/**
 *
 * CookiesPolicy
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
import makeSelectCookiesPolicy from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
export class CookiesPolicy extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Helmet>
          <title>Cookies Policy</title>
          <meta name="description" content="Description of CookiesPolicy" />
        </Helmet>
        <section>
          <div className={classes.topBox}>
            <div className={classes.breadCrumbsBox}>
              <Link to="/" className={classes.breadCrumbsLink}>
                Главная
              </Link>
              <span> / </span>
              <span style={{ fontWeight: 700 }}>Политика использования файлов cookie</span>
            </div>
            <h2 className={classes.title}>Положення про использование COOKIES «BeautyLinks OÜ»</h2>
            <p>(по формальному официальному договору - оферти )</p>
          </div>
          <div className={classes.container}>
            <p>Дане положительного ответа на использование COOKIE «BeautyLinks OÜ» и дочернего сайту beautylinks.com.</p>
            <p>«BeautyLinks OÜ» за собою право воспользоваться данным положением. Дана версія актуальна, останні зміні датовані 1.04. 2020 г.</p>
            <p>COOKIES необязательные для того, чтобы иметь доступ к свого служебного регистратора и для повсеместного использования функціоналу веб-сайту</p>
            <h2 className={classes.title}>Що таке ПЕЧЕНЬЕ</h2>
            <p>Большое количество веб-сайтов, яків відвідуфте, сканирование файлов cookie, для покращения роботу-пользователей, дозволяючи этих веб-сайту запомнить свой протягиватель (трехвалентный файл) в вашем архиве (исходный файл исходных данных для «исходных файлов cookie» в архиве файлов cookie в архиве «исходных файлов cookie», cookie »).</p>
            <p>Файл cookie - это простой текстовый файл, который отображается на вашем компьютере в процессе просмотра веб-сайту, якого файла и информации о вашем веб-сайту. Кожне печенье унікальне для вашегоого. Він буде напишите деяку анонімну інформацію, так как як мобильный ідентифікатор, назва веб-сайту та деякі цифры и цифры. Эта дозировка веб-сайту запрограммирована на эти речи, чтобы вы могли упаковать ваш кошелек для покупателя.</p>
            <p>Файли cookie не являются программами, тем не менее, не можуть написать отрывок из этой программы забезпечений.</p>
            <p>Библиотека веб-браузеров загружена с помощью файлов cookie файлов cookie для просмотра файлов cookie, позволяющих просматривать файлы cookie самостоятельно через менеджер файлов cookie вашегоого. Для цього ласка, дотримуйтесь інструкцій веб-. Зарегистрируйтесь, чтобы включить файлы cookie на вашем сеансе, в этом случае автоматический просмотр и возможность использования нашего веб-сайта и функций, которые могут быть переданы вам.</p>
            <p>Нижче ми детально описуємо файли cookie, що використовуються на нашому веб-сайті. Якщо ви бажаєте відмовитись від файлів печенье, які збирають інформацію для розміщення оголошень на основі інтересів , ви можете відмовитися, натиснувши тут або якщо ви знаходитесь за межами Європейського Союзу , тут натисніть https://optout.networkadvertising.org/?c=1 .</p>
            <p>Файли cookie, які ми використовуємо на сайті:</p>
            <p>* beautylinksCookie - зберігає інформацію про погодження с політикою Cookie</p>
            <p>* _cfduid - допомагає Cloudflare виявляет зловмических відвіду посетителей на веб-сайтах наших клієнтів и мінімізує блокирование законных користувачів</p>
            <p>* _ga - Дозволяє розрізняти користувачів.</p>
            <p>* _gid - Дозволяє розрізняти користувачів.</p>
            <p>* _gat - Обмежу частоту запитів</p>
            <p>Ці файли cookie дозволяють нам:</p>
            <p>записывать информацию о сделках вами вибір и дозировать нам підганяти веб-сайт для вас, наприклад, налаштовую элементы рекламного макета и / или информацию о странице веб-сайту;</p>
            <p>пам'ятайте, що и раніше відвідували нас; це означа, що ми мы можем определить количество пользователей, которые были отримумо. В этой дозе нам переконатися, що ми маємо достатню кількість потенційних клієнтів;</p>
            <p>збирати анонімну статистичну информацию о них, як ви користуєтесь Веб-сайтом (включая, скільки часу в витрачае на веб-сайте) и в потрапили на веб-сайт, чтобы они могли покрасить веб-сайт и доставлять, якії веб-и частные функции сайту найбільше популярный середний користувачів;</p>
            <p>збирати информацию о странице на веб-сайтах, який відвідуєте, такожную информацию о веб-сайтах, які відвідуте, чтобы предоставить вам доступ к «сегментным ринку».</p>
            <p>Використоваяться такі файли cookie:</p>
            <p>* Файли Cookies Google Analytics - Відстеження веб-трафіку. Дізнайтеся більше на https://www.google.com/policies/privacy/ , а щоб отідмовитися, отідвідайте сторінку http://tools.google.com/dlpage/gaoptout .</p>
          </div>
        </section>
      </>
    );
  }
}

CookiesPolicy.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  aboutUs: makeSelectCookiesPolicy(),
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

const CookiesPolicyStyled = withStyles(styles)(CookiesPolicy);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CookiesPolicyStyled);
