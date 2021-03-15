import React, { Component } from 'react';

class FetchApi_react extends Component {
    state = {
        email: '',
        picture: '',
    }
    componentDidMount() {
        this.fetchUser();
    }
  
    fetchUser = () => {
        fetch('https://randomuser.me/api/')
            .then(rs => rs.json())
            .then(data => {
                const [user] = data.results;
                this.setState({
                    email: user.email,
                    picture: user.picture.medium
                })

            })
    }

    render() {
        const { email, picture } = this.state
        return (
            <div>
                <img src={picture} alt="" />
                <h3>{email}</h3>
            </div>
        );
    }
}

export default FetchApi_react ;