import logo from './logo.svg';
import './App.css';

const buttonn=  ()=> {
    return(
    <>
        <h1> hello</h1>
        <h2>  hiiiee</h2>
    </>
    )
}
function App() {
    const name = "himanshu";
    const isnameShowing = true;
    return (<>
    <div className='App'>
        <h1>hello {isnameShowing ? name:'nahi hai'}!</h1>
    </div>
    </>
    );
}

export default App;