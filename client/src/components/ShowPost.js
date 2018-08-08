import React from 'react'
import styled from 'styled-components'
import { fetchPost, deletePost } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Post from './Post'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`
class ShowPost extends React.Component {
  componentDidMount() {
    //get id from url using match prop from 'react-router'
    const { id } = this.props.match.params
    console.log('id', id)
    this.props.fetchPost(id)
  }

  onDeleteClick = () => {
    const { _id } = this.props.post
    // console.log('tanner', _id)
    this.props.deletePost(_id, () => this.props.history.push('/'))
  }

  render() {
    const { post } = this.props
    console.log(post)

    if (!post) {
      return <div>..loading</div>
    }
    return (
      <Container>
        <Post
          title={post.title}
          categories={post.categories}
          content={post.content}
        />
        <button onClick={this.onDeleteClick}>delete post</button>
        <Link to="/">Back</Link>
      </Container>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(ShowPost)
