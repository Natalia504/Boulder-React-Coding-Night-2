import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Representatives extends Component {
    constructor() {
        super()
        this.state = {
            representatives: [{ name: "john smith" }],
        }
    }
    componentWillMount() {
        axios.get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBhVKdgDSbR2LSxSIG2V9ZSuCvh4NtPiUY&address=2010 14th st Boulder CO')
            .then(res => {
                // console.log(res, 'res')
                const divisions = res.data.divisions;
                const offices = res.data.offices;
                const officials = res.data.officials;
                console.log(divisions, 'divisions')
                console.log(offices, 'offices')
                console.log(officials, 'officials');
                this.setState({
                    representatives: res.data.officials
                })
            })

    }

    render() {
        
        return (
            <div className="representatives">
                <ul>
                    {this.state.representatives.map((rep, i) => {
                        return <li key={rep.name}>
                        <Link to={`representative/${i}`}>{rep.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Representatives;
