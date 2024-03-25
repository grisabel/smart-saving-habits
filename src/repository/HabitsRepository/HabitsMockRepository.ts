import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";
import { HabitsHttpRepository } from "./HabitsHttpRepository";

const httpMock = HttpMockAdapterFactory.getInstance();

httpMock.onPost(
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

export class UserMockRepository extends HabitsHttpRepository {}
