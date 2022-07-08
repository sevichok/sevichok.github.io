import React, { useState } from 'react'
import { Layout } from 'antd';
import SiderMenu from "./components/SiderMenu"
import SettingsMenu from "./components/SettingsMenu"
import LocationContent from './components/Content';

const { Sider } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = () => { setCollapsed(!collapsed) }

  return (
    <div className='App'>
      <SiderMenu width="100px" />
      <Layout >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth = "0px"
          width="240px"
          style={{ display: "flex", flexDirection: "row" }}>
          <SettingsMenu collapsed={collapsed} handleCollapse={handleCollapse}/>
        </Sider>
        <Layout >
          <LocationContent collapsed={collapsed} handleCollapse={handleCollapse} />
        </Layout>
      </Layout>
    </div>
  )
}

export default App;