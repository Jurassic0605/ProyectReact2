import React from 'react';


export default class Stast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: false,
            valor2: true,
            stats: {
                height: 0,
                base_stats: 0,
            }
        }
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.namePK}`)
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            this.setState({
                stats: {
                    height: result.height,
                    base_stats: result.base_stats,
                },
            });
        });
    }
}