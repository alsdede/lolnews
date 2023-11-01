
export type League = {
  name: string
  slug:string
}

export type Match = {
   id:string
   strategy:string
}
export type Event = {
  blockName:string
  league : League
  match: Match
  startTime: Date
  state: string
  type: string
}

export type Leagues = {
  name:string
  slug:string
  id:string
  image:string
  priority:number
  displayPriority:{
    position:number
    status: string
  }
  region:string
}
