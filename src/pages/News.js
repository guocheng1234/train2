import React from 'react'
import { Container, Row, Col, Card,Spinner } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import banner from '../assets/laker.jpg'
import axios from 'axios'

export default class News extends React.Component {
    state = {items: [], meta: null, loading: true, error:null}
    getData = async (page =1) => {
        try{
        this.setState({loading: true, error: null})
        const res = await axios.get(`https://www.fastmock.site/mock/f6e35e700903ab1ca5eda13c59c6cf3f/news/news?page=${page}`)
        console.log ('res', res.data)
        this.setState({items: res.data.items, meta: res.data.meta, loading: false})
           } catch (e) {
               this.setState({loading: false, error: e.response})
           }
    }
    
    handlePageChange = async (page) => {
        console.log('page' ,page)
        await this.getData(page)
    }
    
    async componentDidMount (){
        this.getData()
    }
    render () {
        const { items, meta, loading } = this.state
        return (
            <div>
        <div style={{height: '500px', background: `url(${banner})`,backgroundPosition:'center'}}>
        </div>
        <Container>
            {loading &&<div className="text-center"><Spinner animation="border" /></div>}
            {!loading &&
            (<Row>
                {items.map((item) => (<Col sm={6} key={item.id}>
                    <a href={`/news/${item.id}`}>
                    <Card className="mt-2 mb-2">
                        <Row className="no-gutters">
                            <Col sm={6}>
                                <img src={item.image} className="img-fluid" alt="" style={{width: '100%',height:'100%'}}/>
                            </Col>
                            <Col md={6}>
                                <Card.Body>
                                <h3>{item.title}</h3>
                                <div className="text-muted">
                                    <small>发布日期:{item.created_at}</small>
                                </div>
                                    <p>{item.description}</p>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card></a>
                </Col>))}
            </Row>)}
            {meta && <Pagination className="justify-content-center" totalCount={meta.total_count} page={meta.page} pageSize={meta.page_size} onPageChange={this.handlePageChange}>
               
            </Pagination>}
           
        </Container>
    </div>
        )
    }
}
