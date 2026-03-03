import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { memo } from 'react';

export const NotFound = memo(() => (
  <div
    style={{
      textAlign: 'center',
      marginTop: '50vh'
    }}
  >
    <p>404 Not Found</p>
    <Link to={AppRoute.Root}>Перейти на главную</Link>
  </div>
));

NotFound.displayName = 'NotFound';

