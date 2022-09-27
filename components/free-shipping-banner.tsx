import { Row } from "antd";
import { useState, useEffect } from "react";
import { css, cx } from "@emotion/css";
import BannerContainer from "./common/banner-container";
import { ThemeContext } from "@emotion/react";
import LoadingStatus from "../components/loading-status";

const spaceId = "y4zt3jqibesz";
const accessToken = "Hbkx7eCtpIeKUAJ62lRvv_zF6sa8-yz-KwX7UgA5HQM";
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

const FreeShippingBanner: React.FC = () => {
  let [data, setData] = useState(null);

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
    <BannerContainer variantColor="green">
      <Row justify="start" align="bottom" className={styles.row}>
        <h2 className="font-sans text-base"></h2>
        <p>by courier to the house</p>
      </Row>
    </BannerContainer>
  );
};

export default FreeShippingBanner;
