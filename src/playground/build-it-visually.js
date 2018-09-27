const app = {
title:'Build It',
heading:'Visibility toggle',
message:'YEs here are your details',
visibilty:false

};

const toggleVisibilty= ()=>{

    app.visibilty = !app.visibilty;
     
   renderApp();

};


const renderApp = ()=>{
    const template = (

        <div>
        
            <title>{app.title}</title>
            <h1>{app.heading}</h1>
<button onClick ={toggleVisibilty}>
{app.visibilty ?'Hide details':'Show details'}
</button>
{
                
                    app.visibilty &&
                        (
                            <p>{app.message}</p>
                        )
                

}
</div>


    );
    ReactDOM.render(template, appRoot);

};


let appRoot = document.getElementById('app');
renderApp();