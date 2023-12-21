import { useState, ChangeEvent } from 'react';

const UserInput = () => {

    const [user_name, setUserName] = useState("ABE Hiroshi");

    function getUserName() {
            alert(`${user_name}さん、ようこそ茂田オフィスへ！`);
        }

    function handleInputChange(event: any) {
        setUserName(event.target.value)
    }

    return(
        <div>
            <input type="text" name="user_name" value={user_name} onChange={handleInputChange}></input>
            <button onClick={getUserName} type="button">名前を決定！</button>
        </div>
    );
};

export default UserInput;