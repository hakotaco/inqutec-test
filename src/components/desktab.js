import React, { Component } from 'react'
import {Row, Col, Layout} from 'antd'
import Dcarchat from './dcarChat'
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'

// components

export default class Desktab extends Component{
    constructor(props){
        super(props);
            this.state={
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
        }

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
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Dcarchat selected={this.state.selected} setter={this.changeActive}/>
                <Row>
                    <Col  xs={24} sm={24} md={24} lg={16} xl={16} className="steps">
                        {steps}
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="affiliates">
                        <img src={logo1} alt="affiliate" />
                        <img src={logo2} alt="affiliate" />
                        <img src={logo3} alt="affiliate" />
                    </Col>
                </Row>
                </Layout>

        )
    }
}
