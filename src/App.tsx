import TopNavigation from '@cloudscape-design/components/top-navigation';
import AppLayout from '@cloudscape-design/components/app-layout';

const App = () => {
  return (
    <>
      <TopNavigation identity={{ href: '/' }} />
      <AppLayout />
    </>
  );
};

export const Component = App;
