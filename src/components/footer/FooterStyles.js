import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
	footer: {
		width: '100%',
		height: '60px',
		color: theme.palette.common.white,
		backgroundColor: theme.palette.tertiary.main,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		position: 'absolute',
		bottom: '0',
		left: '0'
	}
}));
