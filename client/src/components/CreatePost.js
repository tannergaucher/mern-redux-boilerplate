import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createPost } from '../actions'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Button = styled.button`
  margin-top: 1em;
`

class CreatePost extends React.Component {
  renderField = field => (
    <div>
      <label>{field.label}</label>
      <input type="text" {...field.input} />
      {/* ERROR HANDLE HERE */}
    </div>
  )
  onSubmit = values => {
    this.props.createPost(values, () => this.props.history.push('/'))
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <Container>
        <Form onSubmit={handleSubmit(this.onSubmit)}>
          <h2>@ new post</h2>
          <Field name="title" label="Title" component={this.renderField} />
          <Field
            name="categories"
            label="Categories"
            component={this.renderField}
          />
          <Field name="content" label="content" component={this.renderField} />
          <Button type="submit">Add post</Button>
          <Link to="/">cancel</Link>
        </Form>
      </Container>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.title) {
    errors.title = 'enter a title'
  }

  if (!values.categories) {
    errors.categories = 'enter a category'
  }

  if (!values.content) {
    errors.content = 'no content0'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'CreatePostForm'
})(
  connect(
    null,
    { createPost }
  )(CreatePost)
)
