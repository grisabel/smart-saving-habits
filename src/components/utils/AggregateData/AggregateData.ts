import type { TransactionResponseModel } from '@/repository/HabitsRepository/model/response/HabitResponseModel';
import DateTimeService from '@/utils/Datetime/DatetimeService';
import { DATE_FORMATS } from '@/utils/Datetime/constants';


interface AggregateByMap {
  [key: string /* any format of DateTimeService */]: TransactionResponseModel[];
}

const _aggregateBy = (
  transactions: TransactionResponseModel[],
  format: string
): AggregateByMap => {
  const groupedByDateMap: AggregateByMap = {};
  return transactions.reduce((dateMap, item) => {
    const formattedTime: string = DateTimeService.parse(
      {
        date: item.date,
        format: DATE_FORMATS.Date,
      },
      format
    );

    let keyExists = false;
    Object.entries(dateMap).forEach((dateMapItem) => {
      const [keyDate, valueArray] = dateMapItem;
      if (formattedTime === keyDate) {
        // key already exists
        valueArray.push(item);
        keyExists = true;
      }
    });

    if (!keyExists) {
      // eslint-disable-next-line no-param-reassign
      dateMap[formattedTime] = [item];
    }
    return dateMap;
  }, groupedByDateMap);
};

export interface TransactionAggregateData {
  date: string /* any format of DateTimeService */;
  amount: number;
}

const AggregateData = {
  byMonth(transactions: TransactionResponseModel[]): TransactionAggregateData[] {
    const format = DATE_FORMATS.Month;
    const aggregateMap = _aggregateBy(transactions, format);

    const aggregateTransactionsData: TransactionAggregateData[] = [];

    Object.entries(aggregateMap).forEach((aggregateDay) => {
      const [key, valueArray] = aggregateDay;
      const result: TransactionAggregateData = {
        date: key,
        amount: valueArray.reduce((acc, value) => {
          const constant = 100;
          const result = acc + value.amount;
          return Math.round(result * constant) / constant;
        }, 0), // todo suma decimales
      };
      aggregateTransactionsData.push(result);
    });
    // Uncomment to debug
    // console.log({
    //   chartData,
    //   aggregateChartData,
    // });

    return aggregateTransactionsData.sort((a, b) =>
      DateTimeService.sort(
        { date: a.date, format },
        { date: b.date, format },
        DateTimeService.SORT_SET.ASC
      )
    );
  },
};

export default AggregateData;