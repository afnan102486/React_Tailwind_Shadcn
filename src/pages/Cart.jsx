import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decrementQuantity, incrementQuantity, clearCart } from "../features/cart/cartSlice";
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, IconButton, Paper, Typography, Stack, TextField, Avatar, Container } from "@mui/material";
import {
  ShoppingCart as ShoppingCartIcon,
  Delete as DeleteIcon,
  Remove as RemoveIcon,
  Add as AddIcon,
  ArrowBack as ArrowBackIcon,
  Image as ImageIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Card elevation={3}>
        <CardHeader
          title={
            <Typography variant="h4" component="h1">
              Your Shopping Cart
            </Typography>
          }
          subheader={`${cartItems.length} ${
            cartItems.length === 1 ? "item" : "items"
          }`}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            py: 3,
          }}
        />

        {cartItems.length === 0 ? (
          <CardContent sx={{ textAlign: "center", py: 8 }}>
            <ShoppingCartIcon
              sx={{ fontSize: 60, color: "text.disabled", mb: 2 }}
            />
            <Typography variant="h5" gutterBottom>
              Your cart is empty
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Start adding some products to your cart
            </Typography>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              Continue Shopping
            </Button>
          </CardContent>
        ) : (
          <>
            <CardContent sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={() => dispatch(clearCart())}
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
              >
                Clear Cart
              </Button>
            </CardContent>

            <Divider />

            {cartItems.map((item) => (
              <Box key={item.id}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} md={2}>
                      <Paper
                        variant="outlined"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: 120,
                          bgcolor: "background.default",
                        }}
                      >
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          <ImageIcon
                            sx={{ fontSize: 60, color: "text.disabled" }}
                          />
                        )}
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={9} md={10}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        gap={4}
                      >
                        <Typography variant="h6" component="h2">
                          {item.title}
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          ${(item.quantity * item.price).toFixed(2)}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        ${item.price.toFixed(2)} each
                      </Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        mt={2}
                      >
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <IconButton
                            onClick={() => dispatch(decrementQuantity(item.id))}
                            size="small"
                            color="primary"
                          >
                            <RemoveIcon />
                          </IconButton>
                          <TextField
                            value={item.quantity}
                            size="small"
                            sx={{ width: 60 }}
                            inputProps={{
                              style: { textAlign: "center" },
                              readOnly: true,
                            }}
                          />
                          <IconButton
                            onClick={() => dispatch(incrementQuantity(item.id))}
                            size="small"
                            color="primary"
                          >
                            <AddIcon />
                          </IconButton>
                        </Stack>
                        <Button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          color="error"
                          startIcon={<DeleteIcon />}
                          size="small"
                        >
                          Remove
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
              </Box>
            ))}

            <CardContent sx={{ bgcolor: "background.paper" }}>
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6">Subtotal</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    ${total.toFixed(2)}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Shipping and taxes calculated at checkout.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ py: 2 }}
                >
                  Checkout
                </Button>
                <Box sx={{ textAlign: "center", pt: 2 }}>
                  <Button
                    component={Link}
                    to="/"
                    color="primary"
                    startIcon={<ArrowBackIcon />}
                    sx={{
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "primary.dark",
                      },
                    }}
                  >
                    Continue Shopping
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </>
        )}
      </Card>
    </Container>
  );
}
