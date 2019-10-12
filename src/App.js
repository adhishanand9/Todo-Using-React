import React from 'react';
import Nav from './Components/nav';
import './App.css';
import {Link,Route,Switch} from 'react-router-dom';
import Home from './Routers/Home';
import About from './Routers/About';
import Todo from './Routers/Todo';


class App extends React.Component
{
  id=123;
  state={
    value : "",
    todo : [],
  };

  saveTodo = ()=>
  {
    const {value,todo} = this.state;
    todo.push(value);
    this.setState({todo : todo,value : ""})
  }

  handleInput = (e)=>
  {
    const val = e.target.value;
    this.setState({value : val})
  }

  deleteItem = (i)=>
  {
    return () =>
    {
      const {todo} = this.state;
      console.log(i)
      todo.splice(i,1);
      this.setState({todo : todo})
    }
  }

  render()
  {

    console.log(this.props);
    return (
        <div>
          <Nav />
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/todo/:id" component={Todo}/>
          <Route exact path="/about" component={About}/>
          </Switch>
        </div>
    )
  }
}


export default App;