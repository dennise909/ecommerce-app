import { useState, useEffect } from "react";
import BannerContainer from "./common/banner-container";
import { Card, Row, Col, Layout, Image } from "antd";
import MktplSider from "../components/marketpace-sider";
import useFormItemStatus from "antd/es/form/hooks/useFormItemStatus";
import LoadingStatus from "./loading-status";

const { Meta } = Card;
const { Content, Sider } = Layout;
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_KEY;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_CDA_API_KEY;
const environment = "master";

const query = `query{
  productCardCollection(limit:10){
    items{
      contentfulMetadata{
        tags{
          name
        }
      }
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
  let [data, setData] = useState(null);
  let [list, setList] = useState([]);
  let [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState("shoes");
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
      .then((json) => {
        setLoading(false);
        setData(json.data);
      })
      .catch(() => {
        console.log("no data available");
      });
  }, []);

  function filterData(contentfulData, category) {
    if (contentfulData !== null) {
      const newList = contentfulData?.productCardCollection?.items.filter(
        (item) => {
          if (item.contentfulMetadata.tags[0].name === category) {
            return true;
          }
        }
      );
      setList(newList);
    }
  }

  useEffect(() => {
    filterData(data,current);
  }, [data,current]);

  return (
    <Content
      style={{
        padding: "0 50px",
        backgroundColor: "white",
      }}
    >
      <Layout>
        <MktplSider Sider={Sider} current={current} onClick={setCurrent} />
        <BannerContainer height="25%" width="100%" variantColor="white">
          {loading ? (
            <LoadingStatus />
          ) : (
            <Row>
              {/* {data.productCardCollection?.items.map((item) => console.log(item))} */}
              {list.map((item) => (
                <Col lg={{ span: 6, offset: 1 }}>
                  <Card
                    style={{ width: "100%", height: "100%", marginTop: "2rem" }}
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
          )}
        </BannerContainer>
      </Layout>
    </Content>
  );
}
