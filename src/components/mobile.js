import React, { Component } from 'react'
import { Swipeable } from 'react-swipeable'
import Carousel from 'react-bootstrap/Carousel'

// images
import books from '../assets/books.svg'
import question from '../assets/ques.svg'
import mic from '../assets/mic.svg'
import upArr from '../assets/upArr.svg'
import placeImg from '../assets/carplaceholder.png'
import arrow from '../assets/left.svg'
import arrowR from '../assets/right.svg'
import st1 from '../assets/st1.svg'
import nd2 from '../assets/nd2.svg'
import rd3 from '../assets/rd3.svg'
// components

export default class Mobile extends Component{
    constructor(props){
        super(props);
        this.state={
            height: 91,
            active: 0,
            selected: 0,
            data: [
                {name:'PK/PD'},
                {name:'Efficacy'},
                {name:'Cardio Protection'},
                {name:'Reno Protection'},
                {name:'Guidelines'}
            ],
            activeSlide: 0
        }
        this.messageRef = React.createRef()
        this.carouselRef = React.createRef()
        this.stepRef = React.createRef()
        this.arrowRef = React.createRef()
        this.menuRef = React.createRef()
    }
    config = {
        delta: 10,                             // min distance(px) before a swipe starts
        preventDefaultTouchmoveEvent: false,   // preventDefault on touchmove, *See Details*
        trackTouch: true,                      // track touch input
        trackMouse: true,                     // track mouse input
        rotationAngle: 0,                      // set a rotation angle
      }

    eventHandler=(d)=>{
        console.log(d)
        if(d.dir==="Left"){
            // console.log(this.menuRef)
            this.menuRef.current.classList.add("animateOut")
            this.menuRef.current.classList.remove("animateIn")
        }else if(d.dir==="Right"){
            this.menuRef.current.classList.add("animateIn")
            this.menuRef.current.classList.remove("animateOut")
        }
    }
    inputFocus = (e) =>{
        console.log(e)
    }
    exCon=()=>{
        if(this.state.height===91){
            this.setState({
                height:50
            })
            if(window.innerHeight<720){
                this.carouselRef.current.element.style.width="240px"
            }else{
                this.carouselRef.current.element.style.width="300px"
            }
            this.messageRef.current.style.height="46%"
            this.messageRef.current.style.opacity="1"
            this.arrowRef.current.style.transform="scaleY(-1)"
            this.arrowRef.current.style.marginTop="0px"
        }else{
            this.setState({
                height:91
            })
            // this.carouselRef.current.element.style.width="80vw"
            if(window.innerHeight<720){
                this.carouselRef.current.element.style.width="80vw"
            }else{
                this.carouselRef.current.element.style.width="80vw"
            }
            this.messageRef.current.style.opacity="0"
            this.messageRef.current.style.height="0px"
            this.arrowRef.current.style.transform="scaleY(1)"
            this.arrowRef.current.style.marginTop="50px"
        }
    }
    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex
        })
        // console.log(selectedIndex)
        this.changeActive(selectedIndex)
      };
    changeSelected=(e)=>{
        this.setState({
            selected: e
        })
    }

    changeActive=(a)=>{
        this.setState({
            activeSlide:a
        })
        console.log(a)
    }
    
    render(){
        const {selected, data, activeSlide} = this.state
        let steps = data.map((each, index)=>{
            if(selected===index){
                return(
                    <div className="step selectedStep" onClick={()=>{this.changeSelected(index)}}> 
                    <div className="stepLoading">
                            <div className="circle"> 
                                <p>{index+1}</p>
                            </div>
                            <div className="bar">
                                <div className="innerBar" style={{width:100*(activeSlide+1)/3+'%'}}>
                                </div>
                            </div>
                    </div>
                    <div className="step-text">
                        <h5>{each.name}</h5>
                    </div>
                </div>
                )
            }else{
                return(
                    <div className="step" onClick={()=>{this.changeSelected(index)}}> 
                    <div className="stepLoading">
                            <div className="circle"> 
                                <p>{index+1}</p>
                            </div>
                            <div className="bar">
                                <div className="innerBar" style={{width:100*(index-1)/3+'%'}}>
                                </div>
                            </div>
                    </div>
                    <div className="step-text">
                        <h5>{each.name}</h5>
                    </div>
                </div>
                )
            }
        })
        return(
            <div className="mobileContainer">
                <div className="site-layout-background" style={{height:this.state.height+'%'}}>
                    <Carousel ref={this.carouselRef} indicators={false} activeIndex={this.state.index} onSelect={this.handleSelect} prevIcon={<img src={arrow} alt=""/>} nextIcon={<img src={arrowR} alt=""/>}>
                        <Carousel.Item>
                          <img
                            className="d-block"
                            src={placeImg}
                            alt="First slide"
                          />
 
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={placeImg}
                            alt="Second slide"
                            />
   
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={placeImg}
                            alt="Third slide"
                            />
 
                        </Carousel.Item>
                     </Carousel>
                     <div className="steps" ref={this.stepRef}>
                        {steps}
                     </div>

                    <img src={upArr} className="upButton" alt="clikc/swipe up to expand chat" onClick={this.exCon} ref={this.arrowRef} />
                </div>  
                <div className="messageContainer" ref={this.messageRef}>
                    <div className="messages">
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
                            <p>This is a chat for {this.state.selected + 1}</p>
                        </div>
                        </div>
                        <div className="doctor">
                        <div className="message-box">
                            <p>This is a chat for {this.state.selected + 1}</p>
                        </div>
                        </div>
                        <div className="doctor">
                        <div className="message-box">
                            <p>This is a chat for {this.state.selected + 1}</p>
                        </div>
                        </div>
                    </div>
                    <Swipeable onSwiped={this.eventHandler} {...this.config}>
                    <div className="otherMenu" ref={this.menuRef}>
                        <div>
                            <img src={st1} alt=""/>
                        <span>Patient cases</span> 
                        </div>
                        <div>
                            <img src={nd2} alt=""/>
                        <span> KOL Videos</span>
                        </div>
                        <div>
                            <img src={rd3} alt=""/>
                        <span>Resources</span>
                        </div>
                    </div>
                    </Swipeable>
                </div>
                <img src={question} alt="help" className="mhelpButtons mhelp"/>
                <img src={books} alt="documentation" className="mhelpButtons mques"/>
                <div className="floating-input">
                    
                    <div className="speechtoText">
                        <img src={mic} alt="speech-to-text" />
                        <div style={{height:'100%', padding:'5px'}}>
                            <input placeholder="Lorem ipsum dolor sit amet" onFocus={()=>{this.inputFocus(true)}} onBlur={()=>{this.inputFocus(false)}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// {/*  */}

