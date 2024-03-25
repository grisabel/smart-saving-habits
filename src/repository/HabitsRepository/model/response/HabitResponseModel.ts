export interface HabitResponseModel {
  type:  "Habits_Alimentation" | "Habits_Vehicles" |"Habits_Restaurant" | "Habits_AntExpenses"
  transactions: TransactionResponseModel[];
}

export interface TransactionResponseModel {
  transactionId: string;
  amount: number;
  conceptId: string;
  concept: string;
  date: string; // "dd/MM/yyyy";
  note: string;
}
