import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/woman.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {unfollow, userAPI} from "../../API/api";

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
                            ? <button disabled={props.following.some(id => id === u.id)} onClick={() => {
                                props.unfollowThunk(u.id)


                            }}>Unfollow</button>
                            : <button disabled={props.following.some(id => id === u.id)} onClick={() => {

                                props.followThunk(u.id)

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