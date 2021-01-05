export type AttributesTypes =
  | "crew"
  | "passengers"
  | "cargo_capacity"
  | "cost_in_credits"
  | "mass"
  | "height"
  | "";
export type ObjectNameTypes = "starships" | "people" | "";

export interface AttributesObject {
  name: string;
  mass: string;
  height: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  cost_in_credits: string;
}

export interface PlayerObject {
  name: string;
  value: string;
  score: number;
}
