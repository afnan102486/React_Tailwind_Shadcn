import { useGetProductsQuery } from '../features/products/productsApi';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import { Box, Container, Typography, CircularProgress, Alert, AlertTitle, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

export default function Home() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <CircularProgress color="primary" size={60} />
    </Box>
  );

  if (error) return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2
    }}>
      <Alert severity="error" sx={{ maxWidth: 500 }}>
        <AlertTitle>Error loading products</AlertTitle>
        We couldn't load the products. Please try again later.
      </Alert>
    </Box>
  );

  const filteredProducts = products?.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ 
      minHeight: '100vh',
      py: 8,
      backgroundColor: 'background.default'
    }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', sm: '3rem', lg: '3.5rem' }
              
            }}
          >
            Discover Amazing Products
          </Typography>
          <Typography 
            variant="h6" 
            component="p"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Shop the latest collection of premium products
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ 
          mb: 6,
          maxWidth: 600,
          mx: 'auto'
        }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
                backgroundColor: 'background.paper'
              }
            }}
          />
        </Box>

        {/* Products Grid with Fixed Width */}
        {filteredProducts?.length === 0 ? (
          <Box sx={{ 
            textAlign: 'center', 
            py: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <SentimentDissatisfiedIcon sx={{ fontSize: 60, color: 'text.disabled', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              No products found
            </Typography>
            <Typography color="text.secondary">
              Try adjusting your search or filter to find what you're looking for.
            </Typography>
          </Box>
        ) : (
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 3, 
              justifyContent: 'center' 
            }}
          >
            {filteredProducts?.map((product) => (
              <Box 
                key={product.id} 
                sx={{ 
                  width: 280, // fixed width
                  flexShrink: 0 
                }}
              >
                <ProductCard 
                  product={product} 
                  sx={{ height: '100%' }} 
                />
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
