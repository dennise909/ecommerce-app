import Homeheader from "../components/header";
import Homecontent from "../components/content";
import Homefooter from "../components/footer";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
export default function Home() {
  return (
    <Layout>
      <Homeheader Header={Header} />
      <Homecontent Content={Content} />
      <Homefooter Footer={Footer} />
    </Layout>
  );
}
