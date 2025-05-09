import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { getItemsMenu } from "../ItemsMenu";
import styles from "./styles.module.css";
import { Content, Footer } from "antd/es/layout/layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { items } = getItemsMenu();
  return (
    <Layout style={{ minHeight: "100vh", display: "flex" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth={0}
        width={260}
        className={styles.sidebar}
        style={{
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ height: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Menu mode="inline" items={items} style={{ flex: 1 }} />
        </div>
      </Sider>
      <Layout>
        <Layout style={{ display: "flex", flexDirection: "column" }}>
          <Content style={{ margin: 15 }}>
            <div>{children}</div>
          </Content>
          <Footer className={styles.footer}>
            Industrias CIN ©{new Date().getFullYear()}
          </Footer>{" "}
        </Layout>
      </Layout>
    </Layout>
  );
}
