import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
	card: {
		width: '600px',
		height: 'auto',
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
	},
	button: {
		width: '49%',
		height: '40px',
		color: theme.palette.common.white,
		backgroundColor: theme.palette.tertiary.main
	}
}));
