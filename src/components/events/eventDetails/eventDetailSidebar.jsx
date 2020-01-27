import React, { Fragment } from 'react'
import { Segment, Item, Label, List } from 'semantic-ui-react'

const EventDetailSidebar = ({ attendees }) => {
  const isHost = false;
  return (
    // s_8.6.4
    <Fragment>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
      {attendees && attendees.length}
        {attendees && attendees.length ===1 ?' czlowiek ':' ludzi '} weźmie udzial
          </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees && attendees.map(attendee => (
            <Item.Group divided>
              <Item key={attendee.id} style={{ position: 'relative' }}>
                {isHost && <Label
                  style={{ position: 'absolute' }}
                  color='orange'
                  ribbon='right'
                >
                  Host
                </Label>}

                <Item.Image size='tiny' src={attendee.photoURL} />
                <Item.Content verticalAlign='middle'>
                  <Item.Header as='h3'>{attendee.name} </Item.Header>
                </Item.Content>
              </Item>
            </Item.Group>
          ))}

        </List>
      </Segment>
    </Fragment>
  )
}


export default EventDetailSidebar