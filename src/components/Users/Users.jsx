import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/woman.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount1 = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount1; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.page}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}> {p}</span>
            })}


        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>

                        <NavLink to={'/profile/' + u.id}>

                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>

                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {"API-KEY":"0d84092c-4446-4824-9d15-19d371343980"}
                                }).then(response => {
                                    if (response.data.resutltCode === 0) {
                                        debugger
                                        props.unfollow(u.id)
                                    }
                                })


                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY":"0d84092c-4446-4824-9d15-19d371343980"}

                                }).then(response => {

                                    if (response.data.resutltCode === 0) {

                                        props.follow(u.id)
                                    }
                                })


                            }}>Follow</button>}

                    </div>
                    </span>
                    <span>
                    <span>
                         <div>{u.name}</div>
                         <div>{u.status}</div>
                    </span>
                        <span>
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.country'}</div>
                        </span>
                    </span>

                </div>
            )


        }
    </div>

}
export default Users