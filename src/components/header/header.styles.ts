import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  align-items: flex-end;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[600]};
    padding: ${theme.sizes[16]};

  `}
`;
export const Menu = styled.TouchableOpacity``
