var name = 'Ali Baba';
var age = 23;
var national = 'Pakistan'
var favBooks = {
    'title': 'YDKJS',

};
//var location = 'Islamabad';
var friendList = ['Saad', 'Arsalan', 'Syed', 'waqar', 'Amir'];

var user = {
    name: 'Ali',
    location: 'Peshawar',
    accounts: []
};
console.log('App is running !');

var template = (
    <div>
        <h1> In decision app  </h1>
        <p>I am going to write here</p>
    </div>
);

function getLocation(location) {

    if (location) {

        return <p>location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>Age:{age}</p>
        <p>{favBooks.title}</p>
        <ol>
            {
                friendList.map((friendList) => {
                    return <li key={friendList}>{friendList}</li>;
                })
            }


        </ol>
        <p>LoL ! Now it supports works </p>
        {getLocation(user.location)}
        {user.accounts.length > 0 ? 'Options exists' : 'None of accounts exists'}

    </div>


);

const onFormSubmit = (e) => {

    e.preventDefault();
    console.log('Form submited');
    const option = e.target.elements.option.value;

    if (option) {
        user.accounts.push(option);
        e.target.elements.option.value = '';

        renderReactForm(); // Rerendering after the result changes 
    }

};

const clearAll = () => {

    user.accounts = [];
    renderReactForm();

};

const randomOptions = () => {

    const randomNum = Math.floor(Math.random() * user.accounts.length);
    const accountsOptions = user.accounts[randomNum];

    alert(accountsOptions);

};

let app = {

    title: 'Indecision app'

};

const renderReactForm = () => {

    var templateForm = (

        <div>

            <h1>{app.title}</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button disabled={user.accounts.length === 0} onClick={randomOptions}>What Should I do</button>
                <button>Submit</button>
                <p>Accounts length is {user.accounts.length}</p>

                <ol>
                    {
                        user.accounts.map((accounts) => {

                            return <li key={accounts}>{accounts}</li>;

                        })

                    }
                </ol>

                <button onClick={clearAll}>Clear</button>
            </form>
        </div>
    );
    ReactDOM.render(templateForm, appRoot);
}


var appRoot = document.getElementById('app');

renderReactForm();