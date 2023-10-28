import React from 'react';
import { ImageSourcePropType, Platform, Image, PressableProps } from 'react-native';

import * as S from './game-item.styles';

type Props = PressableProps & {
  image: ImageSourcePropType;
  isActive: boolean;
};

const GameItem = ({ image, isActive, ...rest }: Props) => {
  return (
    <S.Wrapper {...rest} isActive={isActive}>
      <Image
        source={image}
        alt='Game image'
        resizeMode={Platform.OS === 'android' ? 'cover' : 'cover'}
        
      />
    </S.Wrapper>
  );
};

export default GameItem;
