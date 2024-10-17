import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';

const DataUtama = ({ data }) => ( 
    data.map((datas) => (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={datas.nomorPengajuan}
                    disabled
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    size="small"
                    label="Tanggal Pengajuan"
                    variant="outlined"
                    value={datas.tanggalPengajuan}
                    disabled
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={datas.nomorPendaftaran}
                    disabled
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    size="small"
                    label="Tanggal Pendaftaran"
                    variant="outlined"
                    value={datas.tanggalPendaftaran}
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
    ))
);

export default DataUtama;