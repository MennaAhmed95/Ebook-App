import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

export const EbookListItem = ({ ebook }) => {
  return (
    <Link to={`/ebook/${ebook?.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardContent>
          <Typography variant="h6">{ebook?.attributes?.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            Price: {ebook?.attributes?.display_price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
