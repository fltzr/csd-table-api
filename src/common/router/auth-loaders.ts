import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { AuthApi } from '../../auth/common/api';

export const authLoader = async () => {
  console.log('authLoader');

  const { authenticated, user } = await AuthApi.checkAuth();

  console.log(`authLoader response: authenticated=${authenticated}, user?=${!!user}`);

  return { authenticated, user };
};

export const protectedLoader = async ({ request }: LoaderFunctionArgs) => {
  console.log('protectedLoader');
  const { authenticated, user } = await AuthApi.checkAuth();

  if (!authenticated || !user) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);

    return redirect(`/signin?${params.toString()}`);
  }

  return null;
};

export const unprotectedLoader = async () => {
  console.log('unprotectedLoader');
  const { authenticated, user } = await AuthApi.checkAuth();

  if (authenticated && user) {
    return redirect('/app');
  }

  return null;
};
