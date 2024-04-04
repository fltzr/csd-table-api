import { lazy, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Density, Mode, applyDensity, applyMode } from '@cloudscape-design/global-styles';
import AppLayout from '@cloudscape-design/components/app-layout';

const Header = lazy(() => import('./header/header'));
const NavigationMenu = lazy(() => import('./navigation'));

const Layout = () => {
  useEffect(() => {
    applyMode(Mode.Dark);
    applyDensity(Density.Compact);
  }, []);

  return (
    <>
      <Header />
      <AppLayout
        contentType='table'
        content={<Outlet />}
        navigation={<NavigationMenu />}
        headerSelector='#h'
        navigationWidth={250}
      />
    </>
  );
};

export const Component = Layout;
