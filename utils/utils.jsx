export function addMoreThanOneHandlerIfExis(cb1, cb2) {
  return () => {
    cb1 && cb1()
    cb2 && cb2()
  }
}

function* genId() {
  let id = 0
  while(true) {
    yield `generated_counter_id_${++id}`
  }
}

export const getId = genId()

export function formatCurrency(currencyValue) {
  if (currencyValue !== 0 && !currencyValue) return;

  const currencyFormat = new Intl.NumberFormat("am-ET", {
    style: "currency",
    currency: "ETB",
  }).format(parseFloat(currencyValue));
  return currencyFormat;
}

export function formatNumber(number) {
  const formatter = new Intl.NumberFormat("en-US");

  const formattedNumber = formatter.format(number);
  return formattedNumber;
}

export function formatNumberWithDecimal(number) {
  const formatter = new Intl.NumberFormat("en-US", {
    useGrouping: true,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedNumber = formatter.format(number);
  return formattedNumber;
}
