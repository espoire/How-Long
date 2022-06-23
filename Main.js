let el = document.getElementById('how-long');
el.innerHTML = getHowLong();

function getHowLong() {
  const interval = getMillis();
  return millisToText(interval);
}

function getMillis() {
  const when = new Date('6/25/2022 1:00 PM');
  const now = new Date();
  const interval = when - now;

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