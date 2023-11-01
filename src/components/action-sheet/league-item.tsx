import React from "react";
import { Image } from "react-native";
import Text from "@/components/text/text";
import styled, { css, useTheme } from "styled-components/native";
import useFilterStore from "@/store/filterStore";
import { Leagues } from "@/screens/home/home-screen.types";

const Wrapper = styled.Pressable<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    background-color: ${theme.colors.gray[600]};
    flex-direction: row;
    padding: ${theme.sizes[4]};
    align-items: center;
    margin-bottom: ${theme.sizes[4]};
    border-radius: ${theme.sizes[4]};
    border: ${selected
      ? `1px solid ${theme.colors.green[500]}`
      : theme.colors.gray[600]};
  `}
`;
const ImageS = styled.Image`
  ${({ theme }) => css`
    margin-right: ${theme.sizes[8]};
  `}
`;
type Props = {
  item: Leagues;
};

const LeagueItem = ({ item }: Props) => {
  const { image, name, id } = item;
  const { selectedLeagues, setSelectedLeague } = useFilterStore();

  const isSelected = selectedLeagues.find((league) => league.id === id);
  console.log(!!isSelected);
  return (
    <Wrapper onPress={() => setSelectedLeague(item)} selected={!!isSelected}>
      <ImageS source={{ uri: image || "" }} height={40} width={40} />
      <Text>{name}</Text>
    </Wrapper>
  );
};

export default LeagueItem;
