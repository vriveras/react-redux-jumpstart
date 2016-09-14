import React, {Component} from 'react';
import ReactDom from 'react-dom';

// use to connect a component to redux store
//import { connect } from 'react-redux'


// here are some of the lifecycle events of the components
// visit https://facebook.github.io/react/docs/component-specs.html for more information.

class App extends Component{

  constructor(props){

    // call base class constructor
    super(props);

    // called when the component class is created and can be used to
    // set the initial state of a component.
    this.state = {componentName:'AppTest'};

  }

  // this function is invoked right before the component is laoded.
  componentWillMount(){
    console.log('App:componentWillMount called');

    // show the initial state in the console.
    console.log('this.state.componentName: '+this.state.componentName);
  }

  // this function is invoked after the component is laoded.
  componentDidMount()
  {
    console.log('App:componentDidMount called');
  }

  // main function for a component it provides the visuals and main entry point
  // for logic definition when loading.
  render(){
    return (
      <div>
        APP COMPONENT
      </div>
    )
  }
}

// use to connect a component to redux store
// export default connect(null/*used for mapStateToProps*/, null/*used for mapDispatchToProps aka actions*/)(App);
export default App;
