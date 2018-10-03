class VisibilityToggle extends React.Component {
constructor(props){
super(props);

this.toggleVisibility = this.toggleVisibility.bind(this);


    this.state = {
    visibility: false,
        title: 'Build It',
      heading:'Visibility toggle',
      message:'YEs here are your details'
    };
            }

            toggleVisibility(){

                this.setState((prevState) => {

                    return {

                        visibility : !prevState.visibility
                    };
                });
            }

render(){
    return(
        <div>
            <title>{this.state.title}</title>
             <h1>{this.state.heading}</h1>
 <button onClick ={this.toggleVisibility}>
 { 
 
     this.state.visibility ?'Hide details':'Show details'}
 </button>
 {

                    this.state.visibility &&
                         (
                             <p>{this.state.message}</p>
                         )


 }


        </div>

    );
}


}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));


// const app = {
// title:'Build It',
// heading:'Visibility toggle',
// message:'YEs here are your details',
// visibilty:false

// };

// const toggleVisibilty= ()=>{

//     app.visibilty = !app.visibilty;
     
//    renderApp();

// };


// const renderApp = ()=>{
//     const template = (

//         <div>
        
//             <title>{app.title}</title>
//             <h1>{app.heading}</h1>
// <button onClick ={toggleVisibilty}>
// {app.visibilty ?'Hide details':'Show details'}
// </button>
// {
                
//                     app.visibilty &&
//                         (
//                             <p>{app.message}</p>
//                         )
                

// }
// </div>


//     );
//     ReactDOM.render(template, appRoot);

// };


// let appRoot = document.getElementById('app');
// renderApp();