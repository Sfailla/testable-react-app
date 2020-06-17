import React from 'react';
import { Form, FormGroup, FormLabel, FormInput } from '../forms/Form';
import { createUseStyles } from 'react-jss';
import { Button, ButtonGroup } from '../buttons/Button';

const useStyles = createUseStyles(theme => ({
	card: {
		width: '600px',
		height: '400px',
		margin: '0 auto',
		backgroundColor: '#333',
		borderRadius: '5px',
		boxShadow: theme.shadows[8]
	},
	title: {
		fontSize: '20px',
		fontWeight: '500',
		letterSpacing: '3px',
		color: theme.palette.common.white,
		paddingBottom: theme.spacing(1)
	}
}));

function RegisterCard() {
	const classes = useStyles();
	return (
		<div className={classes.card}>
			<Form>
				<h3 className={classes.title}>Register Form</h3>
				<FormGroup>
					<FormLabel text="Name" htmlFor="name" />
					<FormInput type="text" name="name" placeholder="name" />
				</FormGroup>

				<FormGroup>
					<FormLabel text="Password" htmlFor="password" />
					<FormInput
						type="password"
						name="password"
						placeholder="password"
					/>
				</FormGroup>

				<FormGroup>
					<FormLabel
						text="Confirm Password"
						htmlFor="confirm-password"
					/>
					<FormInput
						type="password"
						name="confirm-password"
						placeholder="confirm password"
					/>
				</FormGroup>

				<ButtonGroup>
					<Button variant="square" type="submit" text="Submit" />
					<Button variant="square" type="button" text="Cancel" />
				</ButtonGroup>
			</Form>
		</div>
	);
}

export default RegisterCard;
