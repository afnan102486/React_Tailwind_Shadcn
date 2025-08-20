import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Box, Typography, IconButton, Badge, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
}));

export default function Navbar({ mode, toggleTheme }) {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <AppBar 
      position="sticky"
      sx={{ 
        backgroundColor: 'primary.main',
        boxShadow: 3,
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { xs: 2, sm: 3 } }}>
        <StyledLink to="/">
          <StoreIcon sx={{ mr: 1, fontSize: '2rem' }} />
          <Typography 
            variant="h6" 
            component="div"
            sx={{ 
              fontWeight: 'bold',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            E-Shop
          </Typography>
        </StyledLink>

        <Box sx={{ flexGrow: 1 }} />

        {/* Theme Toggle */}
        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>

        {/* Cart Link */}
        <IconButton 
          component={Link}
          to="/cart"
          size="large"
          color="inherit"
          sx={{ position: 'relative' }}
        >
          <Badge 
            badgeContent={cartCount} 
            color="secondary"
            invisible={cartCount === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: -3,
                top: 5,
              }
            }}
          >
            <ShoppingCartIcon />
          </Badge>
          <Typography 
            variant="body1" 
            sx={{ ml: 1, display: { xs: 'none', md: 'block' } }}
          >
            Cart
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
