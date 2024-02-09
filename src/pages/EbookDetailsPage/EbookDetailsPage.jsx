import { useEffect, useState } from "react";
import { EbookDetails } from "../../components";
import { useParams } from "react-router-dom";
import axios from "axios";

export const EbookDetailsPage = () => {
  const { id } = useParams();
  const [ebook, setEbook] = useState(null);

  useEffect(() => {
    const fetchEbookDetails = async () => {
      try {
        const response = await axios.get(
          `http://3.65.32.166/api/v2/storefront/products/${id}`
        );
        setEbook(response.data.data);
        console.log({ response }, response.data.data);
      } catch (error) {
        console.error("Error fetching ebook details:", error);
      }
    };

    fetchEbookDetails();
  }, [id]);
  return <EbookDetails ebook={ebook} />;
};
