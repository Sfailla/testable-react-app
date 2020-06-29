import React from 'react';
import { createUseStyles } from 'react-jss';

import RegisterCard from '../../components/cards/forms-page/RegisterCard';
import LoginCard from '../../components/cards/forms-page/LoginCard';

const useStyles = createUseStyles(theme => ({
	root: {
		height: '100%',
		paddingTop: '50px',
		paddingBottom: '60px'
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: '20px'
	},
	title: {
		padding: theme.spacing(2, 0),
		color: theme.palette.tertiary.main
	}
}));

function FormPage() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h1 className={classes.title}>Forms '🗒️'</h1>
			<div className={classes.container}>
				<RegisterCard />
				<LoginCard />
			</div>
		</div>
	);
}

export default FormPage;
