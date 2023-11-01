import { SafeAreaView } from 'react-native-safe-area-context';
import styled,{css} from 'styled-components/native';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: black;

`;


export const FilterMenu = styled.View`
  width: 100%;
  align-items: flex-end;
  justify-content: center;

  ${({ theme }) => css`

    padding: ${theme.sizes[16]};

  `}
`;
export const FilterButton = styled.TouchableOpacity`
 ${({ theme }) => css`

padding: ${theme.sizes[16]};

`}
`
