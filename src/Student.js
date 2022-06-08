import React, {Component} from 'react'
import Score from './Score'

class Student extends Component {
    render() {
        const scores = this.props.student.scores.map(scr => {
            return <Score score={scr} />
        })
        return(
            <>
                <h2>{this.props.student.name}</h2>
                <h4>{this.props.student.bio}</h4>
                {scores}
            </>
        )
    }
}
export default Student