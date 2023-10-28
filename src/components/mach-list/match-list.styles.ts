import { FlatList } from 'react-native';
import { Text } from "@/components/text/text";
import styled,{css} from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px;
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[600]};
    color:${theme.colors.gray[500]};
    border-radius: 8px;
  `}
  margin-bottom:16px;
`;
export const List = styled.FlatList`

  padding:0 24px;
`;

export const ImageWrapper = styled.View`
  width: 100px;
  height: 100px;

  align-items: center;
  justify-content: center;
`;

export const TeamWrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[600]};
    color:${theme.colors.gray[500]};
    align-items: center;
  `}
`;
export const GameInfo = styled.View`
  ${({ theme }) => css`
      align-items: center;
  `}
`;
export const NameWrapper = styled.View`
  ${({ theme }) => css`
      max-width: 100px;
      flex-grow: 1;
      align-items: center;

  `}
`;
export const TeamName = styled(Text)`
  ${({ theme }) => css`
    background-color: ${theme.fontSizes.md};
    color:${theme.colors.gray[200]};

  `}
`;
