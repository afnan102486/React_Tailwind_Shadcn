import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { Box, Card, CardMedia, CardContent, Chip, Typography, Rating, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      '&:hover': {
        boxShadow: 6
      }
    }}>
      {/* Product Image */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component={Link}
          to={`/product/${product.id}`}
          sx={{
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey.100',
            p: 2
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          />
        </CardMedia>
      </Box>

      {/* Product Info */}
      <CardContent sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column',
        p: 2
      }}>
        <Box sx={{ mb: 1 }}>
          {/* Category Tag */}
          <Chip
            label={product.category}
            size="small"
            sx={{ 
              mb: 1,
              backgroundColor: 'primary.100',
              color: 'primary.800'
            }}
          />

          {/* Title */}
          <Typography
            component={Link}
            to={`/product/${product.id}`}
            variant="h6"
            sx={{
              mb: 1,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'text.primary',
              '&:hover': {
                color: 'primary.main'
              },
              minHeight: '3em' // Ensures consistent height for 2 lines
            }}
          >
            {product.title}
          </Typography>
        </Box>

        {/* Price & Rating - Pushed to top of remaining space */}
        <Box sx={{ mt: 'auto', mb: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight="bold">
              ${product.price.toFixed(2)}
            </Typography>
            {product.rating && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating
                  value={product.rating.rate}
                  precision={0.1}
                  readOnly
                  size="small"
                />
                <Typography variant="body2" sx={{ ml: 0.5 }}>
                  {product.rating.rate}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Add to Cart Button - Always at bottom */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<ShoppingCartIcon />}
          sx={{ 
            mt: 2,
            textTransform: 'none', 
            fontWeight: 500,
          }}
          onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}