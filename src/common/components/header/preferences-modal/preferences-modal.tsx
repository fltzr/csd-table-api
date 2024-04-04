import Box from '@cloudscape-design/components/box';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Modal from '@cloudscape-design/components/modal';
import Select, { type SelectProps } from '@cloudscape-design/components/select';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Tiles from '@cloudscape-design/components/tiles';
import { Density, Mode as Theme } from '@cloudscape-design/global-styles';

import comfortableDensity from './images/comfortable-density';
import compactDensity from './images/compact-density';
import { useState } from 'react';

const themeOptions: SelectProps.Option[] = [
  { value: Theme.Light, label: 'Light' },
  { value: Theme.Dark, label: 'Dark' },
];

type UserPreferencesModalProps = {
  visible: boolean;
  onDismiss: () => void;
};
const UserPreferencesModal = ({ visible, onDismiss }: UserPreferencesModalProps) => {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);
  const [density, setDensity] = useState<Density>(Density.Compact);

  return (
    <Modal
      size='medium'
      visible={visible}
      header={<Header variant='h2'>Theme Settings</Header>}
      onDismiss={onDismiss}
    >
      <Box margin={{ bottom: 'l' }}>
        <SpaceBetween size='m' direction='vertical'>
          <FormField label='Theme'>
            <Select
              options={themeOptions}
              selectedOption={themeOptions.find((opt) => opt.value === theme) ?? null}
              onChange={(event) => {
                setTheme(event.detail.selectedOption.value as Theme);
              }}
            />
          </FormField>
          <FormField label='Density'>
            <Tiles
              value={density}
              items={[
                {
                  value: Density.Comfortable,
                  label: 'Comfortable',
                  image: comfortableDensity,
                },
                {
                  value: Density.Compact,
                  label: 'Compact',
                  image: compactDensity,
                },
              ]}
              onChange={({ detail }) => {
                setDensity(detail.value as Density);
              }}
            />
          </FormField>
        </SpaceBetween>
      </Box>
    </Modal>
  );
};

export default UserPreferencesModal;
