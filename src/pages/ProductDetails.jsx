import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/products/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
  Divider,
  Stack,
  Grid,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { MyButton } from "@/components/MUI/Button";

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();
  const theme = useTheme();

  if (isLoading)
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="primary" size={60} />
      </Box>
    );

  if (error)
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Alert severity="error" sx={{ maxWidth: 500 }}>
          <AlertTitle>Error loading product</AlertTitle>
          We couldn't load the product details. Please try again later.
        </Alert>
      </Box>
    );

  const MyButtonClicked = () => {
    console.log("MyButton clicked");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Card sx={{ boxShadow: 3 }}>
          <Grid container>
            {/* Product Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "grey.100",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    maxHeight: 400,
                    width: "auto",
                    objectFit: "contain",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Box>
            </Grid>

            {/* Product Details */}
            <Grid item xs={12} md={6}>
              <CardContent
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Chip
                    label={product.category}
                    color="primary"
                    size="small"
                    sx={{ mb: 2, textTransform: "uppercase" }}
                  />

                  <Typography variant="h4" component="h1" gutterBottom>
                    {product.title}
                  </Typography>

                  <Box sx={{ my: 3 }}>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                    {product.rating && (
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1 }}
                      >
                        <Rating
                          value={product.rating.rate}
                          precision={0.1}
                          readOnly
                          sx={{ mr: 1 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {product.rating.rate} ({product.rating.count} reviews)
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Typography variant="h6" gutterBottom>
                    Description
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                </Box>

                <Box sx={{ mt: "auto", pt: 3 }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ mb: 3 }}
                  >
                    <MyButton
                      btnType="button" // tells MyButton to render a normal MUI Button
                      type="button"
                      icon={<ShoppingCartIcon />} // icon prop for MyButton
                      startIcon={<ShoppingCartIcon />} // HTML type
                      variant="outlined"
                    
                      onClick={MyButtonClicked}
                      sx={{ backgroundColor: "secondary.main", color: "white" }}
                    >
                      Add to Cart
                    </MyButton>

                    {/* <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      startIcon={<ShoppingCartIcon />}
                      onClick={() => dispatch(addToCart({...product, quantity: 1}))}
                      sx={{ py: 1.5 }}
                    >
                      Add to Cart
                    </Button> */}
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="large"
                      fullWidth
                      startIcon={<FavoriteBorderIcon />}
                      sx={{ py: 1.5 }}
                    >
                      Wishlist
                    </Button>
                  </Stack>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <SupportAgentIcon color="action" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Need help?{" "}
                      <Typography
                        component="span"
                        color="primary.main"
                        sx={{
                          cursor: "pointer",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        Contact us
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
