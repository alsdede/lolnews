import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import Header from '@/components/header/header';

import * as S from './home-screen.styles';
import GamesList from '@/components/games-list/games-list';
import { GameProps } from '../details/details-screen.types';
import { GAMES } from '../details/content';

const HomeScreen = () => {
  const [gameSelected, setGameSelected] = useState('LOL');

  // useEffect(() => {
  //   const filtered = GAMES.filter((item) => item.game === gameSelected);
  //   setGameSelected(filtered?.game);
  // }, [gameSelected]);
  return (
    <S.Wrapper>
      <Header />
      <GamesList onSelect={setGameSelected} selected={gameSelected} />
      <Text>HOME</Text>
    </S.Wrapper>
  );
};

export default HomeScreen;
