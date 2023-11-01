import React from "react";
import { FlatList, Image } from "react-native";

import { GAMES } from "@/screens/details/content";
import Text from "@/components/text/text";
import * as S from "./match-list.styles";

type Props = {
  onPress: () => void;
  data: any;
};
const MatchItem = ({ onPress, data }: Props) => {
  const { teams, strategy } = data.match;

  const teamA = teams[0];
  const teamB = teams[1];

  return (
    <S.Wrapper onPress={onPress}>
      <S.TeamWrapper>
        {teamA?.record && (
          <Text numberOfLines={1}>
            {teamA.record.wins} - {teamA.record.losses}
          </Text>
        )}
        <S.ImageWrapper>
          <Image source={{ uri: teamA.image || "" }} height={80} width={80} />
        </S.ImageWrapper>
        <S.NameWrapper>
          <S.TeamName numberOfLines={2}>{teamA.name}</S.TeamName>
        </S.NameWrapper>
      </S.TeamWrapper>
      <S.GameInfo>
        <Text>
          {strategy.type} - {strategy.count}
        </Text>
        <S.TeamName>VS</S.TeamName>
        <S.TeamName> 0 - 0</S.TeamName>
      </S.GameInfo>
      <S.TeamWrapper>
        {teamB?.record && (
          <Text numberOfLines={1}>
            {teamB.record.wins} - {teamB.record.losses}
          </Text>
        )}
        <S.ImageWrapper>
          <Image source={{ uri: teamB.image || "" }} height={80} width={80} />
        </S.ImageWrapper>
        <S.NameWrapper>
          <S.TeamName numberOfLines={2}>{teamB.name}</S.TeamName>
        </S.NameWrapper>
      </S.TeamWrapper>
    </S.Wrapper>
  );
};
const MatchList = ({ data }: Props) => {
  return (
    <S.List
      data={data}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => (
        <MatchItem data={item} onPress={() => console.log("PRESS")} />
      )}
    />
  );
};

export default MatchList;
