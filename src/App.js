import React from 'react'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Layout, Menu, Dropdown } from 'antd'
import logo from './assets/logo.svg'
import ReactResizeDetector from 'react-resize-detector'
import menuIcon from './assets/menu.svg'
import Desktab from './components/desktab'
import Mobile from './components/mobile'
const { Header, Content} = Layout;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isSliderEx: false,
      isTyping: false,
      messages: [
          {
            id:0,
            message:"this is the doctor's message"
          },
          {
            id:1,
            message:"this is the patient's message"
          }
      ],
      isSmall: false
    }
    this.sliderRef  = React.createRef();
    this.speechRef  = React.createRef();
    this.messageRef = React.createRef();
  }

  onResize=(e)=>{
    if(e<=992){
      this.setState({
        isSmall:true
      })
    }else{
      this.setState({
        isSmall:false
      })
    }
    console.log(this.state.isSmall)
  }

  menuItems = (
    <Menu>
      <Menu.Item>
          <a>Telmi.AI</a>
      </Menu.Item>
      <Menu.Item>
          <a>Telmi.KOL</a>
      </Menu.Item>
      <Menu.Item>
          <a>Login</a>
      </Menu.Item>
    </Menu>
  );

  render(){
    const {isSmall} = this.state
      // Rendering menu according to size
      const smallMenu = isSmall?(  
        <Dropdown overlay={this.menuItems} trigger={['click']}>
        <button className="ant-dropdown-link">
        <img src={menuIcon} alt="" className="ant-dropdown-link"/>
        </button>
        </Dropdown>
      ):(
        <ul className="bigMenuHolder">
        <li>
         <button >Patient Cases</button>
        </li>
        <li>
          <button >KOL videos</button>
        </li>
        <li>
          <button>Resources</button>
        </li>
        <li>
          <button className="selectedMenu">Telmi.AI</button>
        </li>
        <li>
          <button >Telmi.KOL</button>
        </li>
        <li>
          <button >Login</button>
        </li>
      </ul>
      )

      const mainComponent = isSmall?(<Mobile />):(<Desktab/>) 
    return (
  <div className="App" style={{borderTop:'10px solid #02A95A'}}>
        <Layout>
          <Header className="header">
            <div className="myMenu">
              <img src={logo} className="logo" alt="logo" />
              {smallMenu}
            </div>
          </Header>
          <Content>
              {mainComponent}
          </Content>
        </Layout>
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
      </div>
    );
  }
}

export default App;
