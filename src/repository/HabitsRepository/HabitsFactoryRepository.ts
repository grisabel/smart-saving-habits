import type { HabitsInterfaceRepository } from "./HabitsInterfaceRepository";
import { HabitsHttpRepository } from "./HabitsHttpRepository";
import { UserMockRepository } from "./HabitsMockRepository";
import { HttpFactory } from "@/utils/Http/HttpFactory";
import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";

export class HabitsFactoryRepository {
  private static instance: HabitsInterfaceRepository | null = null;

  static getInstance(): HabitsInterfaceRepository {
    if (!HabitsFactoryRepository.instance) {
      if ( import.meta.env.VITE_MODE === "production") {
        const http = HttpFactory.getInstance();
        HabitsFactoryRepository.instance = new HabitsHttpRepository(http);
      } else {
        const httpMock = HttpMockAdapterFactory.getInstance();
        HabitsFactoryRepository.instance = new UserMockRepository(httpMock);
      }
    }
    return HabitsFactoryRepository.instance;
  }
}
