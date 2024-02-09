import { Card, CardContent, Typography } from "@mui/material";

export const EbookDetails = ({ ebook }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{ebook?.attributes?.name}</Typography>
        <img
          src={ebook?.attributes?.book?.image_url}
          alt={ebook?.attributes?.book?.title}
          style={{ maxWidth: "100%", height: "auto", marginBottom: "1rem" }}
        />
        <Typography variant="subtitle1" color="textSecondary">
          Title: {ebook?.attributes?.book?.title}
        </Typography>
        <Typography variant="body1">
          {ebook?.attributes?.book?.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: {ebook?.attributes?.display_price}
        </Typography>
      </CardContent>
    </Card>
  );
};
