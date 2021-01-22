import React from 'react';

class Scores extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch("https://nhl-score-api.herokuapp.com/api/scores/latest")
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }

    render() {
        return (
            <div>
                <p>Inside the fetch component</p>
            </div>
        )
    }
}

export { Scores };