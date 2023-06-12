import React, {useState} from "react";
import Warning from "../warning/Warning";
import "./update.css";
// import {remove, addHello} from "../../redux/userSlice";
import {useSelector, useDispatch} from "react-redux";
import {updateUser} from "../../redux/apiCalls";

export default function Update() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // console.log(name, email)
    // const state = useSelector((state) => state);
    // console.log('state:', state)

    const {userInfo, pending, error} = useSelector((state) => state.user);
    const dispatch = useDispatch();


    const handleClickBtnUpdate = (event) => {
        event.preventDefault();
        // dispatch(addHello({name, email}))
        updateUser({name, email}, dispatch)
        // console.log(event)
    }

    const handleClickBtnDelete = (event) => {
        event.preventDefault()
        // dispatch(remove())
    }

    return (
        <div className="update">
            <div className="updateWrapper">
                <h3 className="updateTitle">Update Your Account</h3>
                <Warning/>
                <button className="delete" onClick={handleClickBtnDelete}>Delete Account</button>
                <div className="updateContainer">
                    <form>
                        <div className="formItem">
                            <label>Profile Picture</label>
                            <div className="profilePic">
                                <img
                                    className="avatar"
                                    src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <span className="change">Change</span>
                            </div>
                        </div>
                        <div className="formItem">
                            <label>Username</label>
                            <input

                                className="formInput"
                                type="text"
                                placeholder={userInfo.name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="formItem">
                            <label>Email</label>
                            <input
                                className="formInput"
                                type="text"
                                placeholder={userInfo.email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="formItem">
                            <label>Password</label>
                            <input className="formInput" type="password"/>
                        </div>
                        <button
                            className="updateButton"
                            onClick={handleClickBtnUpdate}
                            disabled={pending}
                        >
                            Update
                        </button>
                        {error && <span className='error'>Some Thing went wrong!</span>}
                        {pending && <span className='success'>Updated successfully</span>}
                    </form>
                </div>
            </div>
        </div>
    );
}
