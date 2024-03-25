import { HttpService } from "@/utils/Http/HttpService";
import type { HabitsInterfaceRepository } from "./HabitsInterfaceRepository";
import type { HabitResponseModel } from "./model/response/HabitResponseModel";
import type { HttpInterfaceService } from "@/utils/Http/HttpInterfaceService";

export class HabitsHttpRepository implements HabitsInterfaceRepository {
  constructor(private http: HttpInterfaceService) {}

  _habit(url: string): Promise<HabitResponseModel> {
    return new Promise((resolve, reject) => {
      return this.http
        .get({
          endpoint: import.meta.env.VITE_BASE_URL + url,
        })
        .then((response) => {
          try {
            switch (response.status) {
              case 200:
                resolve(response.json());
                break;

              default:
                reject();
                break;
            }
          } catch (error) {
            console.log("Error in response.json()");
            reject();
          }
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
          reject();
        });
    });
  }

  food(): Promise<HabitResponseModel> {
    return this._habit("/financial-control/habits/alimentation")
  }

  vehicle(): Promise<HabitResponseModel> {
    return this._habit("/financial-control/habits/vehicle")
  }

  ant(): Promise<HabitResponseModel> {
    return this._habit("/financial-control/habits/ant-expenses")
  }
  restaurant(): Promise<HabitResponseModel> {
    return this._habit("/financial-control/habits/restaurant")
  }

}
