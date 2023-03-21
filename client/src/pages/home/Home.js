import React, { useContext } from 'react'
import { Carousel } from "react-responsive-carousel";
// contexts
import HomeContext from "../../contexts/HomeContext";
// components
import ProductCard from "../../components/ProductCard";
// mui
import { Box, Stack, Typography, Button, Avatar, ButtonGroup, Link } from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// utils
import { truncateStr } from "../../utils";

const Home = () => {
  const { setProduct, products } = useContext(HomeContext);
  return (
    <>
      <Carousel style={{ width: "100%", height: "50vh", overflow: "hidden", userSelect: "none", marginTop: "1px" }} stopOnHover={false} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoFocus autoPlay infiniteLoop>
        {products.map(product =>
          <Box key={product._id} onClick={() => setProduct(product)} sx={{ width: "100%", height: "50vh", overflow: "hidden", cursor: "pointer" }}>
            <img style={{ width: "100%", height: "100vh", objectFit: "cover", filter: "brightness(0.25)" }} src={product.files.length ? product.files[0] : ""} alt={product.title} loading="lazy" />
            <Stack p={2} sx={{ position: "fixed", bottom: "0", width: "100%", userSelect: "text" }}>
              <Stack onClick={() => { }} direction="row" alignItems="center" sx={{ cursor: "pointer" }}>
                <Avatar sx={{ width: 50, height: 50, m: 1, ml: 0 }} src={product.ownerProfilePic || product.ownerName} alt={product.ownerName} loading="lazy" />
                <Stack>
                  <Typography variant="h5" align="left" color="white">{product.title}</Typography>
                  <Typography variant="body1" align="left" color="white" gutterBottom>{product.ownerName}</Typography>
                </Stack>
              </Stack>
              <Typography align="left" variant="h5" color="white" sx={{ py: 1 }}>{product.price}<Typography sx={{ fontSize: "12px", fontWeight: "bold", ml: 1 }} variant="span" color="error.main">{product.deal}</Typography></Typography>
              <Typography variant="body2" align="left" color="white" sx={{ pb: 2, width: "100%" }}>{truncateStr(product.desc, 500)}</Typography>
              <Stack alignItems="flex-end" direction="row" spacing={1} sx={{ flex: 1 }}>
                <Button sx={{ px: 5 }} variant="contained" startIcon={<PointOfSaleIcon />}>Place Order</Button>
              </Stack>
            </Stack>
          </Box>
        )}
      </Carousel>
      <ButtonGroup variant="contained" sx={{ flexWrap: "wrap", my: "1px", bgcolor: "primary.main" }} disableElevation>
        <Button sx={{ borderRadius: 0 }}>Pashmina Shawls</Button>
        <Button>Woodwork</Button>
        <Button>Pottery</Button>
        <Button>Leather</Button>
        <Button>Jute</Button>
        <Button>Brass</Button>
        <Button>Bamboo</Button>
        <Button>Jute</Button>
        <Button>Brass</Button>
        <Button>Bamboo</Button>
        <Button>Leather</Button>
        <Button>Jute</Button>
        <Button>Brass</Button>
        <Button>Jute</Button>
        <Button>Bamboo</Button>
        <Button>Jute</Button>
        <Button>Bamboo</Button>
        <Button>Woodwork</Button>
        <Button>Pottery</Button>
        <Button>Leather</Button>
        <Button>Jute</Button>
        <Button>Brass</Button>
        <Button>Bamboo</Button>
        <Button>Jute</Button>
        <Button>Brass</Button>
        <Button>Bamboo</Button>
        <Button sx={{ borderRadius: 0 }}>Jute</Button>
      </ButtonGroup>
      <Stack p={2}>
        <Typography alignSelf="center" variant="h4" align="left" sx={{ my: 2 }}>Featured Products</Typography>
        <Typography variant="body1" align="center" sx={{ mb: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem.</Typography>
        <Stack direction="row" justifyContent="center" flexWrap="wrap" p={2} pb={0} mb={2} spacing={1}>
          {products.map(product => <ProductCard key={product._id} product={product} sx={{ maxWidth: "275px" }} />)}
        </Stack>
        <Link href="#" alignSelf="center" mt={2}>Explore more of these!</Link>
        <Typography alignSelf="center" variant="h4" align="left" sx={{ mb: 2, mt: 8 }}>Featured Products</Typography>
        <Typography variant="body1" align="center" sx={{ mb: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem.</Typography>
        <Stack direction="row" justifyContent="center" flexWrap="wrap" p={2} pb={0} mb={2} spacing={1}>
          {products.map(product => <ProductCard key={product._id} product={product} sx={{ maxWidth: "275px" }} />)}
        </Stack>
        <Link href="#" alignSelf="center" mt={2}>Explore more of these!</Link>
        <Typography alignSelf="center" variant="h4" align="left" sx={{ mb: 2, mt: 8 }}>Featured Products</Typography>
        <Typography variant="body1" align="center" sx={{ mb: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem.</Typography>
        <Stack direction="row" justifyContent="center" flexWrap="wrap" p={2} pb={0} mb={2} spacing={1}>
          {products.map(product => <ProductCard key={product._id} product={product} sx={{ maxWidth: "275px" }} />)}
        </Stack>
        <Link href="#" alignSelf="center" mt={2}>Explore more of these!</Link>
      </Stack>
    </>
  )
}

export default Home