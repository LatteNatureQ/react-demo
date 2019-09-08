import React, {Component} from 'react'
import '../static/css/comment-add.css'

export default class CommentAdd extends Component {
    constructor(props) {
        super(props)
        this.handelSubmit = this.handelSubmit.bind(this)
    }

    handelSubmit() {
        let userName = this.userInput.value
        let content = this.userTextArea.value
        if (userName == '' || content == '') {
            return
        }
        this.props.comments.push({userName, content})
        // 怎么子传父?
        this.props.changeData(this.props.comments)
    }

    render() {
        return (
            <div className='comment-add'>
                <h4>用户名</h4>
                <input type="text" ref={input => this.userInput = input}/>
                <h4 className='content'>评论内容</h4>
                <textarea name="" id="" cols="30" rows="10" ref={input => this.userTextArea = input}>

                </textarea>
                <button onClick={this.handelSubmit}>提交</button>
            </div>
        )
    }
}
