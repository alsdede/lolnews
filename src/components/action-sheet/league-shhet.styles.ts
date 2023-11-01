import styled,{css} from 'styled-components/native';

export const Wrapper = styled.View`

    ${({ theme }) => css`
    flex:1;
    padding: ${theme.sizes[16] } ${theme.sizes[8]};
    background-color: ${theme.colors.gray[600]};
    border-top-right-radius: ${theme.sizes[24]};
    border-top-left-radius: ${theme.sizes[24]};
  `}
`;


export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom:  ${theme.sizes[16]};;
  `}
`
export const Top = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`
export const CloseButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    height: 40px;
    width: 40px;
  `}
`
export const ClearAllButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    height: 40px;

  `}
`
