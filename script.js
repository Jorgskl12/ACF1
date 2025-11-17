// --- FULL 2026 CALENDAR DATA WITH ALL SESSIONS AND TIMEZONES ---
// All times are local to the track. The script will handle UTC conversion automatically.
const calendarData = [
    { round: 1, country: 'Australia', track: 'Melbourne', sprint: false, flagCode: 'au', timeZone: 'Australia/Melbourne', sessions: [ { name: 'Treino Livre 1', date: '2026-01-02T13:30:00' }, { name: 'Treino Livre 2', date: '2026-01-02T17:00:00' }, { name: 'Treino Livre 3', date: '2026-01-03T13:00:00' }, { name: 'Qualifying', date: '2026-01-03T16:00:00' }, { name: 'Corrida', date: '2026-01-04T15:00:00' } ] },
    { round: 2, country: 'China', track: 'Shanghai', sprint: false, flagCode: 'cn', timeZone: 'Asia/Shanghai', sessions: [ { name: 'Treino Livre 1', date: '2026-01-09T13:30:00' }, { name: 'Treino Livre 2', date: '2026-01-09T17:00:00' }, { name: 'Treino Livre 3', date: '2026-01-10T12:00:00' }, { name: 'Qualifying', date: '2026-01-10T15:00:00' }, { name: 'Corrida', date: '2026-01-11T14:00:00' } ] },
    { round: 3, country: 'Malaysia', track: 'Sepang', sprint: false, flagCode: 'my', timeZone: 'Asia/Kuala_Lumpur', sessions: [ { name: 'Treino Livre 1', date: '2026-01-16T13:00:00' }, { name: 'Treino Livre 2', date: '2026-01-16T17:00:00' }, { name: 'Treino Livre 3', date: '2026-01-17T12:00:00' }, { name: 'Qualifying', date: '2026-01-17T15:00:00' }, { name: 'Corrida', date: '2026-01-18T15:00:00' } ] },
    { round: 4, country: 'Japan', track: 'Suzuka', sprint: true, flagCode: 'jp', timeZone: 'Asia/Tokyo', sessions: [ { name: 'Treino Livre 1', date: '2026-01-23T13:30:00' }, { name: 'Sprint Shootout', date: '2026-01-23T17:30:00' }, { name: 'Sprint Race', date: '2026-01-24T15:00:00' }, { name: 'Qualifying', date: '2026-01-24T18:00:00' }, { name: 'Corrida', date: '2026-01-25T14:00:00' } ] },
    { round: 5, country: 'Vietnam', track: 'Hanoi', sprint: false, flagCode: 'vn', timeZone: 'Asia/Ho_Chi_Minh', sessions: [ { name: 'Treino Livre 1', date: '2026-01-30T14:00:00' }, { name: 'Treino Livre 2', date: '2026-01-30T18:00:00' }, { name: 'Treino Livre 3', date: '2026-01-31T13:00:00' }, { name: 'Qualifying', date: '2026-01-31T16:00:00' }, { name: 'Corrida', date: '2026-02-01T15:00:00' } ] },
    { round: 6, country: 'Bahrain', track: 'Sakhir', sprint: false, flagCode: 'bh', timeZone: 'Asia/Bahrain', sessions: [ { name: 'Treino Livre 1', date: '2026-02-06T14:00:00' }, { name: 'Treino Livre 2', date: '2026-02-06T17:00:00' }, { name: 'Treino Livre 3', date: '2026-02-07T14:00:00' }, { name: 'Qualifying', date: '2026-02-07T17:00:00' }, { name: 'Corrida', date: '2026-02-08T18:00:00' } ] },
    { round: 7, country: 'Saudi Arabia', track: 'Jeddah', sprint: false, flagCode: 'sa', timeZone: 'Asia/Riyadh', sessions: [ { name: 'Treino Livre 1', date: '2026-02-13T15:00:00' }, { name: 'Treino Livre 2', date: '2026-02-13T18:00:00' }, { name: 'Treino Livre 3', date: '2026-02-14T15:00:00' }, { name: 'Qualifying', date: '2026-02-14T18:00:00' }, { name: 'Corrida', date: '2026-02-15T20:00:00' } ] },
    { round: 8, country: 'Thailand', track: 'Buriram', sprint: false, flagCode: 'th', timeZone: 'Asia/Bangkok', sessions: [ { name: 'Treino Livre 1', date: '2026-02-20T13:00:00' }, { name: 'Treino Livre 2', date: '2026-02-20T17:00:00' }, { name: 'Treino Livre 3', date: '2026-02-21T12:00:00' }, { name: 'Qualifying', date: '2026-02-21T15:00:00' }, { name: 'Corrida', date: '2026-02-22T15:00:00' } ] },
    { round: 9, country: 'USA', track: 'Miami', sprint: true, flagCode: 'us', timeZone: 'America/New_York', sessions: [ { name: 'Treino Livre 1', date: '2026-02-27T13:30:00' }, { name: 'Sprint Shootout', date: '2026-02-27T17:00:00' }, { name: 'Sprint Race', date: '2026-02-28T12:00:00' }, { name: 'Qualifying', date: '2026-02-28T16:00:00' }, { name: 'Corrida', date: '2026-03-01T15:30:00' } ] },
    { round: 10, country: 'India', track: 'Buddh Int\'l Circuit', sprint: false, flagCode: 'in', timeZone: 'Asia/Kolkata', sessions: [ { name: 'Treino Livre 1', date: '2026-03-06T13:30:00' }, { name: 'Treino Livre 2', date: '2026-03-06T17:00:00' }, { name: 'Treino Livre 3', date: '2026-03-07T12:30:00' }, { name: 'Qualifying', date: '2026-03-07T15:30:00' }, { name: 'Corrida', date: '2026-03-08T15:30:00' } ] },
    { round: 11, country: 'Portugal', track: 'Portimão', sprint: false, flagCode: 'pt', timeZone: 'Europe/Lisbon', sessions: [ { name: 'Treino Livre 1', date: '2026-03-13T13:00:00' }, { name: 'Treino Livre 2', date: '2026-03-13T17:00:00' }, { name: 'Treino Livre 3', date: '2026-03-14T12:00:00' }, { name: 'Qualifying', date: '2026-03-14T15:00:00' }, { name: 'Corrida', date: '2026-03-15T15:00:00' } ] },
    { round: 12, country: 'Canada', track: 'Montreal', sprint: true, flagCode: 'ca', timeZone: 'America/Toronto', sessions: [ { name: 'Treino Livre 1', date: '2026-03-20T13:30:00' }, { name: 'Sprint Shootout', date: '2026-03-20T17:30:00' }, { name: 'Sprint Race', date: '2026-03-21T12:00:00' }, { name: 'Qualifying', date: '2026-03-21T16:00:00' }, { name: 'Corrida', date: '2026-03-22T14:00:00' } ] },
    { round: 13, country: 'Azerbaijan', track: 'Baku', sprint: false, flagCode: 'az', timeZone: 'Asia/Baku', sessions: [ { name: 'Treino Livre 1', date: '2026-03-27T13:00:00' }, { name: 'Treino Livre 2', date: '2026-03-27T17:00:00' }, { name: 'Treino Livre 3', date: '2026-03-28T12:00:00' }, { name: 'Qualifying', date: '2026-03-28T15:00:00' }, { name: 'Corrida', date: '2026-03-29T16:00:00' } ] },
    { round: 14, country: 'Monaco', track: 'Monte Carlo', sprint: false, flagCode: 'mc', timeZone: 'Europe/Monaco', sessions: [ { name: 'Treino Livre 1', date: '2026-04-03T13:30:00' }, { name: 'Treino Livre 2', date: '2026-04-03T17:00:00' }, { name: 'Treino Livre 3', date: '2026-04-04T12:00:00' }, { name: 'Qualifying', date: '2026-04-04T15:00:00' }, { name: 'Corrida', date: '2026-04-05T15:00:00' } ] },
    { round: 15, country: 'Spain', track: 'Barcelona', sprint: false, flagCode: 'es', timeZone: 'Europe/Madrid', sessions: [ { name: 'Treino Livre 1', date: '2026-04-10T13:00:00' }, { name: 'Treino Livre 2', date: '2026-04-10T17:00:00' }, { name: 'Treino Livre 3', date: '2026-04-11T12:00:00' }, { name: 'Qualifying', date: '2026-04-11T15:00:00' }, { name: 'Corrida', date: '2026-04-12T15:00:00' } ] },
    { round: 16, country: 'Turkey', track: 'Istanbul Park', sprint: false, flagCode: 'tr', timeZone: 'Europe/Istanbul', sessions: [ { name: 'Treino Livre 1', date: '2026-04-17T13:00:00' }, { name: 'Treino Livre 2', date: '2026-04-17T17:00:00' }, { name: 'Treino Livre 3', date: '2026-04-18T12:00:00' }, { name: 'Qualifying', date: '2026-04-18T15:00:00' }, { name: 'Corrida', date: '2026-04-19T15:00:00' } ] },
    { round: 17, country: 'Austria', track: 'Spielberg', sprint: true, flagCode: 'at', timeZone: 'Europe/Vienna', sessions: [ { name: 'Treino Livre 1', date: '2026-04-24T12:30:00' }, { name: 'Sprint Shootout', date: '2026-04-24T16:30:00' }, { name: 'Sprint Race', date: '2026-04-25T12:00:00' }, { name: 'Qualifying', date: '2026-04-25T16:00:00' }, { name: 'Corrida', date: '2026-04-26T15:00:00' } ] },
    { round: 18, country: 'Great Britain', track: 'Silverstone', sprint: false, flagCode: 'gb', timeZone: 'Europe/London', sessions: [ { name: 'Treino Livre 1', date: '2026-05-01T13:00:00' }, { name: 'Treino Livre 2', date: '2026-05-01T17:00:00' }, { name: 'Treino Livre 3', date: '2026-05-02T12:00:00' }, { name: 'Qualifying', date: '2026-05-02T15:00:00' }, { name: 'Corrida', date: '2026-05-03T15:00:00' } ] },
    { round: 19, country: 'Germany', track: 'Hockenheim', sprint: false, flagCode: 'de', timeZone: 'Europe/Berlin', sessions: [ { name: 'Treino Livre 1', date: '2026-05-08T13:00:00' }, { name: 'Treino Livre 2', date: '2026-05-08T17:00:00' }, { name: 'Treino Livre 3', date: '2026-05-09T12:00:00' }, { name: 'Qualifying', date: '2026-05-09T15:00:00' }, { name: 'Corrida', date: '2026-05-10T15:00:00' } ] },
    { round: 20, country: 'Belgium', track: 'Spa-Francorchamps', sprint: true, flagCode: 'be', timeZone: 'Europe/Brussels', sessions: [ { name: 'Treino Livre 1', date: '2026-05-15T13:30:00' }, { name: 'Sprint Shootout', date: '2026-05-15T17:30:00' }, { name: 'Sprint Race', date: '2026-05-16T12:30:00' }, { name: 'Qualifying', date: '2026-05-16T16:00:00' }, { name: 'Corrida', date: '2026-05-17T15:00:00' } ] },
    { round: 21, country: 'Hungary', track: 'Budapest', sprint: false, flagCode: 'hu', timeZone: 'Europe/Budapest', sessions: [ { name: 'Treino Livre 1', date: '2026-05-22T13:00:00' }, { name: 'Treino Livre 2', date: '2026-05-22T17:00:00' }, { name: 'Treino Livre 3', date: '2026-05-23T12:00:00' }, { name: 'Qualifying', date: '2026-05-23T15:00:00' }, { name: 'Corrida', date: '2026-05-24T15:00:00' } ] },
    { round: 22, country: 'South Africa', track: 'Kyalami', sprint: false, flagCode: 'za', timeZone: 'Africa/Johannesburg', sessions: [ { name: 'Treino Livre 1', date: '2026-05-29T12:00:00' }, { name: 'Treino Livre 2', date: '2026-05-29T16:00:00' }, { name: 'Treino Livre 3', date: '2026-05-30T11:00:00' }, { name: 'Qualifying', date: '2026-05-30T14:00:00' }, { name: 'Corrida', date: '2026-05-31T14:00:00' } ] },
    { round: 23, country: 'Netherlands', track: 'Zandvoort', sprint: false, flagCode: 'nl', timeZone: 'Europe/Amsterdam', sessions: [ { name: 'Treino Livre 1', date: '2026-06-05T12:30:00' }, { name: 'Treino Livre 2', date: '2026-06-05T16:00:00' }, { name: 'Treino Livre 3', date: '2026-06-06T11:30:00' }, { name: 'Qualifying', date: '2026-06-06T15:00:00' }, { name: 'Corrida', date: '2026-06-07T15:00:00' } ] },
    { round: 24, country: 'Argentina', track: 'Termas de Río Hondo', sprint: false, flagCode: 'ar', timeZone: 'America/Argentina/Buenos_Aires', sessions: [ { name: 'Treino Livre 1', date: '2026-06-12T12:00:00' }, { name: 'Treino Livre 2', date: '2026-06-12T16:00:00' }, { name: 'Treino Livre 3', date: '2026-06-13T11:00:00' }, { name: 'Qualifying', date: '2026-06-13T14:00:00' }, { name: 'Corrida', date: '2026-06-14T14:00:00' } ] },
    { round: 25, country: 'Italy', track: 'Monza', sprint: true, flagCode: 'it', timeZone: 'Europe/Rome', sessions: [ { name: 'Treino Livre 1', date: '2026-06-19T13:30:00' }, { name: 'Sprint Shootout', date: '2026-06-19T17:30:00' }, { name: 'Sprint Race', date: '2026-06-20T12:00:00' }, { name: 'Qualifying', date: '2026-06-20T16:00:00' }, { name: 'Corrida', date: '2026-06-21T15:00:00' } ] },
    { round: 26, country: 'Spain', track: 'Madrid', sprint: false, flagCode: 'es', timeZone: 'Europe/Madrid', sessions: [ { name: 'Treino Livre 1', date: '2026-06-26T13:00:00' }, { name: 'Treino Livre 2', date: '2026-06-26T17:00:00' }, { name: 'Treino Livre 3', date: '2026-06-27T12:00:00' }, { name: 'Qualifying', date: '2026-06-27T15:00:00' }, { name: 'Corrida', date: '2026-06-28T15:00:00' } ] },
    { round: 27, country: 'USA', track: 'Road America', sprint: false, flagCode: 'us', timeZone: 'America/Chicago', sessions: [ { name: 'Treino Livre 1', date: '2026-07-03T12:00:00' }, { name: 'Treino Livre 2', date: '2026-07-03T16:00:00' }, { name: 'Treino Livre 3', date: '2026-07-04T11:00:00' }, { name: 'Qualifying', date: '2026-07-04T14:00:00' }, { name: 'Corrida', date: '2026-07-05T14:00:00' } ] },
    { round: 28, country: 'Singapore', track: 'Marina Bay', sprint: false, flagCode: 'sg', timeZone: 'Asia/Singapore', sessions: [ { name: 'Treino Livre 1', date: '2026-07-10T17:30:00' }, { name: 'Treino Livre 2', date: '2026-07-10T21:00:00' }, { name: 'Treino Livre 3', date: '2026-07-11T17:30:00' }, { name: 'Qualifying', date: '2026-07-11T20:00:00' }, { name: 'Corrida', date: '2026-07-12T20:00:00' } ] },
    { round: 29, country: 'USA', track: 'Austin (COTA)', sprint: true, flagCode: 'us', timeZone: 'America/Chicago', sessions: [ { name: 'Treino Livre 1', date: '2026-07-17T12:30:00' }, { name: 'Sprint Shootout', date: '2026-07-17T16:30:00' }, { name: 'Sprint Race', date: '2026-07-18T12:00:00' }, { name: 'Qualifying', date: '2026-07-18T16:00:00' }, { name: 'Corrida', date: '2026-07-19T14:00:00' } ] },
    { round: 30, country: 'Mexico', track: 'Mexico City', sprint: false, flagCode: 'mx', timeZone: 'America/Mexico_City', sessions: [ { name: 'Treino Livre 1', date: '2026-07-24T12:00:00' }, { name: 'Treino Livre 2', date: '2026-07-24T16:00:00' }, { name: 'Treino Livre 3', date: '2026-07-25T11:00:00' }, { name: 'Qualifying', date: '2026-07-25T14:00:00' }, { name: 'Corrida', date: '2026-07-26T14:00:00' } ] },
    { round: 31, country: 'Brazil', track: 'São Paulo', sprint: true, flagCode: 'br', timeZone: 'America/Sao_Paulo', sessions: [ { name: 'Treino Livre 1', date: '2026-07-31T11:30:00' }, { name: 'Sprint Shootout', date: '2026-07-31T15:30:00' }, { name: 'Sprint Race', date: '2026-08-01T11:00:00' }, { name: 'Qualifying', date: '2026-08-01T15:00:00' }, { name: 'Corrida', date: '2026-08-02T14:00:00' } ] },
    { round: 32, country: 'USA', track: 'Las Vegas', sprint: true, flagCode: 'us', timeZone: 'America/Los_Angeles', sessions: [ { name: 'Treino Livre 1', date: '2026-08-07T18:30:00' }, { name: 'Sprint Shootout', date: '2026-08-07T22:00:00' }, { name: 'Sprint Race', date: '2026-08-08T18:00:00' }, { name: 'Qualifying', date: '2026-08-08T22:00:00' }, { name: 'Corrida', date: '2026-08-09T22:00:00' } ] },
    { round: 33, country: 'Qatar', track: 'Losail', sprint: false, flagCode: 'qa', timeZone: 'Asia/Qatar', sessions: [ { name: 'Treino Livre 1', date: '2026-08-14T14:30:00' }, { name: 'Treino Livre 2', date: '2026-08-14T18:00:00' }, { name: 'Treino Livre 3', date: '2026-08-15T15:00:00' }, { name: 'Qualifying', date: '2026-08-15T18:00:00' }, { name: 'Corrida', date: '2026-08-16T18:00:00' } ] },
    { round: 34, country: 'France', track: 'Paul Ricard', sprint: true, flagCode: 'fr', timeZone: 'Europe/Paris', sessions: [ { name: 'Treino Livre 1', date: '2026-08-21T13:00:00' }, { name: 'Sprint Shootout', date: '2026-08-21T17:00:00' }, { name: 'Sprint Race', date: '2026-08-22T12:00:00' }, { name: 'Qualifying', date: '2026-08-22T16:00:00' }, { name: 'Corrida', date: '2026-08-23T15:00:00' } ] },
    { round: 35, country: 'Germany', track: 'Nürburgring', sprint: false, flagCode: 'de', timeZone: 'Europe/Berlin', sessions: [ { name: 'Treino Livre 1', date: '2026-08-28T13:00:00' }, { name: 'Treino Livre 2', date: '2026-08-28T17:00:00' }, { name: 'Treino Livre 3', date: '2026-08-29T12:00:00' }, { name: 'Qualifying', date: '2026-08-29T15:00:00' }, { name: 'Corrida', date: '2026-08-30T15:00:00' } ] },
    { round: 36, country: 'France', track: 'Le Mans', sprint: false, flagCode: 'fr', timeZone: 'Europe/Paris', sessions: [ { name: 'Treino Livre 1', date: '2026-09-04T13:00:00' }, { name: 'Treino Livre 2', date: '2026-09-04T17:00:00' }, { name: 'Treino Livre 3', date: '2026-09-05T12:00:00' }, { name: 'Qualifying', date: '2026-09-05T15:00:00' }, { name: 'Corrida', date: '2026-09-06T15:00:00' } ] },
    { round: 37, country: 'Italy', track: 'Imola', sprint: true, flagCode: 'it', timeZone: 'Europe/Rome', sessions: [ { name: 'Treino Livre 1', date: '2026-09-11T13:30:00' }, { name: 'Sprint Shootout', date: '2026-09-11T17:00:00' }, { name: 'Sprint Race', date: '2026-09-12T12:00:00' }, { name: 'Qualifying', date: '2026-09-12T15:30:00' }, { name: 'Corrida', date: '2026-09-13T14:00:00' } ] },
    { round: 38, country: 'Italy', track: 'Mugello', sprint: true, flagCode: 'it', timeZone: 'Europe/Rome', sessions: [ { name: 'Treino Livre 1', date: '2026-09-18T13:00:00' }, { name: 'Sprint Shootout', date: '2026-09-18T17:00:00' }, { name: 'Sprint Race', date: '2026-09-19T12:00:00' }, { name: 'Qualifying', date: '2026-09-19T15:00:00' }, { name: 'Corrida', date: '2026-09-20T15:00:00' } ] },
    { round: 39, country: 'Spain', track: 'Jerez', sprint: false, flagCode: 'es', timeZone: 'Europe/Madrid', sessions: [ { name: 'Treino Livre 1', date: '2026-09-25T13:00:00' }, { name: 'Treino Livre 2', date: '2026-09-25T17:00:00' }, { name: 'Treino Livre 3', date: '2026-09-26T12:00:00' }, { name: 'Qualifying', date: '2026-09-26T15:00:00' }, { name: 'Corrida', date: '2026-09-27T15:00:00' } ] },
    { round: 40, country: 'Abu Dhabi', track: 'Yas Marina', sprint: true, flagCode: 'ae', timeZone: 'Asia/Dubai', sessions: [ { name: 'Treino Livre 1', date: '2026-10-02T14:00:00' }, { name: 'Sprint Shootout', date: '2026-10-02T18:00:00' }, { name: 'Sprint Race', date: '2026-10-03T15:00:00' }, { name: 'Qualifying', date: '2026-10-03T18:00:00' }, { name: 'Corrida Final', date: '2026-10-04T17:00:00' } ] }
];

// --- TIMEZONE CONVERSION AND DATE HELPERS ---
/**
 * [CORRECTED FUNCTION]
 * Converts a local date/time string from a specific timezone into a valid Date object
 * that represents the correct moment in time, regardless of the user's local timezone.
 * @param {string} localDateTimeString - The date and time string, e.g., "2026-01-04T15:00:00".
 * @param {string} timeZone - The IANA timezone name, e.g., "Australia/Melbourne".
 * @returns {Date} A valid Date object with the correct timestamp.
 */
function convertToDateObject(localDateTimeString, timeZone) {
    // Split the date/time string into its components.
    const [datePart, timePart] = localDateTimeString.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute, second] = timePart.split(':').map(Number);

    // Create a temporary UTC date object. This represents the "wall clock" time, but is initially tagged as UTC.
    const tempUtcDate = new Date(Date.UTC(year, month - 1, day, hour, minute, second || 0));

    // To find the correct timezone offset, we format this temporary date into the target timezone.
    // We use the 'sv-SE' locale because it produces a clean 'YYYY-MM-DD HH:mm:ss' format.
    const targetTimeFormatter = new Intl.DateTimeFormat('sv-SE', {
        timeZone: timeZone,
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    // This string now represents what time it would be in the target timezone for our temp UTC date.
    const localTimeInTargetZoneStr = targetTimeFormatter.format(tempUtcDate);

    // Create a new Date object from this formatted string, again treating it as UTC.
    const localTimeInTargetZoneDate = new Date(localTimeInTargetZoneStr.replace(' ', 'T') + 'Z');

    // The difference between our temporary UTC date and the timezone-adjusted date is the offset.
    const offset = tempUtcDate.getTime() - localTimeInTargetZoneDate.getTime();

    // We apply this offset to our original time to get the true UTC timestamp.
    const correctTimestamp = tempUtcDate.getTime() + offset;
    return new Date(correctTimestamp);
}


// --- CORE LOGIC ---
const allSessions = calendarData.flatMap(race =>
    race.sessions.map(session => ({
        ...session,
        round: race.round,
        country: race.country,
        track: race.track,
        flagCode: race.flagCode,
        timeZone: race.timeZone,
        sessionDateObj: convertToDateObject(session.date, race.timeZone)
    }))
).sort((a, b) => a.sessionDateObj - b.sessionDateObj); // Sort all sessions chronologically

function findNextSession() {
    const now = new Date();
    return allSessions.find(session => session.sessionDateObj > now) || null;
}

// --- UI AND INITIALIZATION FUNCTIONS ---
function setupHubTabs() {
    const tabContainer = document.querySelector('.hub-tabs');
    if (!tabContainer) return;
    const tabLinks = tabContainer.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.hub-content .tab-content');
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
            document.getElementById(tabId)?.classList.add('active');
        });
    });
}

function setupRulesTabs() {
    const tabContainer = document.querySelector('.rules-subnav');
    if (!tabContainer) return;
    const tabLinks = tabContainer.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tabs-content .tab-content');
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
            document.getElementById(tabId)?.classList.add('active');
        });
    });
}

function setupCalendarScroll() {
    const scrollContainer = document.querySelector('.calendar-scroll-container');
    const leftButton = document.getElementById('scroll-left');
    const rightButton = document.getElementById('scroll-right');
    if (!scrollContainer || !leftButton || !rightButton) return;
    const scrollAmount = 380 + 15;
    rightButton.addEventListener('click', () => scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
    leftButton.addEventListener('click', () => scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
}

function generateCalendarCards() {
    const container = document.querySelector('.calendar-scroll-container');
    if (!container) return;
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
    container.innerHTML = calendarData.map(race => {
        const raceStartDate = new Date(race.sessions[0].date.split('T')[0] + 'T00:00:00');
        const raceEndDate = new Date(race.sessions[race.sessions.length - 1].date.split('T')[0] + 'T00:00:00');
        
        const monthStart = months[raceStartDate.getUTCMonth()];
        const monthEnd = months[raceEndDate.getUTCMonth()];

        const dayStart = String(raceStartDate.getUTCDate()).padStart(2, '0');
        const dayEnd = String(raceEndDate.getUTCDate()).padStart(2, '0');

        let dateDisplay;
        if (monthStart === monthEnd) {
            dateDisplay = `<div class="month">${monthStart}</div><div class="days">${dayStart}-${dayEnd}</div>`;
        } else {
            dateDisplay = `<div class="month">${monthStart} / ${monthEnd}</div><div class="days">${dayStart}-${dayEnd}</div>`;
        }

        return `
            <div class="race-item">
                <img src="https://flagcdn.com/w80/${race.flagCode}.png" alt="${race.country} Flag" class="race-item-flag">
                <div class="race-item-date">
                    ${dateDisplay}
                </div>
                <div class="race-item-details">
                    <div class="round-track">ROUND ${race.round} | ${race.track}</div>
                    <div class="country">${race.country}</div>
                </div>
                ${race.sprint ? '<span class="race-item-sprint">SPRINT</span>' : ''}
            </div>
        `;
    }).join('');
}

function initializeCountdown(nextSession) {
    const countdownElement = document.getElementById('countdown');
    const nextRaceNameEl = document.getElementById('next-race-name');
    const nextRaceTrackEl = document.getElementById('next-race-track');
    if (!countdownElement || !nextRaceNameEl || !nextRaceTrackEl) return;
    if (!nextSession) {
        nextRaceNameEl.textContent = "Temporada Concluída";
        nextRaceTrackEl.textContent = "Aguarde o calendário de 2027!";
        countdownElement.innerHTML = `<div>00<small>d</small></div><div>00<small>h</small></div><div>00<small>m</small></div><div>00<small>s</small></div>`;
        return;
    }
    nextRaceNameEl.textContent = nextSession.country;
    nextRaceTrackEl.textContent = `${nextSession.name} • ${nextSession.track}`;
    const container = document.querySelector('.next-race-container');
    if (container) {
        const flagUrl = `https://flagcdn.com/w320/${nextSession.flagCode}.png`;
        container.style.setProperty('--next-race-flag-url', `url(${flagUrl})`);
    }
    const sessionTime = nextSession.sessionDateObj.getTime();
    if (window.countdownTimer) {
        clearInterval(window.countdownTimer);
    }
    window.countdownTimer = setInterval(() => {
        const now = new Date().getTime();
        const distance = sessionTime - now;
        if (distance < 0) {
            clearInterval(window.countdownTimer);
            // Instead of reloading, let's find the new next session
            initializeCountdown(findNextSession());
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `
            <div>${String(days).padStart(2, '0')}<small>d</small></div>
            <div>${String(hours).padStart(2, '0')}<small>h</small></div>
            <div>${String(minutes).padStart(2, '0')}<small>m</small></div>
            <div>${String(seconds).padStart(2, '0')}<small>s</small></div>
        `;
    }, 1000);
}

// --- EXECUÇÃO PRINCIPAL ---
document.addEventListener('DOMContentLoaded', () => {

    // LÓGICA PARA HEADER TRANSPARENTE AO ROLAR
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // LÓGICA DO RODAPÉ DINÂMICO
    const localInfoEl = document.getElementById('local-info');
    if (localInfoEl) {
        const localTimeEl = document.getElementById('local-time');
        const statusDotEl = document.getElementById('status-dot');
        const statusTextEl = document.getElementById('status-text');

        // 1. ATUALIZAR LOCALIZAÇÃO (usando uma API sem CORS e mais confiável)
        fetch('https://ipapi.co/country_name/')
            .then(response => response.text())
            .then(data => {
                localInfoEl.textContent = `LOCAL: ${data || 'DESCONHECIDO'}`;
            })
            .catch(() => {
                localInfoEl.textContent = 'LOCAL: N/A';
            });

        // 2. ATUALIZAR RELÓGIO
        function updateLocalTime() {
            const now = new Date();
            localTimeEl.textContent = now.toLocaleTimeString();
        }
        updateLocalTime();
        setInterval(updateLocalTime, 1000);

        // 3. ATUALIZAR STATUS DA REDE
        function updateNetworkStatus() {
            statusDotEl.className = 'status-dot';
            if (navigator.onLine) {
                 statusDotEl.classList.add('online');
                 statusTextEl.textContent = 'ONLINE';
            } else {
                 statusDotEl.classList.add('offline');
                 statusTextEl.textContent = 'OFFLINE';
            }
        }
        updateNetworkStatus();
        window.addEventListener('online', updateNetworkStatus);
        window.addEventListener('offline', updateNetworkStatus);
    }

    // Funções de setup que rodam em múltiplas páginas
    setupHubTabs();
    setupRulesTabs();
    generateCalendarCards();
    setupCalendarScroll();

    // Lógica do Countdown
    const nextSession = findNextSession();
    initializeCountdown(nextSession);
});