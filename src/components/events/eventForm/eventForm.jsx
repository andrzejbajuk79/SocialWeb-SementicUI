import React, { Component } from 'react';
import { Form, Segment, Button, Grid, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'

import { updateEvent, createEvent } from '../eventActions'
import cuid from 'cuid';
import {TextArea , SelectInput,TextInput,DateInput} from '../../../common';

import {
	combineValidators,
	composeValidators,
	isRequired,
	hasLengthGreaterThan
} from 'revalidate';



const mapState = (state, ownProps) => {
	const eventId = ownProps.match.params.id;
	let event = {}
	if (eventId && state.events.length > 0) {
		event = state.events.filter(event => event.id === eventId)[0]
	}
	return { initialValues: event }
}

const actions = { updateEvent, createEvent }

const validate = combineValidators({
	title: isRequired({ message: 'Nazwa jest wymagane' }),
	category: isRequired({ message: 'Kategoria jest wymagana' }),
	description: composeValidators(
		isRequired({ message: 'Wpisz opis' }),
		hasLengthGreaterThan(10)({ message: 'Opis nie może byc krotszy niz 10 znakow' }))(),
	city: isRequired({ message: 'Miasto jest wymagane' }),
	venue: isRequired({ message: 'miejsce wydarzenia' }),
	date: isRequired({ message: 'Data' }),
})

const category = [
	{ key: 'drinks', text: 'Drinks', value: 'drinks' },
	{ key: 'culture', text: 'Culture', value: 'culture' },
	{ key: 'film', text: 'Film', value: 'film' },
	{ key: 'food', text: 'Food', value: 'food' },
	{ key: 'music', text: 'Music', value: 'music' },
	{ key: 'travel', text: 'Travel', value: 'travel' },
];

class EventForm extends Component {
	onCustomFormSubmit = values => {
		if (this.props.initialValues.id) {
			this.props.updateEvent(values)
			this.props.history.push(`/events/${this.props.initialValues.id}`)
		} else {
			const newEvent = {
				...values,
				id: cuid(),
				hostPhotoURL: 'assets/images/user.png',
				hostedBy: 'Andrzej'
			}
			this.props.createEvent(newEvent);
			this.props.history.push(`/events/${newEvent.id}`)
		}

	};

	render() {
		const { history, initialValues, invalid, submitting, pristine } = this.props
		return (
			<Grid>
				<Grid.Column width={10}>
					<Segment>
						<Header color='teal' content='Więcej o wydarzeniu' />
						<Form autoComplete="off" onSubmit={this.props.handleSubmit(this.onCustomFormSubmit)}>
							<Field name='title' component={TextInput} placeholder='Nazwa' />
							<Field
								options={category}
								// multiple='true'
								name='category'
								component={SelectInput}
								placeholder='Nazwij swoje wydarzenie'
							/>
							<Field name='description' rows='3' component={TextArea} placeholder='Opisz wydarzenie' />
							<Header color='teal' content='Więcej o  lokalizacji' />
							<Field name='city' component={TextInput} placeholder='Miasto' />
							<Field name='venue' component={TextInput} placeholder='Miejsce wydarzenia' />
							<Field name='date' 
							dateFormat='dd LLL yyyy'
							showTimeSelect
							timeFormat='HH:mm'
							component={DateInput}
							 placeholder='data' />
							<Button positive type="submit" disabled={invalid || submitting || pristine}>
								
								Dodaj
				 	</Button>
							<Button onClick={
								initialValues.id
									? () => history.push(`/events/${initialValues.id}`)
									: () => history.push('/events')

							} type="button">
								Anuluj
				  	</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>

		);
	}
}
export default connect(
	mapState, actions)
	(reduxForm({ form: 'eventForm', validate })
		(EventForm));
