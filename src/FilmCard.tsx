import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

type FilmCardProps = {
  title: string;
  original_title: string;
  director: string;
  image: string;
  onViewDetails: (title: string) => void; 
};

export function FilmCard({ title, original_title, director, image, onViewDetails }: FilmCardProps) {
  return (
    <div className="film-card">
      <Avatar src={image} alt={title} variant="rounded" sx={{ width: 60, height: 85 }} />
      
      <div className="film-info">
        <strong>{title}</strong>
        <p className="film-text-muted">{original_title}</p>
        <p className="film-text-muted">Director: {director}</p>
      </div>

      <Button variant="outlined" onClick={() => onViewDetails(title)}>
        Ver detalles
      </Button>
    </div>
  );
}