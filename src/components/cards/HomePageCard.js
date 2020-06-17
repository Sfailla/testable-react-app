import React from 'react';

import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';
import image from '../../images/test-react.png';

const useStyles = createUseStyles(theme => ({
	card: {
		width: '450px',
		height: 'auto',
		border: `2px solid ${theme.palette.grey[500]}`,
		borderRadius: '16px',
		display: props => (props.addClass ? 'none' : 'flex'),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'darkviolet',
		padding: theme.spacing(1),
		boxShadow: theme.shadows[5],

		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		'&:hover': {
			boxShadow: theme.shadows[10]
		}
	},
	button: {
		width: '100%',
		height: '35px',
		textTransform: 'uppercase',
		outline: 'none',
		borderRadius: '3px',
		border: 'none',
		letterSpacing: '3px',
		fontWeight: 'bold',
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.light,
		'&:not(:last-of-type)': {
			marginBottom: '10px'
		}
	},
	wrapper: {
		width: '100%'
	},
	banner: {
		width: '100%',
		height: '50px',
		backgroundColor: theme.palette.primary.light,
		borderTopRightRadius: '3px',
		borderTopLeftRadius: '3px'
	},
	image: {
		width: '100%'
	}
}));

function HomePageCard() {
	const [ addClass, setAddClass ] = React.useState(false);
	const history = useHistory();
	const classes = useStyles({ addClass });

	const setHiddenClass = () => {
		setAddClass(true);
	};

	const handleChangeRoute = () => {
		history.push('/forms');
	};

	return (
		<div className={classes.card}>
			<div className={classes.wrapper}>
				<div className={classes.banner} />
				<img
					src={image}
					alt="react-image"
					className={classes.image}
				/>
				<button
					className={classes.button}
					onClick={handleChangeRoute}
				>
					Open Next Page
				</button>
				<button
					onClick={() => setHiddenClass()}
					className={classes.button}
				>
					close Window
				</button>
			</div>
		</div>
	);
}

export default HomePageCard;
