import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import * as Icon from 'react-feather';

import './CommentSection.css';
import dummyData from '../../dummy-data';

class CommentSection extends React.Component {
    state= {
        comments: [],
        newComment: ''
    }

    componentDidMount() {
        this.setState({ comments: dummyData })
    }

    
    render() {
        const timeStamp = Moment().startOf('hour').fromNow();
     return (
        <div>
            {this.state.comments.map(comment => {
                return(
                    <div className="comContainer" key={comment.username} >
                        <p className="comUsername">{comment.username}</p>
                        <p className="comText">{comment.text}</p>
                    </div>
                )
            })}
            <p className="time">{timeStamp}</p>
            <form>
                <input type="text" value={this.state.newComment} 
                    onSubmit={this.handleChange} placeholder="Add a comment..." />
            </form>
            <Icon.MoreHorizontal />
        </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired,
    }

export default CommentSection