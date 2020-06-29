import React from 'react';
import { useStyles } from './HomePageCardStyles';
import { useHistory } from 'react-router-dom';
import image from '../../../images/test-react.png';
import { Button } from '../../buttons/Button';

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
				<Button
					text="Open Next Page"
					variant="square"
					className={classes.button}
					onClick={handleChangeRoute}
				/>

				<Button
					text="close Window"
					variant="square"
					onClick={() => setHiddenClass()}
					className={classes.button}
				/>
			</div>
		</div>
	);
}

export default HomePageCard;
