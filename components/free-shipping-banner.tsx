import { Row } from "antd";
import { useState, useEffect } from "react";
import { css } from "@emotion/css";
import BannerContainer from "./common/banner-container";
import LoadingStatus from "../components/loading-status";

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_KEY;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_CDA_API_KEY;
const environment = "master";

const styles = {
  row: css({
    marginTop: "10px",
    marginInline: "0px",
    padding: "3rem 1rem 0",
  }),
};

const query = `query{
  sideBannerCollection{
    items{
      bannerTitle,
      bannerText
    }
  }
}`;

const FreeShippingBanner = ({ Title, Image }) => {
  let [data, setData] = useState(null);
  //let {data} = useContentfulData(query)
  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}?access_token=${accessToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch(() => {
        console.log("no data available");
      });
  }, []);

  const itemsData = data?.sideBannerCollection?.items;
  console.log(itemsData);
  if (!itemsData) return <LoadingStatus />;
  return (
    <BannerContainer
      margin="auto"
      height="15rem"
      width="100%"
      variantColor="#2D4C41"
      borderRadius="12px"
      backgroundImage={Image}
      backgroundSize="100%"
    >
      <Row justify="start" align="bottom" className={styles.row}>
        <h2 className="font-sans text-base"></h2>
        <p>{Title}</p>
      </Row>
    </BannerContainer>
  );
};

export default FreeShippingBanner;
