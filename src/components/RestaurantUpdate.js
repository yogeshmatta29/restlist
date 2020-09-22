import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            rating: '',
            address: '',
            id:'',
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/restaurants/'+ this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                this.setState({ 
                    name: result.name,
                    email: result.email,
                    rating: result.rating,
                    address: result.address,
                    id:result.id
                })
            })
        })
    }
    update(e){
        e.preventDefault();
        fetch('http://localhost:3000/restaurants/'+this.state.id, {
            method:"Put",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((response) => {
            response.json().then((result) => {
                alert('Data Updated')
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Update</h1>
                <Form className="restaurant">
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Restaurant Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} placeholder="Please Enter Name" onChange={(event)=>{this.setState({name:event.target.value})}}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Restaurant Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} placeholder="Please Enter Email" onChange={(event)=>{this.setState({email:event.target.value})}}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupRating">
                        <Form.Label>Restaurant Rating</Form.Label>
                        <Form.Control type="text" value={this.state.rating} placeholder="Please Enter Rating" onChange={(event)=>{this.setState({rating:event.target.value})}}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupAddress">
                        <Form.Label>Restaurant Address</Form.Label>
                        <Form.Control type="text" value={this.state.address} placeholder="Please Enter Address" onChange={(event)=>{this.setState({address:event.target.value})}}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e)=>{this.update(e)}}>
                        Update
                    </Button>
                </Form>
            </div>
        )
    }
}

export default RestaurantUpdate
