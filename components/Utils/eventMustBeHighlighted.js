export default function eventMustBeHighlighted(eventName) {
  const eventNameUppercased = eventName.toUpperCase();

  const devDayArUppercased = 'DevDayAr'.toUpperCase();
  const meetupJsUppercased = 'Meetup.js'.toUpperCase();
  const nodeConfArgentinaUppercased = 'NodeConf Argentina'.toUpperCase();

  return (
    eventNameUppercased.includes(meetupJsUppercased) ||
    eventNameUppercased.includes(nodeConfArgentinaUppercased) ||
    eventNameUppercased.includes(devDayArUppercased)
  );
}
