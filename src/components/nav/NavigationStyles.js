import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
	list: {
		listStyle: 'none',
		display: 'flex'
	},
	listItem: {
		'& a': {
			color: theme.palette.common.white,
			textDecoration: 'none',
			transition: 'color .2s linear'
		},
		'& a:hover': {
			color: theme.palette.primary.light
		},
		'&:not(:last-of-type)': {
			paddingRight: theme.spacing(1)
		}
	}
}));
