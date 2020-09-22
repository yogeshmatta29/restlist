import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            rating: null,
            address: null
        }
    }
    create(e){
        e.preventDefault();
        fetch('http://localhost:3000/restaurants', {
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((response) => {
            response.json().then((result) => {
                alert("Data Added");
                this.myFormRef.reset();
            })
        }).catch(error => {})
    }
    render() {
        return (
            <div>
                <h1>Restaurant Create</h1>
                <Form className="restaurant" onSubmit={(e)=>{this.create(e)}} ref={(el) => this.myFormRef = el}>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Restaurant Name</Form.Label>
                        <Form.Control type="text" placeholder="Please Enter Name" onChange={(event)=>{this.setState({name:event.target.value})}}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Restaurant Email</Form.Label>
                        <Form.Control type="email" placeholder="Please Enter Email" onChange={(event)=>{this.setState({email:event.target.value})}}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupRating">
                        <Form.Label>Restaurant Rating</Form.Label>
                        <Form.Control type="text" placeholder="Please Enter Rating" onChange={(event)=>{this.setState({rating:event.target.value})}}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupAddress">
                        <Form.Label>Restaurant Address</Form.Label>
                        <Form.Control type="text" placeholder="Please Enter Address" onChange={(event)=>{this.setState({address:event.target.value})}}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default RestaurantCreate