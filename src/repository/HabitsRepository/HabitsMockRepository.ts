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
            concept: "Restaurant",
            date: "01/03/2024",
            note: "nota 0",
          },
          {
            transactionId: "2525b767-0f4d-48d6-b0d2-29098329eb9c",
            amount: 2.07,
            conceptId: "EXPENSE-2",
            concept: "Restaurant",
            date: "06/03/2024",
            note: "nota 0",
          },
          {
            transactionId: "2525b767-0f4d-48d6-b0d2-29098329eb9c",
            amount: 43,
            conceptId: "EXPENSE-2",
            concept: "Restaurant",
            date: "22/03/2024",
            note: "nota 0",
          },
        ],
      },
    });
  }
);
httpMock.onGet(
  import.meta.env.BASE_URL + "/financial-control/habits/ant-expenses",
  () => {
    return Promise.resolve({
      status: 200,
      response: {
        type: "Habits_AntExpenses",
        transactions: [
          {
            transactionId: "2525b767-0f4d-48d6-b0d2-29098329eb9c",
            amount: 2.95,
            conceptId: "EXPENSE-2",
            concept: "Restaurant",
            date: "01/03/2024",
            note: "nota 0",
          },
          {
            transactionId: "2525b767-0f4d-48d6-b0d2-29098329eb9c",
            amount: 2.07,
            conceptId: "EXPENSE-2",
            concept: "Restaurant",
            date: "06/03/2024",
            note: "nota 0",
          },
          {
            transactionId: "2525b767-0f4d-48d6-b0d2-29098329eb9c",
            amount: 1.5,
            conceptId: "EXPENSE-2",
            concept: "food",
            date: "22/03/2024",
            note: "nota 0",
          },
        ],
      },
    });
  }
);

httpMock.onGet(
  import.meta.env.BASE_URL + "/financial-control/habits/vehicle",
  () => {
    return Promise.resolve({
      status: 200,
      response: {
        type: "Habits_Vehicles",
        transactions: [
          {
            transactionId: "da06f29c-ce7e-4ee4-9f34-7219ed531fed",
            amount: 1000,
            conceptId: "EXPENSE-15",
            concept: "Vehículo",
            date: "25/03/2024",
            note: "itv",
          },
        ],
      },
    });
  }
);

export class UserMockRepository extends HabitsHttpRepository {}

