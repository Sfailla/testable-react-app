import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
	form: {
		padding: theme.spacing(2, 1)
	},
	formGroup: {
		width: '100%',
		height: 'auto',
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(1, 0)
	},
	label: {
		color: theme.palette.common.white
	},
	input: {
		height: '35px',
		color: theme.palette.tertiary.main,
		padding: theme.spacing(0, 1),
		backgroundColor: theme.palette.grey[500],
		'&::placeholder': {
			color: theme.palette.grey[900]
		},
		'&:focus': {
			fontWeight: 'bold',
			fontSize: '14px'
		}
	}
}));
