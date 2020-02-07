import React from 'react'
import { Button, Card,List,Icon} from 'semantic-ui-react'


class home extends React.Component{

    onLoginBtnClicked =()=>{
       this.props.history.push('/login');
    };

    onRegisterBtnClicked =()=>{
    this.props.history.push('/register');
    };
    render() {
        return(  <Card.Group>
            <Card centered style={{marginTop:'50px'}}>
                <Card.Content>
                    <Card.Header> Simple TODO App with </Card.Header>
                    <Card.Meta>@1cornerstone </Card.Meta>
                    <Card.Description>
                        <List>
                            <List.Item as='a'>
                                <Icon name='right triangle' />
                                <List.Content>
                                    <List.Header>React</List.Header>
                                    <List.Description>
                                        Js Frontend Framework to create interactive UIs.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item as='a'>
                                <Icon name='right triangle' />
                                <List.Content>
                                    <List.Header>Redux</List.Header>
                                    <List.Description>
                                        State Management
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item as='a'>
                                <Icon name='right triangle' />
                                <List.Content>
                                    <List.Header>Node JS</List.Header>
                                    <List.Description>
                                        Backend Language
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item as='a'>
                                <Icon name='right triangle' />
                                <List.Content>
                                    <List.Header>Postgres</List.Header>
                                    <List.Description>
                                        Database
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item as='a'>
                                <Icon name='right triangle' />
                                <List.Content>
                                    <List.Header>Redis</List.Header>
                                    <List.Description>
                                        To store User Session after Authorization
                                    </List.Description>
                                </List.Content>
                            </List.Item>

                        </List>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group>
                        <Button positive onClick={this.onLoginBtnClicked}>LOGIN</Button>
                        <Button.Or />
                        <Button onClick={this.onRegisterBtnClicked} >REGISTER</Button>
                    </Button.Group>
                </Card.Content>
            </Card>

        </Card.Group>)
    }

}

export default home