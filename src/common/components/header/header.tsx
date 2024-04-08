import { lazy, useState, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import TopNavigation, { TopNavigationProps } from '@cloudscape-design/components/top-navigation';

import styles from './styles.module.css';
import { useAuthStore } from '../../../auth/hooks/use-auth-store';

const UserPreferencesModal = lazy(() => import('./preferences-modal/preferences-modal'));

const HeaderPortal = ({ children }: PropsWithChildren) => {
  const dom = document.querySelector('#h');

  if (!dom) {
    return null;
  }

  return createPortal(children, dom);
};

const Header = () => {
  const navigate = useNavigate();
  const authenticated = useAuthStore((s) => s.authenticated);
  const [userPreferencesModalOpen, setUserPreferencesModalOpen] = useState(false);

  const utilityItems: TopNavigationProps['utilities'] =
    authenticated ?
      [
        {
          type: 'button',
          iconName: 'settings',
          onClick: () => {
            setUserPreferencesModalOpen(!userPreferencesModalOpen);
          },
          ariaLabel: 'User preferences',
        },
      ]
    : [
        {
          type: 'button',
          iconName: 'settings',
          onClick: () => {
            setUserPreferencesModalOpen(!userPreferencesModalOpen);
          },
          ariaLabel: 'User preferences',
        },
        {
          type: 'button',
          text: 'Hello!',
        },
      ];

  return (
    <>
      <HeaderPortal>
        <div className={styles.header}>
          <TopNavigation
            identity={{
              href: '/',
              title: 'ez',
              onFollow: (event) => {
                event.preventDefault();
                navigate('/');
              },
            }}
            utilities={utilityItems}
          />
        </div>
      </HeaderPortal>
      <UserPreferencesModal
        visible={userPreferencesModalOpen}
        onDismiss={() => {
          setUserPreferencesModalOpen(false);
        }}
      />
    </>
  );
};

export default Header;
