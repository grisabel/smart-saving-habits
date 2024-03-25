import { HttpService } from "@/utils/Http/HttpService";
import type { HabitsInterfaceRepository } from "./HabitsInterfaceRepository";
import type { HabitResponseModel } from "./model/response/HabitResponseModel";

export class HabitsHttpRepository implements HabitsInterfaceRepository {
  constructor(private http: HttpService) {}

  food(): Promise<HabitResponseModel> {
    return new Promise((resolve, reject) => {
      return this.http
        .get({
          endpoint: import.meta.env.BASE_URL + "/financial-control/habits/alimentation",
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
  restaurant(): Promise<HabitResponseModel> {
    return new Promise((resolve, reject) => {
      return this.http
        .get({
          endpoint: import.meta.env.BASE_URL + "/financial-control/habits/restaurant",
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
}
