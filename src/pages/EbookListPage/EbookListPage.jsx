import { Grid } from "@mui/material";
import { EbookListItem } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";

export const EbookListPage = () => {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const response = await axios.get(
          "http://3.65.32.166/api/v2/storefront/products",
          {
            params: {
              "filter[product_type]": "digital",
              "filter[sub_product_type]": "book",
            },
          }
        );
        setEbooks(response.data.data);
      } catch (error) {
        console.error("Error fetching ebooks:", error);
      }
    };

    fetchEbooks();
  }, []);

  return (
    <Grid container spacing={2}>
      {ebooks?.map((ebook) => (
        <Grid item key={ebook.id} xs={12} sm={6} md={4}>
          <EbookListItem ebook={ebook} />
        </Grid>
      ))}
    </Grid>
  );
};
