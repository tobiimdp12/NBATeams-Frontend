import { Stat } from "./stat";

export interface Player {
  name: string ;
  lastName: string;
  birthDate: Date;
  age: number;
  height: number;
  weight: number;
  number: number;
  position: string;
  imageProfilePath: string;
  stats: Stat;
  teamId: number;
  experience: string;
}
