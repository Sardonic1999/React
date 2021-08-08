import React from 'react';
import './App.css';


class Student extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: 'PDP Academy',
      count: 0,
    };
  }
  render() {
    let title = 'PDP Acadmey';
    const changeTitle = ()=>{
      this.setState({title: 'IT Acadmey'});
    };
    const plus =()=>{
      if(this.state.count < 10)
      this.setState({count: this.state.count + 1});
      else if(this.state.count ===10)
      this.setState({count: 0});
    };
    const minus =()=>{
      if(this.state.count > 0)
      this.setState({count: this.state.count - 1})
  
      };
      const onChange =(event)=>{
        console.log(event.target.value);
        this.setState({title: event.target.value})
    };
    return (
    <div className='app-container'>
      <h1>{this.state.title} {this.state.count}</h1>
      <input type='text' onChange={onChange} />
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={changeTitle}>change</button>
    </div>
    );
  }
}

export default Student;