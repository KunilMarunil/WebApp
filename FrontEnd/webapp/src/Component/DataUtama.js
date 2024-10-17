import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';

function DataUtama() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    value="20120388FAE20240402000001"
                    disabled
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    size="small"
                    label="Tanggal Pengajuan"
                    variant="outlined"
                    value="02-04-2024"
                    disabled
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    size="small"
                    label="Nomor Pendaftaran"
                    variant="outlined"
                    placeholder="Nomor Pendaftaran"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    size="small"
                    label="Tanggal Pendaftaran"
                    variant="outlined"
                    placeholder="Tanggal Pendaftaran"
                    disabled
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    size="small"
                    label="Kantor Pabean"
                    variant="outlined"
                    select
                >
                    <MenuItem value="KPU TANJUNG PRIOK">KPU TANJUNG PRIOK</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    size="small"
                    label="SKEP Fasilitas"
                    variant="outlined"
                    select
                >
                    <MenuItem value="Option 1">Option 1</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    size="small"
                    label="Jenis PIB"
                    variant="outlined"
                    select
                >
                    <MenuItem value="Biasa">Biasa</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    size="small"
                    label="Jenis Impor"
                    variant="outlined"
                    select
                >
                    <MenuItem value="UNTUK DIPAKAI">UNTUK DIPAKAI</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    size="small"
                    label="Cara Pembayaran"
                    variant="outlined"
                    select
                >
                    <MenuItem value="BIASA/TUNAI">BIASA/TUNAI</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    size="small"
                    label="Transaksi"
                    variant="outlined"
                    select
                >
                    <MenuItem value="Imbal Dagang">Transaksi Perdagangan Dengan Imbal Dagang</MenuItem>
                </TextField>
            </Grid>
        </Grid>
    );
}

export default DataUtama;