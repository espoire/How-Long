const el = document.getElementById('how-long');
el.innerHTML = getHowLong();

function getHowLong() {
  const when = new Date('2022-04-22 10:55 PM');
  const now = new Date();
  const interval = when - now;

  return millisToText(interval);
}

function millisToText(millis) {
  const units = [
    {name: 'day', millis: 1000 * 60 * 60 * 24},
    {name: 'hour', millis: 1000 * 60 * 60},
    {name: 'minute', millis: 1000 * 60},
    {name: 'second', millis: 1000},
    {name: 'millisecond', millis: 1},
  ];

  let amount;
  let unit;
  for(unit of units) {
    amount = Math.floor(millis / unit.millis);
    if(amount >= 1) break;
  }
  
  const plural = (amount > 1 ? 's' : '')
  return `${amount} ${unit.name}${plural}`;
}