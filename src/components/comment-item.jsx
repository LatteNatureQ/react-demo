import React, {Component} from 'react'
import '../static/css/comment-item.css'

export default class CommentItem extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.comments)
    }

    handelDelComment = (e) => {
        // e.target.getAttribute('data-index')
       if(window.confirm(`确定要删除${e.target.getAttribute('data-user')}发表的评论吗?`)){
           this.props.delComment(e.target.getAttribute('data-index'))
       }
    }

    render() {
        return (
            <div className='coment-item'>
                <ul>
                    {this.props.comments.map((item, index) => (<li key={index}>
                        {item.userName}说:
                        <p>{item.content}</p>
                        <button data-index={index} data-user={item.userName}
                                onClick={this.handelDelComment}>删除
                        </button>
                    </li>))}
                </ul>
            </div>
        )
    }
}
