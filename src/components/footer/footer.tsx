import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { memo } from 'react';

const FOOTER_LOGO_SIZE = {
  WIDTH: '64',
  HEIGHT: '33'
};


const Footer = () => (
  <footer className="footer container">
    <Link className="footer__logo-link" to={AppRoute.Root}>
      <img
        className="footer__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={FOOTER_LOGO_SIZE.WIDTH}
        height={FOOTER_LOGO_SIZE.HEIGHT}
      />
    </Link>
  </footer>
);

const MemoizedFooter = memo(Footer);

export default MemoizedFooter;
