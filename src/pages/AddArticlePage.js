import React from 'react'
import { Form, Button } from 'react-bootstrap'
import ArticlesAPI from '../api/ArticlesAPI'

const AddArticlePage = () => {

  const handleFormSubmit = async (evt) => {
    console.log("handleFormSubmit")
    evt.preventDevault()
    const articleObject = {
      title: evt.target.title.value,
      byline: evt.target.byline.value,
      abstract: evt.target.abstract.value
    }
    let response = await ArticlesAPI.addArticle(articleObject)
    console.log(response)
  }

  return(
    <div>
      <h1>Add Article Page</h1>
      <Form onSubmit={ handleFormSubmit } className='m-3'>
        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="title" name = 'title' />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>byline</Form.Label>
          <Form.Control type="text" placeholder="byline" name = 'byline' />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Abstract</Form.Label>
          <Form.Control type="text" placeholder="abstract" name = 'abstract' />
        </Form.Group>

        <Button variant="outline-primary" size = 'lg' blocktype="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default AddArticlePage;