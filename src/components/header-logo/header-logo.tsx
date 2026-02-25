import { memo } from 'react';

const LOGO_SIZE = {
  WIDTH: '81',
  HEIGHT: '41'
};


const HeaderLogo = () => (
  <img
    className="header__logo"
    src="img/logo.svg"
    alt="6 cities logo"
    width={LOGO_SIZE.WIDTH}
    height={LOGO_SIZE.HEIGHT}
  />
);

const MemoizedHeaderLogo = memo(HeaderLogo);

export default MemoizedHeaderLogo;
