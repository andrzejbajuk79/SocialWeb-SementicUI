import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import FormInput from '../form-input/form-input.component';

class EventForm extends Component {
	state = {
		title: '',
		date: '',
		city: '',
		venue: '',
		hostedBy: ''
	};
	handleFormSubmit = e => {
		e.preventDefault();
		this.props.createEvent(this.state)
	};
	handleInputChange = ({ target: { name, value } }) => {
		this.setState({ [name]: value });
	};
	render() {
		const { cancelFormOpen } = this.props;
		const { title, date, city, venue, hostedBy } = this.state;
		return (
			//snippet  s_3_4_3
			<Segment>
				<Form autoComplete="off" onSubmit={this.handleFormSubmit}>
					<FormInput
						type="text"
						name="title"
						value={title}
						onChange={this.handleInputChange}
						label="Event Title"
						required
					/>
					<Form.Field>
						<label>Event Date</label>
						<input
							value={date}
							name="date"
							onChange={this.handleInputChange}
							type="date"
							placeholder="Event Date"
						/>
					</Form.Field>

					<Form.Field>
						<label>City</label>
						<input
							value={city}
							name="city"
							onChange={this.handleInputChange}
							placeholder="City event is taking place"
						/>
					</Form.Field>

					<Form.Field>
						<label>Venue</label>
						<input
							value={venue}
							name="venue"
							onChange={this.handleInputChange}
							placeholder="Enter the Venue of the event"
						/>
					</Form.Field>
					<Form.Field>
						<label>Hosted By</label>
						<input
							value={hostedBy}
							name="hostedBy"
							onChange={this.handleInputChange}
							placeholder="Enter the name of person hosting"
						/>
					</Form.Field>
					<Button positive type="submit">
						Submit
					</Button>
					<Button onClick={cancelFormOpen} type="button">
						Cancel
					</Button>
				</Form>
			</Segment>
		);
	}
}
export default EventForm;

// <Form.Field>
// 	<label>Event Title</label>
// 	<input
// 		onChange={this.handleInputChange}
// 		name="title"
// 		value={title}
// 		placeholder="Event title"
// 	/>
// </Form.Field></Form.Field>

// <Form.Field>
// <label>Event Date</label>
// <input
// 	value={date}
// 	name="date"
// 	onChange={this.handleInputChange}
// 	type="date"
// 	placeholder="Event Date"
// />
// </Form.Field>

// <Form.Field>
// <label>City</label>
// <input
// 	value={city}
// 	name="city"
// 	onChange={this.handleInputChange}
// 	placeholder="City event is taking place"
// />
// </Form.Field>
