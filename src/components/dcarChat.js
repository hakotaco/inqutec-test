import React from 'react'
import {Row, Col} from 'antd'

import Carousel from 'react-bootstrap/Carousel'
// images
import books from '../assets/books.svg'
import question from '../assets/ques.svg'
import mic from '../assets/mic.svg'
import arrow from '../assets/left.svg'
import arrowR from '../assets/right.svg'
import placeImg from '../assets/carplaceholder.png'

export default class Dcarchat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSliderEx: false,
                isTyping: false,
                index: 0,
                isSmall: false,
                active: this.props.selected
              }
              this.sliderRef  = React.createRef();
              this.speechRef  = React.createRef();
              this.messageRef = React.createRef();
              this.arrowRef = React.createRef();
        }
        handleSlider =(t)=>{
            if(t){
              if(!this.state.isSliderEx){
                this.sliderRef.current.classList.add('animateSlider')
                this.speechRef.current.classList.add('animateSpeech')
                this.speechRef.current.classList.remove('animateSpeechOut')
                this.sliderRef.current.classList.remove('animateSliderOut')
              this.arrowRef.current.style.transform="scaleX(-1)"
                setTimeout(()=>{
                  this.messageRef.current.style.display="block";
                }, 400)
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
                this.arrowRef.current.style.transform="scaleX(1)"
                this.messageRef.current.style.display="none";
                this.setState({
                  isSliderEx:false
                })

              }else{
                this.sliderRef.current.classList.add('animateSlider')
                this.speechRef.current.classList.add('animateSpeech')
                this.speechRef.current.classList.remove('animateSpeechOut')
                this.sliderRef.current.classList.remove('animateSliderOut')
              this.arrowRef.current.style.transform="scaleX(-1)"
                setTimeout(()=>{
                  this.messageRef.current.style.display="block";
                }, 400)
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
          // componentDidMount() {
          //   this.setState({
          //     active: this.props.selected
          //   }) 
          // }
          
          componentDidUpdate(prevProps, prevState) {
            if(prevProps.selected !== this.props.selected){
              this.setState({
                active: this.props.selected
              }) 
            }
            console.log("selected carousel", this.state.active)
          }
          
          

          handleSelect = (selectedIndex, e) => {
              this.setState({
                  index: selectedIndex
              })
              // console.log(selectedIndex)
              this.props.setter(selectedIndex)
            };

            render() {
                return (
                    <Row>
                    <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <div className="contentHolder">
                    <Carousel indicators={false} activeIndex={this.state.index} onSelect={this.handleSelect} prevIcon={<img src={arrow} alt=""/>} nextIcon={<img src={arrowR} alt=""/>}>
                        <Carousel.Item>
                          <img
                            className="d-block"
                            src={placeImg}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>This is carousel {this.state.active + 1}</h3>
                            <p>
                                slide 1
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={placeImg}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>This is carousel {this.state.active + 1}</h3>
                            <p>
                                slide 2
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={placeImg}
                            alt="Third slide"
                            />
                          <Carousel.Caption>
                            <h3>This is carousel {this.state.active + 1}</h3>
                            <p>
                                slide 3
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                     </Carousel>
                    </div>

                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} style={{backgroundColor:'#E5F3EC'}}>
                        <div className="content-big-sider">
                            <div className="sliderCreate"  ref={this.sliderRef}>
                            <div className="helpImg">
                                <img src={question} alt="help" />
                                <img src={books} alt="documentation" />
                            </div>
                            <div className="sizeToggle" onClick={()=>{this.handleSlider(false)}} >
                                <img src={arrow} alt="expand/contract"  ref={this.arrowRef} />
                            </div>
                            <div className="messages" ref={this.messageRef}>
                                <div className="patient">
                                <div className="message-box">
                                    <p>Good morning. Hope you're in for a quick discussion today.</p>
                                </div>
                                </div>
                                <div className="patient">
                                <div className="message-box">
                                    <p>Doctor As you know weight gain increases the risk of CVD by a significant amount of 12 percent! Also, a gain of every 3 kg nullifies the benefits of 1 percent reduction in A1c And every 1kg gain increases risk of Heart Failure by a HUGE factor, 7.1 percent Doctor, have a question for you.</p>
                                </div>
                                </div>
                                <div className="doctor">
                                <div className="message-box">
                                    <p>This is chat for tab {this.state.active+1}</p>
                                </div>
                                </div>
                            </div>
                            <div className="speechtoText" ref={this.speechRef}>
                            <img src={mic} alt="speech-to-text" />
                                <div style={{height:'100%', padding:'5px'}}>
                                    <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" onFocus={()=>{this.inputFocus(true)}} onBlur={()=>{this.inputFocus(false)}}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                )
            }
    }
