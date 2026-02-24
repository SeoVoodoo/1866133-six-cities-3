import { AutorizationStatus } from '../const';
import { useAppSelector } from '.';
import { selectAuthStatus } from '../store/user/user.selector';

export const useAuthorization = () => {

  const status = useAppSelector(selectAuthStatus);

  return status === AutorizationStatus.Auth;
};
