import {TextProps as TextPropsNative} from "react-native"
import styled,{css} from 'styled-components/native';
import theme from "@/theme"
type TextProps = {
  color?:keyof typeof theme.colors
  size?:keyof typeof theme.fontSizes
  weight?:keyof typeof theme.fonts
} & TextPropsNative;
export const Text = styled.Text<TextProps>`

${({ theme,color,size, weight }) => css`
color:${theme.colors.gray[100] || color};
font-size:${theme.fontSizes.md || size} ;
font-weight: ${theme.fonts.body || weight};
text-align: center;
`}
`;
