export interface Character {
    id: number;
    name: string;
    gender: string;
    age: string;
    occupation: string;
    status: string;
    portrait_path: string | null;
  }
  
  import { Character } from "../../types/Character";
