import styled, { css } from 'styled-components/native';

export const Wrapper = styled.Pressable<{ isActive: boolean }>`
  width: 120px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 10px;

  ${({ theme, isActive }) => css`
    background-color: ${isActive ? theme.colors.gray[200] : theme.colors.gray[600]};
    padding: ${theme.sizes[16]};
  `}
`;
