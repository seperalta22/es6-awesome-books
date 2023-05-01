// import { DateTime } from '../node_modules/luxon/build/global/luxon.min.js';
import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const dateDiv = document.querySelector('.date');
const dateTime = () => {
  const dt = DateTime.now();
  const formattedDate = dt
    .setLocale('en')
    .toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

  dateDiv.innerHTML = `<p>${formattedDate}</p>`;
};

dateDiv.style.textAlign = 'right';
dateDiv.style.marginRight = '0.9em';

export default dateTime;
