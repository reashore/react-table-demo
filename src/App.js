import React, { Component } from 'react';
import ReactTable from 'react-table';
import './App.css';
import 'react-table/react-table.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  getData() {
    const data = [
      {
        name: 'Person1',
        age: 26,
        friend: {
          name: 'Friend1',
          age: 23
        }
      },
      {
        name: 'Person2',
        age: 26,
        friend: {
          name: 'Friend2',
          age: 23
        }
      },
      {
        name: 'Person3',
        age: 26,
        friend: {
          name: 'Friend3',
          age: 23
        }
      }
    ];

    return data;
  }

  getColumnConfiguration() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, 
      {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, 
      {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, 
      {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
      }
    ];

    return columns;
  }

  render() {
    const data = this.getData();
    const columns = this.getColumnConfiguration();
  
    return (<ReactTable data={data} columns={columns} />);
  }  
}

export default App;
