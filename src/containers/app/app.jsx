import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import CommentAdd from "../../components/comment-add/comment-add";
import CommentList from "../../components/comment-list/comment-list";
import {addComment, deleteComment, getComments} from '../../redux/actions'

export class App extends Component {

    //給組件對象指定state屬性
    static propTyps = {
        comments : PropTypes.array.isRequired,
        addComment : PropTypes.func.isRequired,
        deleteComment : PropTypes.func.isRequired,
        getComments : PropTypes.func.isRequired
    }

    componentDidMount() {
        //異步獲取評論陣列
        this.props.getComments()
    }

    render() {
        const {comments, addComment, deleteComment} = this.props

        return (
            <div>
                <div>
                    <div>
                        <h1>請發表你對React的評論</h1>
                    </div>
                </div>
                <div>
                    <CommentAdd addComment={addComment}/>
                </div>
                <hr/>
                <div>
                    <CommentList comments={comments} deleteComment={deleteComment}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({comments : state.comments}), // state就是一個comments陣列
    {addComment, deleteComment, getComments}
)(App)