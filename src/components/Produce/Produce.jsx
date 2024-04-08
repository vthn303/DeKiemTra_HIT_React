import "./Produce.scss";
import  { useState } from "react";

const Produce = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [des, setDes] = useState("");

    const handleAddProduce = (e) => {
        e.preventDefault();
        if(name === "" || age === "" || des === ""){
            return alert("Please fill in all fields!");
        }
        const newUser = {
            name: name,
            age: age,
            des: des,
        }
        setUsers([...users, newUser]);
        setName("");
        setAge("");
        setDes("");
        console.log(users);
    }

    const handleDeleteProduce = (id) => {
        const delUser = [...users];
        const index = delUser.findIndex((item) => item.id === id);
        delUser.splice(index, 1);
        setUsers(delUser);
    }

    // const handleUpdateProduce = (id) => {
    //     const updateUser = [...users];
    //     const index = updateUser.findIndex((item) => item.id === id);
    // }


    return (
        <>
            <h1>Quản lý User</h1>
            <form onSubmit={handleAddProduce}>
                <label htmlFor="name-user">Name: </label>
                <input 
                    autoComplete="off" 
                    type="text" 
                    id="name-user" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <br />
                <label htmlFor="age-user">Age: </label>
                <input 
                    autoComplete="off" 
                    type="date" 
                    id="age-user" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                />
                <br />
                <label htmlFor="des-user">Describe: </label>
                <textarea 
                    rows={5}
                    cols={20}
                    autoComplete="off" 
                    type="text" 
                    id="des-user" 
                    value={des} 
                    onChange={(e) => setDes(e.target.value)} 
                />
                <br />
                <input type="submit" />
            </form>

            <table >
                <caption>Quản Lý Nguoi dung</caption>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Mô tả</th>
                    <th>Thực hiện</th>
                </tr>
                {users.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.des}</td>
                        <td>
                            <button onClick={handleDeleteProduce}>Delete</button>
                            <button>Update</button>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default Produce;
