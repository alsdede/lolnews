import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import dayjs from "dayjs";
import Header from "@/components/header/header";

import * as S from "./home-screen.styles";
import GamesList from "@/components/games-list/games-list";
import { GameProps } from "../details/details-screen.types";
import { GAMES } from "../details/content";
import { getScheduleResponse } from "@/services/lolapi";
import { filterMatchsEvent } from "@/utils/schedule";
import MatchList from "@/components/mach-list/match-list";

const HomeScreen = () => {
  const [gameSelected, setGameSelected] = useState("LOL");
  const [events, setEvents] = useState([]);
  const currentDay = dayjs();

  // useEffect(() => {
  //   const filtered = GAMES.filter((item) => item.game === gameSelected);
  //   setGameSelected(filtered?.game);
  // }, [gameSelected]);

  useEffect(() => {
    getScheduleResponse()
      .then((response) => {
        let scheduleEvents = response.data.data.schedule.events;

        setEvents(scheduleEvents);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <GamesList onSelect={setGameSelected} selected={gameSelected} />
      <MatchList data={events} onPress={() => {}} />
    </S.Wrapper>
  );
};

export default HomeScreen;
