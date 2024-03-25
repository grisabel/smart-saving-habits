import type { HabitResponseModel } from "./model/response/HabitResponseModel";

export interface HabitsInterfaceRepository {
  food(): Promise<HabitResponseModel>;
  restaurant(): Promise<HabitResponseModel>;
  ant(): Promise<HabitResponseModel>;
}
