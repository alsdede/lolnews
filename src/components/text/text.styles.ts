import { TextProps as TextPropsNative } from "react-native";
import styled, { css } from "styled-components/native";
import theme from "@/theme";

export type TextProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.fontSizes;
  weight?: keyof typeof theme.fonts;
} & TextPropsNative;

export const Text = styled.Text<TextProps>`
  ${({ theme, color, size, weight }) => css`
    color: ${color ? theme.colors[color] : theme.colors.gray[100]};
    font-size: ${size ? theme.fontSizes[size] : theme.fontSizes.md};
    font-family: ${weight ? theme.fonts[weight] : theme.fonts.body};
    text-align: center;
  `}
`;


