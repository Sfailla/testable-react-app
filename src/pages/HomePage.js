import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import image from '../images/test-react.png';

const useStyles = createUseStyles(theme => ({
	root: {
		paddingTop: theme.spacing(10),
		textAlign: 'center'
	},
	card: {
		width: '440px',
		height: '360px',
		border: `2px solid ${theme.palette.grey[500]}`,
		borderRadius: '16px',
		padding: theme.spacing(2),
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',

		padding: theme.spacing(1, 1, 1, 2)
	},
	title: {
		color: theme.palette.primary.light,
		fontSize: '30px',
		textAlign: 'center',
		backgroundColor: theme.palette.primary.light
	},
	button: {
		width: '100%',
		height: '30px',
		textTransform: 'uppercase',
		outline: 'none',
		borderRadius: '3px',
		border: 'none',
		backgroundColor: theme.palette.primary.light,
		'&:not(:last-of-type)': {
			marginBottom: '10px'
		}
	},
	wrapper: {
		width: '400px',
		margin: '0 auto'
	},
	image: {
		width: '100%'
	}
}));

const HomePage = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.root}>
			<h1 className={classes.heading}>Welcome To Testable React!</h1>
			<div className={classes.card}>
				<div className={classes.wrapper}>
					<h4 className={classes.title}>Click Down Below</h4>
					<img
						src={image}
						alt="react-image"
						className={classes.image}
					/>
					<button className={classes.button}>Open App</button>
					<button className={classes.button}>close Window</button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
