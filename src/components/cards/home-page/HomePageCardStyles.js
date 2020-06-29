import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
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
		borderRadius: '3px',
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
