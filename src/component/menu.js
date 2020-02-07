import React from "react";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

class HeadMenu extends React.Component {

    componentDidMount() {
        let url = window.location.href.split('/')[3];
        (url === 'noteboard')? document.getElementById('board').style.backgroundColor = "#f1f1f1" : document.getElementById('profile').style.backgroundColor = "#f1f1f1"
    }

    render() {

        const marginTop = {
            marginTop: "10px"
        };

        return (
            <Menu style={marginTop}>
                <Menu.Item
                    id='board'
                >
                    <a href="/noteboard">TODO BOARD</a>
                </Menu.Item>

                <Menu.Item
                    id='profile'
                >
                    <a href="/profile">PROFILE</a>
                </Menu.Item>
                <Menu.Item
                    name='logout'
                    id='logout'
                >
                    <Link to="/logout">LOG OUT</Link>
                </Menu.Item>
            </Menu>
        );
    }

}

export default HeadMenu;