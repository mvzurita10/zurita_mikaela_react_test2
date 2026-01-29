import { Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
        Personajes de Los Simpsons
      </Typography>

      <Typography color="text.secondary">
        Listado dinámico usando API pública + CDN estable.
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Ejemplo ideal para practicar fetch y renderizado dinámico.
      </Typography>
    </Paper>
  );
}