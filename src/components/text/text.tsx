import React from "react";

import * as S from "./text.styles";

const Text = ({ color, size, weight, ...extraProps }: S.TextProps) => {
  return <S.Text color={color} size={size} weight={weight} {...extraProps} />;
};

export default Text;
