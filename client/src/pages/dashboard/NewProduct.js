import React, { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
// mui
import { Stack, Grid, Paper, TextField, Typography, Fab, Button } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import PublishIcon from '@mui/icons-material/Publish';

const NewProduct = () => {
  const filesRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleDelete = file => {
    setFiles(files => files.filter(f => f !== file));
  }
  const handleFiles = e => {
    const newFiles = Array.from(e.target.files);
    if (newFiles.length)
      setFiles(files => [...files, ...newFiles]);
  };

  return (
    <Grid container spacing={3}>
      {/* New Product */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Stack direction="row" spacing={2}>
            <Stack flex={1} justifyContent="center" sx={{ position: "relative", backgroundColor: "lightgray" }}>
              <input ref={filesRef} accept="image/*" onChange={handleFiles} name="files" type="file" multiple hidden />
              <Fab onClick={() => filesRef.current?.click()} sx={{ position: "absolute", bottom: 16, right: 16 }} color="primary" aria-label="add"><AddIcon /></Fab>
              <Carousel stopOnHover={false} showStatus={false} showThumbs={false}>
                {files.map(file => <div key={URL.createObjectURL(file)} style={{ position: "relative" }}>
                  <Fab onClick={() => handleDelete(file)} sx={{ position: "absolute", top: 8, right: 8 }} size="small" color="error"><CloseIcon fontSize="medium" /></Fab>
                  <img style={{ width: "100%", minHeight: "300px", objectFit: "cover" }} src={URL.createObjectURL(file)} alt="" loading="lazy" />
                </div>)}
              </Carousel>
            </Stack>
            <Stack flex={2}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>New Product</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}><TextField variant="standard" defaultValue="Sample Product" placeholder="Sample Product" fullWidth name="title" label="Title" /></Grid>
                <Grid item xs={6}><TextField variant="standard" defaultValue="Food, Snacks & Drinks" placeholder="Food, Snacks & Drinks" fullWidth name="category" label="Category" /></Grid>
                <Grid item xs={12}><TextField fullWidth defaultValue="A good description attracts more customers!" label="Product Description" placeholder="A good description attracts more customers!" multiline rows={5} maxRows={5} /></Grid>
                <Grid item xs={3}><TextField variant="standard" defaultValue="10" placeholder="10" fullWidth name="quantity" label="Quantity" /></Grid>
                <Grid item xs={3}><TextField variant="standard" defaultValue="199" placeholder="199" fullWidth name="price" label="Price" /></Grid>
                <Grid item xs={3}><TextField variant="standard" defaultValue="INR" placeholder="INR" fullWidth name="currency" label="Currency" /></Grid>
                <Grid item xs={3}><TextField variant="standard" defaultValue="20% OFF" placeholder="20% OFF" fullWidth name="deal" label="Deal" /></Grid>
                <Stack width="100%"  m={2} mb={0} direction="row" justifyContent="space-between" spacing={1}>
                  <Button variant="outlined" startIcon={<ClearIcon />}>Clear</Button>
                  <Button variant="contained" startIcon={<PublishIcon />}>Submit</Button>
                </Stack>
              </Grid>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default NewProduct