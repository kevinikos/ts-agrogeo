import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { home } from 'data/data';

const Logos: React.FC = () => {
	return (
		<Container className='w-full py-12'>
			<Stack className=' text-black justify-center items-center mt-12'>
				<Typography
					variant='h4'
					component='h2'
					className='font-bold max-w-2xl text-center'
					gutterBottom
				>
					{home.logos.title}
				</Typography>
				<Typography className='text-slate-600 text-center'>
					{home.logos.copy}
				</Typography>
				<Stack className='justify-center items-center flex-row flex-wrap gap-4 max-w-full overflow-hidden mt-12'>
					<img
						src={require('assets/img/logo-1.png')}
						alt='logo powiatu kępińskiego'
						className='logoItem'
					/>
					<img
						src={require('assets/img/logo-3.png')}
						alt='herb Ostrzeszowa'
						className='logoItem'
					/>
					<img
						src={require('assets/img/logo-2.png')}
						alt='logo gminy Gilowice'
						className='logoItem'
					/>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Logos;
