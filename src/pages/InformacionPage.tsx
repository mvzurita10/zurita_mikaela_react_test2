import { Paper, Typography } from "@mui/material";

export default function InformacionPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Información
      </Typography>

      <Typography color="text.secondary">
        API pública de personajes de Los Simpsons
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Imágenes servidas desde CDN estable por ID
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Todo el sistema está en un solo archivo HTML
      </Typography>
    </Paper>
  );
} 