const { Event, EventPublisher, EventTypes } = require('@translense-private-limited/odriyo-lib-event-publisher');

const config = require('../config');

const publisher = new EventPublisher();

const publishEvent = (type, request, data = null, error = null) => {
  if (config.ENVIRONMENT === 'enseedling-local') return false;
  const event = Event.create(type, request, data, error);
  // console.info('Event Created : ', event.id);
  console.info('Event Created : ', JSON.stringify(event));

  publisher.publish(event);

  return true;
};

module.exports = {
  EventTypes,
  publishEvent,
};
