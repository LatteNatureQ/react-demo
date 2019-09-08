import React, {Component} from 'react'
import CommentAdd from './comment-add'
import CommentList from './comment-list'
import '../static/css/app.css'
import axios from '../http/axios'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                {userName: 'Tom', content: 'ReactJS好难啊!'},
                {userName: 'JACK', content: 'ReactJS还不错!'}
            ]
        }
    }

    componentDidMount = () => {
        axios.get('douban/homeData').then(res => {
            console.log(res.data)
        })
    }
    // 添加
    changeData = data => {
        this.setState({
            comments: data
        })
    }

    // 删除
    delComment = index => {
        this.state.comments.splice(index, 1)
        this.setState({
            comments: this.state.comments
        })
    }

    render() {
        return (
            <div className='app'>
                <div className='header'>
                    请发表对React的评论
                </div>
                <div className='container'>
                    <div>
                        <CommentAdd changeData={this.changeData} comments={this.state.comments}></CommentAdd>
                    </div>
                    <div>
                        <CommentList delComment={this.delComment} comments={this.state.comments}></CommentList>
                    </div>
                </div>
            </div>
        )
    }
}

