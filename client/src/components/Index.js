import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'
import Post from './Post'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

class Index extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts = () => {
    const { posts } = this.props

    return Object.keys(posts).map(key => (
      <li key={posts[key].id}>
        <Link to={`/posts/${posts[key]._id}`}>{posts[key].title}</Link>
      </li>
    ))
  }

  render() {
    const { posts } = this.props
    return (
      <Container>
        <h2>@index</h2>
        <ul>{this.renderPosts()}</ul>
        <Link to="/create" style={{ marginTop: '1em' }}>
          Create Post
        </Link>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Index)
