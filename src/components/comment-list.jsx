import React, {Component} from 'react'
import CommentItem from './comment-item'
import '../static/css/comment-list.css'

export default class CommentList extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.comments)
    }

    delComment = (index) => {
        this.props.delComment(index)
    }

    render() {
        return (
            <div>
                <h3 className='comment-reapy'>评论回复:</h3>
                <CommentItem delComment={this.delComment} comments={this.props.comments}></CommentItem>
            </div>
        )
    }
}
