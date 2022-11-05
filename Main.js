let el = document.getElementById('how-long');
el.innerHTML = getHowLong();

function getHowLong() {
  const interval = getMillis();
  return millisToText(interval);
}

function getMillis() {
  const when = new Date('11/15/2022 10:57 PM');
  const now = new Date();
  const nowInEst = toEst(now);
  const interval = when - nowInEst;

  return interval;
}

function millisToText(millis) {
  const units = [
    // {name: 'month', millis: 1000 * 60 * 60 * 24 * 7 * 4},
    // {name: 'week', millis: 1000 * 60 * 60 * 24 * 7},
    {name: 'day', millis: 1000 * 60 * 60 * 24},
    {name: 'hour', millis: 1000 * 60 * 60},
    {name: 'minute', millis: 1000 * 60},
    {name: 'second', millis: 1000},
    {name: 'millisecond', millis: 1},
  ];

  let amount;
  let unit;
  for(unit of units) {
    amount = millis / unit.millis;

    if(amount >= 2) break;
  }
  
  const plural = (amount > 1 ? 's' : '')
  let amountText = `${Math.floor(amount)}`;
  if (1.05 < amount && amount < 5) {
    amountText = amount.toFixed(1);
  }

  return `${amountText} ${unit.name}${plural}`;
}

function toEst(date) {
  const localOffset = date.getTimezoneOffset();
  const estOffset = 300;
  const delta = estOffset - localOffset;

  return addMinutes(date, delta);
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60 * 1000);
}