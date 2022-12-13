import Pageheader from "../components/header";
import Pagefooter from "../components/footer";
import MktplContent from "../components/marketpace-content";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

export default function Marketplace() {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Pageheader Header={Header} />
        <MktplContent Content={Content} />
        <Pagefooter Footer={Footer} />
      </Layout>
    </>
  );
}
