// DataPungutan.js
import React, { useState } from 'react';
import { Grid, TextField, MenuItem, IconButton, Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

function DataPungutan() {
  const [voluntaryDeclaration, setVoluntaryDeclaration] = useState(false);

  // Handle checkbox toggle for "Voluntary Declaration"
  const handleCheckboxChange = (event) => {
    setVoluntaryDeclaration(event.target.checked);
  };

  return (
    <Grid container spacing={3}>
      {/* Incoterms */}
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          select
          label="Incoterms"
          variant="outlined"
          value="Free on Board"
          InputProps={{ readOnly: true }}
        >
          <MenuItem value="Free on Board">Free on Board</MenuItem>
        </TextField>
      </Grid>

      {/* Valuta */}
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          select
          label="Valuta"
          variant="outlined"
          value="Euro"
          InputProps={{ readOnly: true }}
        >
          <MenuItem value="Euro">Euro</MenuItem>
        </TextField>
      </Grid>

      {/* Kurs with Refresh Icon */}
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Kurs"
          variant="outlined"
          value="17,639.0800"
          InputProps={{
            readOnly: true,
            endAdornment: (
              <IconButton>
                <RefreshIcon />
              </IconButton>
            ),
          }}
        />
      </Grid>

      {/* Nilai and Biaya Tambahan */}
      <Grid item xs={12} sm={2}>
        <TextField
          fullWidth
          label="Nilai"
          variant="outlined"
          value="50,000.00"
        />
      </Grid>

      <Grid item xs={12} sm={0.4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" component="div">
          +
        </Typography>
      </Grid>

      <Grid item xs={12} sm={2}>
        <TextField
          fullWidth
          label="Biaya Tambahan"
          variant="outlined"
          value="500.00"
        />
      </Grid>

      <Grid item xs={12} sm={0.4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" component="div">
          -
        </Typography>
      </Grid>

      {/* Biaya Pengurang and Equation */}
      <Grid item xs={12} sm={2}>
        <TextField
          fullWidth
          label="Biaya Pengurang"
          variant="outlined"
          value="1,000.00"
        />
      </Grid>

      <Grid item xs={12} sm={0.4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" component="div">
          +
        </Typography>
      </Grid>

      {/* Voluntary Declaration with Conditional Editing */}
      <Grid item xs={12} sm={0.1} sx={{ display: 'flex', alignItems: 'center' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={voluntaryDeclaration}
              onChange={handleCheckboxChange}
            />
          }
        />
      </Grid>

      <Grid item xs={12} sm={1.9}>
        <TextField
          fullWidth
          label="Voluntary Declaration Value"
          variant="outlined"
          value="0"
          disabled={!voluntaryDeclaration} // Disable if checkbox is unchecked
        />
      </Grid>

      {/* Equation Symbol */}
      <Grid item xs={12} sm={0.4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" component="div">
          =
        </Typography>
      </Grid>

      {/* Nilai FOB */}
      <Grid item xs={12} sm={2}>
        <TextField
          fullWidth
          label="Nilai FOB"
          variant="outlined"
          value="54,500.00"
          InputProps={{ readOnly: true }}
        />
      </Grid>

      {/* Asuransi Bayar di */}
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          select
          label="Asuransi Bayar di"
          variant="outlined"
          value="Luar Negeri"
          InputProps={{ readOnly: true }}
        >
          <MenuItem value="Luar Negeri">Luar Negeri</MenuItem>
        </TextField>
      </Grid>

      {/* Asuransi and Freight */}
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Asuransi"
          variant="outlined"
          value="5,000.00"
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Freight"
          variant="outlined"
          value="400.00"
        />
      </Grid>

      {/* CIF and CIF Rp */}
      <Grid item xs={12} sm={2.4}>
        <TextField
          fullWidth
          label="CIF"
          variant="outlined"
          value="59,900"
          InputProps={{ readOnly: true }}
        />
      </Grid>

      <Grid item xs={12} sm={2.4}>
        <TextField
          fullWidth
          label="CIF Rp"
          variant="outlined"
          value="1,056,580,892"
          InputProps={{ readOnly: true }}
        />
      </Grid>

      {/* Bruto and Netto */}
      <Grid item xs={12} sm={2.4}>
        <TextField
          fullWidth
          label="Bruto"
          variant="outlined"
          value="900"
        />
      </Grid>

      <Grid item xs={12} sm={2.4}>
        <TextField
          fullWidth
          label="Netto"
          variant="outlined"
          value="800"
        />
      </Grid>

      {/* Flag Kontainer */}
      <Grid item xs={12} sm={2.4}>
        <TextField
          fullWidth
          select
          label="Flag Kontainer"
          variant="outlined"
          value="Kontainer"
        >
          <MenuItem value="Kontainer">Kontainer</MenuItem>
        </TextField>
      </Grid>

      {/* Action Buttons */}
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="warning">Kelengkapan Data</Button>
        <Button variant="contained" color="primary">Simpan</Button>
      </Grid>
    </Grid>
  );
}

export default DataPungutan;
