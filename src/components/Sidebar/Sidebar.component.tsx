import React from "react";
import styles from "./Sidebar.module.css";
import { User, Form} from "../index";


import userData from "~/data/userData.json";

const Sidebar = () => {

const handleLogout =()=>{
    console.log("logout");
}

    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <User
                 name={userData.name}
                 email={userData.email}
                 image={userData.url}
                 logout={handleLogout}/>
            </div>
            <div className={styles.center}>
                <Form />
            </div>
        </div>
    )
}

export default Sidebar;