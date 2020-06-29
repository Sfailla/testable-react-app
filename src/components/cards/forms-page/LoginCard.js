import React from 'react';
import {
	Form,
	FormGroup,
	FormLabel,
	FormInput
} from '../../forms/Form';
import { useStyles } from './CardStyles';
import { Button, ButtonGroup } from '../../buttons/Button';

function LoginCard() {
	const classes = useStyles();
	return (
		<div className={classes.card}>
			<Form>
				<h3 className={classes.title}>Login Form</h3>
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

				<ButtonGroup>
					<Button
						className={classes.button}
						variant="square"
						type="submit"
						text="Submit"
					/>
					<Button
						className={classes.button}
						variant="square"
						type="button"
						text="Cancel"
					/>
				</ButtonGroup>
			</Form>
		</div>
	);
}

export default LoginCard;
