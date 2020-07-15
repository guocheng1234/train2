import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'

export default (props) => (
    <>
       <Header>

       </Header>
       {props.children}
       <Footer>

       </Footer>
    </>
)