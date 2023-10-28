import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px;
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[600]};
  `}
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  border-radius: 6px;
  ${({ theme }) => css`
    background-color: ${theme.colors.green[500]};
    color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 18px;
    margin-bottom: 30px;
  `}
`;
