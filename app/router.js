import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from 'containers/Home/Loadable';
import Service from 'containers/Service/Loadable';
import PractitionerSearch from 'containers/MastersSearch/MasterSearchContent/Loadable';
import ServicesSearch from 'containers/ServicesSearch/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import FaqPage from 'containers/FaqPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import AboutUs from 'containers/AboutUs/Loadable';
import TermsAndConditions from 'containers/TermsAndConditions/Loadable';
import PrivacyPolicy from 'containers/PrivacyPolicy/Loadable';
import CookiesPolicy from 'containers/CookiesPolicy/Loadable';
import CustomerFeedback from 'containers/CustomerFeedback/Loadable';
import Customer from 'containers/CustomerPage/Loadable';
import Login from 'containers/LoginPage/Loadable';
import Register from 'containers/RegisterCustomerPage/Loadable';
import RegisterChose from 'containers/RegisterMainPage/Loadable';
import RegisterMaster from 'containers/RegisterMasterPage/Loadable';
import RegisterClient from 'containers/RegisterClientPage/Loadable';
import PrivateRoute from 'containers/PrivateRoute/Loadable';
import MasterPage from 'containers/MasterPage/Loadable';
import CustomerMaster from 'containers/CustomerMasterPage/Loadable';
import ProtectedSearchRow from './containers/ProtectedSearchRoute';
import Reset from './containers/Reset/Loadable';
import ResetPassword from './containers/ResetPassword/Loadable';
import Checkout from './containers/Checkout/Loadable';
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/service/:serviceCategory" component={Service} />
    <ProtectedSearchRow exact path="/specialists/:subCategory" component={PractitionerSearch} />
    <Route exact path="/category-search" component={ServicesSearch} />
    <Route exact path="/how-it-work" component={FaqPage} />
    <Route exact path="/contact" component={ContactPage} />
    <Route exact path="/about" component={AboutUs} />
    <Route exact path="/terms" component={TermsAndConditions} />
    <Route exact path="/policy" component={PrivacyPolicy} />
    <Route exact path="/cookies-policy" component={CookiesPolicy} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/register-chose" component={RegisterChose} />
    <Route exact path="/register-master" component={RegisterMaster} />
    <Route exact path="/register-client" component={RegisterClient} />
    <Route exact path="/reset" component={Reset} />
    <Route exact path="/reset-password/:resetToken" component={ResetPassword} />
    <Route exact path="/checkout/:bookingId" component={Checkout} />
    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
    <Route exact path="/master/:id" component={MasterPage} />
    <Route exact path="/customer/feedback/booking/:id" component={CustomerFeedback} />
    /** * Protected routes */
    <PrivateRoute exact path="/customer" component={Customer} />
    <PrivateRoute exact path="/customer-master" component={CustomerMaster} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);
