//const container = document.getElementById('react-container');
//ReactDOM.render("Hello! Welcome to React",container);
// Functional component
//const Container = () =>{
//return React.createElement(`div`,null,`Hey ProGrads! Welcome to React Learning`,
//   React.createElement(`div`,null,`Let's rock and roll`)
//     );
//}
// Render the Container
//const container = document.getElementById('react-container');
//ReactDOM.render(React.createElement(Container),container);

//class ReactContainer extends React.Component{
// constructor - to initialize the state 

// render method to render the react dom 
//render(){
//    return React.createElement(`div`,null,`Hey ProGrads`,
//  React.createElement(`div`,null,`Let's rock and roll`)
//    );
//  }

//}
class ReactContainer extends React.Component {
    // JSX tags
    // JSX there should be one parent element
    render() {
        return(<div> Hello!Welcome to ProGrads
            Let 's rock and roll  </div> )
        };
    }

    const container = document.getElementById('react-container');
    // Direclty pass the component to render
    ReactDOM.render( <ReactContainer /> , container);