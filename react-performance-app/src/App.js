import { useEffect, useState } from 'react';
import './App.css';
import A from './components/A';
import { B } from './components/B';

function App() {

    const [value, setValue] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('htttps://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [])


    return (
        <div style={{ padding: '1rem' }}>
            <input 
                value={value}
                onChange={e=>setValue(e.target)}
            />

            <div style={{ display: 'flex' }}>
                <A />
                <B />
            </div>
        </div>
    );
}

export default App;
