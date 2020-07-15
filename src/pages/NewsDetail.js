import { Container } from "react-bootstrap";
import React from 'react'
import Axios from "axios";
import { withRouter } from "react-router-dom";


class NewsDetail extends React.Component{
    state = {data: null,loading:false,error:null}
    async componentDidMount() {
         const res = await Axios.get('https://www.fastmock.site/mock/f6e35e700903ab1ca5eda13c59c6cf3f/news/news-detail')
         this.setState({data: res.data});
         console.log('res',res)
    }
    render () {
        const {data} = this.state
    return <>
    <div style={{height: '96px',backgroundColor: 'rgb(242,242,242)'}}>
        <Container>
    <h2>{data && data.title}</h2>
    <small>{data && data.created_at}</small>
    </Container>
    </div>
     <Container style={{minHeight: '500px'}}>
         <div className="text-center">
         <img src={data && data.image} alt="" />
         </div>
         <p> {data && data.description}</p>
    </Container>
    </>
   
    }
}
export default withRouter(NewsDetail)
