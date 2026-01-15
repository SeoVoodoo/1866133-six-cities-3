import { Outlet, useLocation } from 'react-router-dom';
import HeaderLogo from '../header/header-logo';
import {favoriteData} from '../../mocks/favorite-data/favorite-data';
import { AppRoute, AutorizationStatus } from '../../const';
import { getAutorizationStatus } from '../../authorization-status';
import { getLayoutState } from '../../utils/common';

const MOCK_EMAIL = 'Oliver.conner@gmail.com';
const favoriteCount = favoriteData.length;
const FOOTER_LOGO_SIZE = {
  WIDTH: '64',
  HEIGHT: '33'
};


export const Layout = () => {
  const {pathname} = useLocation();

  const {rootClassName,
    linkClassName,
    shouldRenderUser,
    shouldRenderFooter
  } = getLayoutState(pathname as AppRoute);

  const autorizationStatus = getAutorizationStatus();

  return (
    <div className={`page ${rootClassName}`}>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className={`header__logo-link ${linkClassName}`}>
                <HeaderLogo />
              </a>
            </div>
            { shouldRenderUser &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {
                      autorizationStatus === AutorizationStatus.Auth
                        ? (
                          <>
                            <span className="header__user-name user__name">{MOCK_EMAIL}</span>
                            <span className="header__favorite-count">{favoriteCount}</span>
                          </>
                        ) : <span className="header__login">Sign in</span>
                    }
                  </a>
                </li>
                {
                  autorizationStatus === AutorizationStatus.Auth && (

                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  )
                }
              </ul>
            </nav>}
          </div>
        </div>
      </header>

      <Outlet />

      {shouldRenderFooter &&
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={FOOTER_LOGO_SIZE.WIDTH}
            height={FOOTER_LOGO_SIZE.HEIGHT}
          />
        </a>
      </footer>}

    </div>
  );
};


