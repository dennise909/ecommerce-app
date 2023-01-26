import { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { Row, Col } from "antd";
import BannerContainer from "./common/banner-container";
import PromoBanner from "./side-promo-banner";
import FreeShippingBanner from "./free-shipping-banner";
import HomeBanner from "./main-home-banner";

const Homecontent = ({ Content }) => {
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_KEY;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_CDA_API_KEY;
  const environment = "master";
  let [data, setData] = useState(null);
  //let {data} = useContentfulData(query)

  const query = `query{
    sideBannerCollection{
        items{
          bannerTitle,
          bannerText,
         bannerImage{
          url
        }
        }
      }
  }`;
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
  return (
    <Content
      style={{
        padding: "0 50px",
        backgroundColor: "white",
      }}
    >
      <BannerContainer height="50%" width="100%" variantColor="white">
        <Row>
          <Col span={18}>
            <HomeBanner />
          </Col>
          <Col span={6}>
            <Row justify="center">
              <PromoBanner />
            </Row>
            <Row justify="center">
              <FreeShippingBanner Title={"NAME"} Image="" />
            </Row>
          </Col>
        </Row>
      </BannerContainer>
      <BannerContainer
        height="50%"
        width="100%"
        variantColor="white"
        margin="2rem 0 0 0"
      >
        <Row>
          <h3>All Sellers</h3>
        </Row>
        <Row justify="center">
          {data?.sideBannerCollection?.items.map((item) => {
            return (
              <Col span={8}>
                <FreeShippingBanner
                  Image={item.bannerImage.url}
                  Title={item.bannerTitle}
                />
              </Col>
            );
          })}
        </Row>
      </BannerContainer>
    </Content>
  );
};

export default Homecontent;
