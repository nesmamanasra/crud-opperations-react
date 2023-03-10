import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {
    state = {
      courses:[
        {name : "HTML"},
        {name : "CSS"},
        {name : "JQuery"}
      ],
      // current i use this to store my value 
      current : ""
    };

    // update course
    updateCourse = (e) => {
      //console.log(e.target.value)
      this.setState({
        current:e.target.value
    })
    }
    // add course
    addCourse = (e) => {
      e.preventDefault();
      //console.log('add course')
      let current = this.state.current;
      let courses  = this.state.courses;
      courses.push({name:current})
      this.setState({
         courses,
         current: ''
      })
    }
    // edit course
    editCourse = (index , value)=>{
        let courses = this.state.courses;
        let course = courses[index];
        course['name'] = value;
        this.setState({
          courses
        })
    }
    // delete course
     deleteCousre = (index) =>{
      let courses = this.state.courses;
      courses.splice(index,1)
      this.setState({
        courses
      })
     }

    

  render(){
    const {courses} = this.state;
    const courseList = courses.map((course , index) => {
      return <CourseList details={course}  key={index} index={index} update={this.handleChange} deleteCousre={this.deleteCousre} editCourse={this.editCourse}/>
    })
  return(
    <section className="App">
        <h2>Add Coruses</h2>
        <CourseForm current={this.state.current} updateCourse ={this.updateCourse}  addCourse = {this.addCourse}/>
        <ul>{courseList}</ul>

    </section>
  );
}
}
export default App;
