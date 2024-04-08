import { useEffect, useState } from 'react';
import SideNavigation from '@cloudscape-design/components/side-navigation';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeHref, setActiveHref] = useState(location.pathname);

  useEffect(() => {
    setActiveHref(location.pathname);
  }, [location]);

  return (
    <SideNavigation
      activeHref={activeHref}
      items={[
        {
          type: 'link',
          href: '/app/budget',
          text: 'Table',
        },
      ]}
      onFollow={(event) => {
        if (!event.detail.external) {
          event.preventDefault();
          navigate(event.detail.href);
        }
      }}
    />
  );
};

export default NavigationMenu;
