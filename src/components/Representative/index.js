import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Representative extends Component {
    constructor() {
        super()
        this.state = {
            representative: [],
        }
    }
    componentWillMount() {
        axios.get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBhVKdgDSbR2LSxSIG2V9ZSuCvh4NtPiUY&address=2010 14th st Boulder CO')
            .then(res => {
                console.log(res, 'res')
                this.setState({
                    representative: res.data.officials
                })
            })

    }

    render() {
        if (!this.state.representative.length) {
            return null
        }
        const rep = this.state.representative[this.props.match.params.id]
        return (
            <div className="representative">
                {rep.name}
                <img src={rep.photoUrl} width='200' />
            </div>
        );
    }
}

export default Representative;
