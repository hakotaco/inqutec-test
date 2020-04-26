import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Row, Col, Menu, Dropdown } from 'antd';
import logo from './assets/logo.svg'
import books from './assets/books.svg'
import question from './assets/ques.svg'
import mic from './assets/mic.svg'
import arrow from './assets/arrow-left.svg'
import logo1 from './assets/logo1.svg'
import logo2 from './assets/logo2.svg'
import logo3 from './assets/logo3.svg'
import ReactResizeDetector from 'react-resize-detector';
import menuIcon from './assets/menu.svg'
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
  handleSlider =(t)=>{
    if(t){
      if(!this.state.isSliderEx){
        this.sliderRef.current.classList.add('animateSlider')
        this.speechRef.current.classList.add('animateSpeech')
        this.speechRef.current.classList.remove('animateSpeechOut')
        this.sliderRef.current.classList.remove('animateSliderOut')
        this.messageRef.current.style.display="block";
        this.setState({
          isSliderEx:true
        })
      }
    }else{
      if(this.state.isSliderEx){
        this.sliderRef.current.classList.add('animateSliderOut')
        this.speechRef.current.classList.add('animateSpeechOut')
        this.speechRef.current.classList.remove('animateSpeech')
        this.sliderRef.current.classList.remove('animateSlider')
        this.messageRef.current.style.display="none";
        this.setState({
          isSliderEx:false
        })
      }else{
        this.sliderRef.current.classList.add('animateSlider')
        this.speechRef.current.classList.add('animateSpeech')
        this.speechRef.current.classList.remove('animateSpeechOut')
        this.sliderRef.current.classList.remove('animateSliderOut')
        this.messageRef.current.style.display="block";
        this.setState({
          isSliderEx:true
        })
      }
    }

  }
  inputFocus=(e)=>{
    console.log(e)
      this.setState({
        isTyping: e
      })
      if(e){
        this.handleSlider(e)
      }

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
          <a>Patient Cases</a>
      </Menu.Item>
      <Menu.Item>
          <a>KOL videos</a>
      </Menu.Item>
      <Menu.Item>
          <a>Resources</a>
      </Menu.Item>
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

    // the function below will render the message component according to size
    const messageCont = isSmall?(
    <div></div>
    ):( 
    <Col xs={24} sm={24} md={24} lg={8} xl={8} style={{backgroundColor:'#E5F3EC'}}>
    <div className="content-big-sider">
      <div className="sliderCreate"  ref={this.sliderRef}>
        <img src={question} alt="help" />
        <img src={books} alt="documentation" />
        <div className="sizeToggle" onClick={()=>{this.handleSlider(false)}}>
          <img src={arrow} alt="expand/contract" />
        </div>
        <div className="messages" ref={this.messageRef}>
          <div className="patient">
            <div className="message-box">
              <p>Hey this is a sample messagey this is a sample messagy this is a sample messagy this is a sample messagy this is a sample messagy this is a sample messagy this is a sample messag</p>
            </div>
          </div>
          <div className="patient">
            <div className="message-box">
              <p>Hey this is a sample messagey this is a sample messagy this is a sample messagy this is a sample messagy this is a sample messagy this is a sample messagy this is a sample messag</p>
            </div>
          </div>
          <div className="doctor">
            <div className="message-box">
              <p>Hey this is a sample message</p>
            </div>
          </div>
        </div>
        <div className="speechtoText" ref={this.speechRef}>
        <img src={mic} alt="speech-to-text" />
          <input placeholder="A sample text that may be dynamically rendered" onFocus={()=>{this.inputFocus(true)}} onBlur={()=>{this.inputFocus(false)}}/>
        </div>
      </div>
    </div>
      </Col>
      )
      
      // Rendering affiliates according to size
      const affiliates = isSmall?(<div></div>):(                
      <Col xs={24} sm={24} md={24} lg={8} xl={8} className="affiliates">
      <img src={logo1} alt="affiliate" />
      <img src={logo2} alt="affiliate" />
      <img src={logo3} alt="affiliate" />
      </Col>
      )

      // Rendering menu according to size
      const smallMenu = isSmall?(  
        <Dropdown overlay={this.menuItems}>
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

      const mobileChat = isSmall?(             
         <div>
        <div className="content-small-chat">
          
        </div>
        <div className="floating-input">
          <div className="speechtoText">
          <img src={mic} alt="speech-to-text" />
            <input placeholder="A sample text that may be dynamically rendered" onFocus={()=>{this.inputFocus(true)}} onBlur={()=>{this.inputFocus(false)}}/>
          </div>
        </div>
        </div>):(
          <div></div>
        )
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="myMenu">
              <img src={logo} className="logo" alt="logo" />
              {smallMenu}
            </div>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={16} xl={16}>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <div className="content-big-image"> 
                  Cont
                </div>
              </Content>

              </Col>
             {messageCont}
            </Row>
              <Row>
                <Col  xs={24} sm={24} md={24} lg={16} xl={16} className="steps">
                <div className="step selectedStep"> 
                  <div className="circle"> 
                  <p>1</p>
                  </div>
                  <div className="bar">
                    <div className="innerBar">
                    </div>
                  </div>

                </div>
                <div className="step"> 
                  <div className="circle"> 
                  <p>1</p>
                  </div>
                  <div className="bar">
                    <div className="innerBar">
                    </div>
                  </div>

                </div>
                <div className="step"> 
                  <div className="circle"> 
                  <p>1</p>
                  </div>
                  <div className="bar">
                    <div className="innerBar">
                    </div>
                  </div>

                </div>
                <div className="step"> 
                  <div className="circle"> 
                  <p>1</p>
                  </div>
                  <div className="bar">
                    <div className="innerBar">
                    </div>
                  </div>

                </div>
                </Col>
                {affiliates}
              </Row>
              {mobileChat}

            </Layout>
          </Content>
        </Layout>
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
      </div>
    );
  }
}

export default App;
