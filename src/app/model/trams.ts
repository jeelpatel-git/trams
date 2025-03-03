export interface TramDeparture {
  destination: string;
  direction_code: number;
  direction: string;
  state: string;
  display: string;
  scheduled: string;
  expected: string;
  stop_deviation?: string[]; 
}