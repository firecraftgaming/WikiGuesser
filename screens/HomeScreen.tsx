import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { MainLayout } from '../components/MainLayout';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';

export default () => {
  const navigation = useNavigation();

  return (
    <MainLayout settings={true}>
      <Logo/>
      <Button
        onClick={() => navigation.navigate('Join')}
      >Join</Button>
      <Button
        onClick={() => navigation.navigate('Create')}
      >Create</Button>
    </MainLayout>
  );
};