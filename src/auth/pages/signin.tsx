import { useNavigate } from 'react-router-dom';

import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Icon from '@cloudscape-design/components/icon';
import SpaceBetween from '@cloudscape-design/components/space-between';

import { GenericForm } from '../../common/components/form/generic-form';
import { FormInput } from '../../common/components/form/form-input';

import { AuthApi } from '../common/api';
import { SigninSchema, signinSchema } from '../common/schema';

import styles from './styles.module.scss';
import { useAuthStore } from '../hooks/use-auth-store';
import { useLayoutStore } from '../../common/stores/use-layout-store';
import { useEffect } from 'react';

const SigninPage = () => {
  const navigate = useNavigate();
  const auth = useAuthStore();
  const layout = useLayoutStore();

  useEffect(() => {
    layout.setState({ navigationHidden: true, toolsHidden: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignin = async (data: SigninSchema) => {
    try {
      const { authenticated, user } = await AuthApi.signin(data);

      auth.setState({ authenticated, user });

      console.log('SigninPage: handleSignin: authenticated=', authenticated, 'user=', user);
      // navigate('/app', { replace: true });

      window.location.href = '/app';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Container header={<Icon name='keyboard' variant='subtle' size='big' />}>
          <ColumnLayout columns={2}>
            <Header variant='h1'>Sign in</Header>
            <GenericForm
              schema={signinSchema}
              formId='form-signin'
              onSubmit={handleSignin}
              secondaryActions={
                <Box margin={{ top: 'xxxl' }}>
                  <Button
                    variant='link'
                    onFollow={(event) => {
                      event.preventDefault();
                      navigate('/forgot');
                    }}
                  >
                    Forgot something?
                  </Button>
                </Box>
              }
              actions={
                <Box margin={{ top: 'xxxl' }}>
                  <SpaceBetween direction='horizontal' size='xs'>
                    <Button
                      variant='link'
                      onClick={(event) => {
                        event.preventDefault();
                        navigate('/signup', { replace: true });
                      }}
                    >
                      Create account
                    </Button>
                    <Button variant='primary' form='form-signin'>
                      Sign in
                    </Button>
                  </SpaceBetween>
                </Box>
              }
            >
              <SpaceBetween size='m'>
                <FormInput<SigninSchema> name='username' label='Username' />
                <FormInput<SigninSchema> sensitive name='password' label='Password' />
              </SpaceBetween>
            </GenericForm>
          </ColumnLayout>
        </Container>
      </div>
    </div>
  );
};

export const Component = SigninPage;
