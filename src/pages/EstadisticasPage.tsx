import { Card, CardContent, Typography } from "@mui/material";

export default function EstadisticasPage({ characters }: { characters: any[] }) {
  const totalCharacters = characters.length;
  const totalQuotes = characters.reduce((sum, char) => sum + (char.quotes?.length || 0), 0);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Estadisticas
        </Typography>
        <Typography variant="body1">Total de personajes: {totalCharacters}</Typography>
        <Typography variant="body1">Total de citas: {totalQuotes}</Typography>
      </CardContent>
    </Card>
  );
}