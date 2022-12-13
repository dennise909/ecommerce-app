import Pageheader from "../components/header";
import Pagefooter from "../components/footer";
import Homecontent from "../components/home-content";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Pageheader Header={Header} />
      <Homecontent Content={Content} />
      <Pagefooter Footer={Footer} />
    </Layout>
  );
}
