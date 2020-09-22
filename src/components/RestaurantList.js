import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData(){
        fetch('http://localhost:3000/restaurants').then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id){
        fetch('http://localhost:3000/restaurants/'+id, {
            method:"Delete",
        }).then((response) => {
            response.json().then((result) => {
                alert('Data Deleted');
                this.getData();
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div className="list-wrapper">
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
                                    this.state.list.map((items, i) => <tr key={items.id}>
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
                        </div>
                        : <p>Please wait ....</p>
                }
            </div>
        )
    }
}

export default RestaurantList
