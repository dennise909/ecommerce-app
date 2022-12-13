import { useState, useEffect } from "react";
import BannerContainer from "./common/banner-container";
import { Card, Row, Col, Layout, Image } from "antd";
import MktplSider from "../components/marketpace-sider";

const { Meta } = Card;
const { Content, Sider } = Layout;
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_KEY;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_CDA_API_KEY;
const environment = "master";

const query = `query{
    productCardCollection(limit:10){
      items{
        productId,
        productName,
        productDescription,
        productPrice,
        productImagesCollection{
          items{
            url
          }
        }
      }
    }
  }`;

export default function MktplContent() {
  let [data, setData] = useState([]);
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
  // const itemsData = data?.productCardCollection?.items;
  // console.log(itemsData);
  return (
    <Content
      style={{
        padding: "0 50px",
        backgroundColor: "white",
      }}
    >
      <Layout>
        <MktplSider Sider={Sider} />
        <BannerContainer height="25%" width="100%" variantColor="white">
          <Row>
            {/* {data.productCardCollection?.items.map((item) => console.log(item))} */}
            {data?.productCardCollection?.items?.map((item) => (
              <Col lg={{ span: 6, offset: 1 }}>
                <Card
                  style={{ width: "100%", marginTop: "2rem" }}
                  hoverable
                  cover={
                    <Image src={item.productImagesCollection.items[0].url} />
                  }
                >
                  <Meta
                    title={item.productName}
                    description={item.productDescription}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </BannerContainer>
      </Layout>
    </Content>
  );
}
