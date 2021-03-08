import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class DetailMember extends Component {
    state ={
        detailmember : []
    }
    componentDidMount() {
        let id = this.props.match.params.detailID
        axios.get(`http://localhost:3004/langganan/${id}`).then((res)=>{
            console.log('detailmember',res);
            this.setState({
                detailmember : res.data
            })
        })
    }

    render() {
        const {detailmember} = this.state;
        return (
            <div>
                <h2>detail member</h2>
            </div>
        );
    }
}
DetailMember.getInitialProps = async(props)=>{
    const {id} = props.query;

    try {
        const data = await axios.get(`http://localhost:3004/${id}`).then((res)=>{
            console.log(res);
        })
    } catch (error) {
        console.log(err);
    }
}
export default DetailMember;