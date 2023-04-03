import './Home.styles.css';
const Home = ()=>{
    return(
        <div className='container'>
            <h1>Daily Routine</h1>
            <form action="">
                <input type="text" placeholder='title'/>
                <textarea placeholder='Discreption'></textarea>
                <button type='submit'>Add</button>
            </form>
        </div>
    );

}
export default Home;