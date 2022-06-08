import React, {Component} from 'react'
import Student from './Student'

class Roster extends Component {
    render() {
        const everyStudent = this.props.students.map(stu => {
            return <Student student={stu}/>
        })
        return(
            <>
               {everyStudent} 
            </>
        )
    }
}
export default Roster