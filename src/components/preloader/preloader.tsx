
import spinner from '../../assets/img/spinner.svg';

export const Preloader = () => (
  <div style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
  >
    <img src={spinner} alt='' />
  </div>
);
