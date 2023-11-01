import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import dayjs from "dayjs";
import Header from "@/components/header/header";
import { SheetManager } from "react-native-actions-sheet";
import { Feather } from "@expo/vector-icons";

import GamesList from "@/components/games-list/games-list";
import {
  getLeagues,
  getScheduleResponse,
  getStandingsResponse,
  getTournamentsForLeague,
} from "@/services/lolapi";
import { filterMatchsEvent } from "@/utils/schedule";
import MatchList from "@/components/mach-list/match-list";

import * as S from "./home-screen.styles";
import { Leagues } from "./home-screen.types";

const HomeScreen = () => {
  const [gameSelected, setGameSelected] = useState("LOL");
  const [leagues, setLeagues] = useState<Leagues[]>([]);
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

    getLeagues().then((response) => {
      // console.log("LEAGUES", response.data.data.leagues);
      setLeagues(response.data.data.leagues);
    });
    // getTournamentsForLeague("98767975604431411").then((response) => {
    //   console.log("TORNEIO", response.data.data.leagues[0]);
    // });
    // getStandingsResponse("108998961191900167").then((response) => {
    //   console.log(
    //     "STANDING",
    //     response.data.data.standings[0].stages[3].sections[0]
    //   );
    // });
  }, []);
  const handleOpenMenu = () => {
    SheetManager.show("league-sheet", {
      payload: { leagues: leagues },
    });
  };
  return (
    <S.Wrapper>
      <S.FilterMenu>
        <S.FilterButton onPress={handleOpenMenu}>
          <Feather name="menu" size={24} color="white" />
        </S.FilterButton>
      </S.FilterMenu>

      <MatchList data={events} onPress={() => {}} />
    </S.Wrapper>
  );
};

export default HomeScreen;
