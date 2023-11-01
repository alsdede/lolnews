import { Leagues } from "@/screens/home/home-screen.types";
import React, { useRef } from "react";
import { FlatList, ScrollView, ViewStyle, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ActionSheet, {
  useScrollHandlers,
  ActionSheetRef,
  SheetProps,
  SheetManager,
} from "react-native-actions-sheet";

import useFilterStore from "@/store/filterStore";
import Text from "@/components/text/text";

import LeagueItem from "./league-item";

import * as S from "./league-shhet.styles";
import { useTheme } from "styled-components/native";

const LeagueSheet = ({
  sheetId,
  payload,
}: SheetProps<{ leagues: Leagues[] }>) => {
  const { colors } = useTheme();
  const { leagues } = payload;
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const scrollHandlers = useScrollHandlers<FlatList>(
    "flatlist-1",
    actionSheetRef
  );
  const { clearAll } = useFilterStore();

  const Container: ViewStyle = {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: colors.gray[600],
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
    alignContent: "flex-start",
  };

  // console.log("Leagues", payload?.leagues);
  return (
    <ActionSheet
      ref={actionSheetRef}
      id={sheetId}
      useBottomSafeAreaPadding
      backgroundInteractionEnabled
      snapPoints={[95]}
      containerStyle={Container}
      isModal
    >
      <S.Wrapper>
        <S.Header>
          <S.Top>
            <S.ClearAllButton onPress={() => clearAll()}>
              <Text size="md" color="white">
                Limpar todos
              </Text>
            </S.ClearAllButton>
            <S.CloseButton onPress={() => SheetManager.hide("league-sheet")}>
              <Ionicons name="close" size={20} color={"white"} />
            </S.CloseButton>
          </S.Top>

          <Text size="xxl" color="white">
            Ligas
          </Text>
        </S.Header>

        {leagues && (
          <FlatList
            {...scrollHandlers}
            scrollEnabled
            showsVerticalScrollIndicator
            data={leagues}
            keyExtractor={(item) => `${item.name}-item`}
            renderItem={({ item }) => <LeagueItem item={item} />}
          />
        )}
      </S.Wrapper>
    </ActionSheet>
  );
};

export default LeagueSheet;
