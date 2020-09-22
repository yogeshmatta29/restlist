import React, { Component } from 'react'
import { Form} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
class RestaurantSearch extends Component {
    constructor(){
        super();
        this.state={
            searchData:'',
            noData:false,
            lastSearch:''
        }
    }
    search(value){
        this.setState({lastSearch:value})
        fetch('http://localhost:3000/restaurants?q='+ value).then((response) => {
            response.json().then((result) => {
                console.log(result)
                if(result.length > 0){
                    this.setState({searchData: result, noData:false})
                }else{
                    this.setState({noData:true, searchData: ''})
                }
                
            })
        })
    }
    delete(id){
        fetch('http://localhost:3000/restaurants/'+id, {
            method:"Delete",
        }).then((response) => {
            response.json().then((result) => {
                this.search(this.state.lastSearch);
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Search</h1>
                <Form className="restaurant">
                    <Form.Group controlId="formGroupName">
                        <Form.Control type="text" placeholder="Please Search" onChange={(event)=>this.search(event.target.value)}/>
                    </Form.Group>
                </Form>
                <div>
                    {
                        this.state.searchData?
                        <div className="search-wrapper">
                        <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                        <th>Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.searchData.map((items, i) => <tr key={items.id}>
                                        <td>{items.name}</td>
                                        <td>{items.email}</td>
                                        <td>{items.rating}</td>
                                        <td>{items.address}</td>
                                        <td>
                                        <Link to={"/update/" + items.id}><FontAwesomeIcon icon={faEdit} /></Link>
                                        <span className="delete" onClick={()=>this.delete(items.id)}><FontAwesomeIcon icon={faTrash} /></span>
                                        </td>
                                    </tr>)
                                }
                                </tbody>
                            </Table>
                        </div>:
                        ''
                    }
                    {
                        this.state.noData? <h3>No Data Found</h3>:""
                    }
                </div>
            </div>
        )
    }
}

export default RestaurantSearch