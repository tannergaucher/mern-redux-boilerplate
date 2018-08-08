import React from 'react'
import styled from 'styled-components'

const PostList = styled.li`
  list-style-type: none;
`
const Title = styled.h3``
const Categories = styled.h4``
const Content = styled.p``

const Post = props => (
  <PostList key={props.id}>
    <Title>{props.title}</Title>
    <Categories>{props.categories}</Categories>
    <Content>{props.content}</Content>
  </PostList>
)

export default Post
