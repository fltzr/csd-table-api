import { lazy, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Density, Mode, applyDensity, applyMode } from '@cloudscape-design/global-styles';
import AppLayout from '@cloudscape-design/components/app-layout';
import { useLayoutStore } from '../stores/use-layout-store';

const Header = lazy(() => import('./header/header'));
const NavigationMenu = lazy(() => import('./navigation'));

const Layout = () => {
  const layout = useLayoutStore();

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
        navigationOpen={!layout.navigationHidden && layout.navigationOpen}
        navigationHide={layout.navigationHidden}
        toolsOpen={!layout.toolsHidden && layout.toolsOpen}
        toolsHide={layout.toolsHidden}
        onNavigationChange={() => layout.setState({ navigationOpen: !layout.navigationOpen })}
        onToolsChange={() => layout.setState({ toolsOpen: !layout.toolsOpen })}
      />
    </>
  );
};

export const Component = Layout;
