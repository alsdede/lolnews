import React from "react";
import { Feather } from "@expo/vector-icons";
import * as S from "./header.styles";
import { TouchableOpacity } from "react-native";
import { SheetManager } from "react-native-actions-sheet";

const Header = () => {
  const handleOpenMenu = () => {
    SheetManager.show("league-sheet");
  };
  return (
    <S.Wrapper>
      <S.Menu onPress={handleOpenMenu}>
        <Feather name="menu" size={24} color="white" />
      </S.Menu>
    </S.Wrapper>
  );
};

export default Header;
