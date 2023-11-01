import { Leagues } from "@/screens/home/home-screen.types";
import { create } from "zustand";

type FilterState = {
  selectedLeagues: Array<Leagues>;
  setSelectedLeague: (league:Leagues) => void;
  clearAll:()=>void;
}

const useFilterStore = create<FilterState>((set) => ({
  selectedLeagues: [],
  setSelectedLeague: (league:Leagues) => set((state) => {
    const hasLeague = state.selectedLeagues.find(l => l.id === league.id)
    if(hasLeague){
      return {
        selectedLeagues:state.selectedLeagues.filter(l => l.id !== league.id)
      }
    }else {
      return {
        selectedLeagues:[...state.selectedLeagues,{...league}]
      }
    }
  }),
  clearAll: () => set((state)=> {
    return {
      selectedLeagues:[]
    }
  }),
}))


export default useFilterStore
