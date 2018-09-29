export default function eventMustBeHighlighted(eventName) {
  const eventNameUppercased = eventName.toUpperCase();
  const meetupJsUppercased = 'Meetup.js'.toUpperCase();
  const nodeConfArgentinaUppercased = 'NodeConf Argentina'.toUpperCase();

  return (
    eventNameUppercased.includes(meetupJsUppercased) ||
    eventNameUppercased.includes(nodeConfArgentinaUppercased)
  );
}
