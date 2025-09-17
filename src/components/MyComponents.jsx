import React , {useState} from 'react'

function MyCompoents(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateSetName = () => {
        setName("Davidson");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const isEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

 return(<div>

    <p>Name: {name}</p>
    <button onClick={updateSetName}>Set Name</button>

    <p>Age: {age}</p>
    <button onClick={incrementAge}>Age Increment</button>

    <p>Is Employed: {isEmployed  ? "Yes" : "No"}</p>
    <button onClick = {isEmployedStatus}>Employed Status</button>
 </div>)
}

export default MyCompoents