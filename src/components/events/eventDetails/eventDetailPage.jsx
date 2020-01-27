import React from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'


import EventDetailInfo from './eventDetailInfo';
import EventDetailChat from './eventDetailChat';
import EventDetailSidebar from './eventDetailSidebar';
import EventDetailHeader from './eventDetailHeader';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if(eventId && state.events.length >0){
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return event
}

const EventDetailPage = (event) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailHeader event={event} />
        <EventDetailInfo event={event} />
        <EventDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  )
}


export default connect(mapState)(EventDetailPage);
// rcc, rafc