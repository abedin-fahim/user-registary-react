import Card from "../UI/Card/Card";
import classes from './UserList.module.css'

const UserList = (props) => {
    return (
        <div>
            <Card>
                <ul className={classes.users__ul}>
                    {props.users.map((user) => (
                        <li key={user.id}>{user.username} ({user.age})</li>
                    ))}
                </ul>
            </Card>
        </div>
    )
}

export default UserList; 