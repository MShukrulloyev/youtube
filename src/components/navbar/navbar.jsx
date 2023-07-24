import { Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom';
import { logo } from '../../constants'
import { colors } from './../../constants/colors';
import { SearchBar } from '../';

const Navbar = () => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={2}
            sx={{ position: 'sticky', top: 0, zIndex: 999, background: colors.primary }}
        >
            <Link to={"/"}>
                <img className='logo' src={logo} alt="logo" height={50} />
            </Link>
            <SearchBar />
            <Box class='boxToNone' />
        </Stack>
    )
}

export default Navbar