
let count = 0;

const addOne = () => {
    // console.log(count);
    count++;
    renderReactCounter();
}
const minusOne = () => {

    count--;
    renderReactCounter();
}

const reset = () => { count = 0; renderReactCounter(); }

const renderReactCounter = () => {
    const templateCounter = (
        <div>
            <h1>Count: {count}</h1>
            <button id="my-id" className="button" onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>

    );
    ReactDOM.render(templateCounter, appRoot);
};

