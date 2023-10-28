import React from "react";
import { FlatList } from "react-native";

import GameItem from "./game-item/game-item";

import { GAMES } from "@/screens/details/content";
import * as S from "./games-list.styles";

type Props = {
  onSelect: (value: string) => void;
  selected: string;
};

const GamesList = ({ onSelect, selected }: Props) => {
  return (
    <S.List
      data={GAMES}
      contentContainerStyle={{
        marginTop: 16,
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginBottom: 16,
        alignItems: "center",
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GameItem
          image={item.thumb}
          isActive={selected === item.game}
          onPress={() => onSelect(item.game)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default GamesList;
