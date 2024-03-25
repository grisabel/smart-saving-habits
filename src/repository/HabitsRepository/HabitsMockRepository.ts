import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";
import { HabitsHttpRepository } from "./HabitsHttpRepository";

const httpMock = HttpMockAdapterFactory.getInstance();

httpMock.onGet(
  import.meta.env.BASE_URL + "/financial-control/habits/alimentation",
  () => {
    return Promise.resolve({
      status: 200,
      response: {
        type: "Habits_Alimentation",
        transactions: [
          {
            transactionId: "2525b767-0f4d-48d6-b0d2-29098329eb9c",
            amount: 44.07,
            conceptId: "EXPENSE-2",
            concept: "Alimentación",
            date: "01/03/2024",
            note: "nota 0",
          },
        ],
      },
    });
  }
);
httpMock.onGet(
  import.meta.env.BASE_URL + "/financial-control/habits/restaurant",
  () => {
    return Promise.resolve({
      status: 200,
      response: {
        type: "Habits_Restaurant",
        transactions: [
          {
            transactionId: "2525b767-0f4d-48d6-b0d2-29098329eb9c",
            amount: 44.07,
            conceptId: "EXPENSE-2",
            concept: "Vehicle",
            date: "01/03/2024",
            note: "nota 0",
          },
          {
            transactionId: "2525b767-0f4d-48d6-b0d2-29098329eb9c",
            amount: 2.07,
            conceptId: "EXPENSE-2",
            concept: "Vehicle",
            date: "06/03/2024",
            note: "nota 0",
          },
          {
            transactionId: "2525b767-0f4d-48d6-b0d2-29098329eb9c",
            amount: 43,
            conceptId: "EXPENSE-2",
            concept: "Vehicle",
            date: "01/02/2024",
            note: "nota 0",
          },
        ],
      },
    });
  }
);

export class UserMockRepository extends HabitsHttpRepository {}
