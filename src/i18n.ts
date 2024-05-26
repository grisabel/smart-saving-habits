import { createI18n } from 'vue-i18n';

type CardHabitsMessages = {
    cardHabits: {
        foodTitle: string;
        foodDescription: string;
        carTitle: string;
        carDescription: string;
        restaurantTitle: string;
        restaurantDescription: string;
        antTitle: string;
        antDescription: string;
        january: string;
        february: string;
        march: string;
        april: string;
        may: string;
        june: string;
        july: string;
        august: string;
        september: string;
        october: string;
        november: string;
        december: string;
    };
  };

  const messages = {
    en: {
      cardHabits: {
        foodTitle: 'Food',
        foodDescription: 'Plan your pantry, foresee your future: Estimate your monthly food expenses!',
        carTitle: 'Vehicle',
        carDescription: 'Roll towards economy. Discover your most intense month in vehicle expenses!',
        restaurantTitle: 'Restaurants',
        restaurantDescription: 'Savor your outings and control your monthly spending!',
        antTitle: 'Ant Expenses',
        antDescription: 'Hunt down your small expenses, achieve big savings!',
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november: 'November',
        december: 'December'
      },
    },
    es: {
      cardHabits: {
        foodTitle: 'Alimentación',
        foodDescription: 'Planifica tu despensa, prevé tu futuro: ¡Estima tu gasto mensual de alimentos!',
        carTitle: 'Vehículo',
        carDescription: 'Rueda hacia la economía. ¡Descubre tu mes más intenso en gastos de vehículo!',
        restaurantTitle: 'Restaurantes',
        restaurantDescription: '¡Saborea tus salidas y controla tu gasto mensual',
        antTitle: 'Gastos hormiga',
        antDescription: '¡Caza tus gastos pequeños, logra grandes ahorros!',
        january: 'Enero',
        february: 'Febrero',
        march: 'Marzo',
        april: 'Abril',
        may: 'Mayo',
        june: 'Junio',
        july: 'Julio',
        august: 'Agosto',
        september: 'Septiembre',
        october: 'Octubre',
        november: 'Noviembre',
        december: 'Diciembre'
      },
    },
  };

const i18n = createI18n<[CardHabitsMessages], 'en' | 'es'>({
    legacy: false, 
    locale: 'en',
    fallbackLocale: 'es',
    messages,
  });
  
  export default i18n;
