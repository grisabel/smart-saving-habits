import type { HabitResponseModel } from "./model/response/HabitResponseModel";

export interface HabitsInterfaceRepository {
  food(): Promise<HabitResponseModel>;
  vehicle(): Promise<HabitResponseModel>;
  ant(): Promise<HabitResponseModel>;
  restaurant(): Promise<HabitResponseModel>;
}
