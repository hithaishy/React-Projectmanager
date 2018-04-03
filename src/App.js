import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
    {
      id:uuid.v4(),
      title: 'Business Website',
      category: 'Web Design'
    },
    {
      id:uuid.v4(),
      title: 'Social App',
      category: 'Mobile Development'
    },
    {
      id:uuid.v4(),
      title: 'ECommerce Shopping Cart',
      category: 'Web Design'
    }]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
       <AddProject addProject= {this.handleAddProject.bind(this)} />
       <br/>
       <h3>Latest Projects</h3>
       <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
