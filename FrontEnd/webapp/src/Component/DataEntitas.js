// DataEntitas.js
import React from 'react';
import { Grid, TextField, MenuItem, Checkbox, IconButton, Box, Typography, Divider, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function DataEntitas() {
  return (
    <Box>
      {/* "Jenis Pemberitahuan" Section */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Jenis Pemberitahuan"
            value="PENGUSAHA"
            variant="outlined"
            disabled
          >
            <MenuItem value="PENGUSAHA">Pengusaha</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      {/* Subtitle "Pengusaha" with Line */}
      <Box mt={3} mb={1}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Pengusaha
        </Typography>
        <Divider sx={{ mt: 1, mb: 2, borderColor: '#AFA8A8' }} />
      </Box>

      {/* Form Fields for "Pengusaha" */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Jenis Identitas"
            variant="outlined"
            defaultValue=""
          >
            <MenuItem value="KTP">KTP</MenuItem>
            <MenuItem value="PASSPORT">Passport</MenuItem>
            <MenuItem value="SIM">SIM</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="NIB"
            variant="outlined"
            value="8120310100981"
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12} sm={1} sx={{ display: 'flex', alignItems: 'center' }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Tanpa NIB"
            labelPlacement="end"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="No Identitas"
            variant="outlined"
            placeholder="01233755664000"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="No Identitas(16 Digit)"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Nama Perusahaan"
            variant="outlined"
            value="UNICHEMCANDI INDONESIA"
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12} sm={2.4}>
          <TextField
            fullWidth
            label="Provinsi"
            variant="outlined"
            value="JAWA TIMUR"
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12} sm={2.4}>
          <TextField
            fullWidth
            label="Kota / Kabupaten"
            variant="outlined"
            value="KAB. SIDOARJO"
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12} sm={2.4}>
          <TextField
            fullWidth
            label="Kecamatan"
            variant="outlined"
            value="Candi"
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12} sm={2.4}>
          <TextField
            fullWidth
            label="Kode Pos"
            variant="outlined"
            value="61271"
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12} sm={2.4}>
          <TextField
            fullWidth
            label="RT / RW"
            variant="outlined"
            placeholder="/"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Telephone"
            variant="outlined"
            value="0318921342"
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value="linggasetiawan@unichem.co.id"
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Status"
            variant="outlined"
            value="AEO"
            InputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DataEntitas;
