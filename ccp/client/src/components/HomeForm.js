import React from 'react';
import Center from 'react-center'
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import ImageUploader from 'react-images-upload';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'hpq3usdi';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/johntuttlewebsiteclouds/image/upload';

class HomeForm extends React.Component {

  constructor() {
    super();

    this.state = {
      motto: "",
      picture: {},
      handleSubmit: this.handleHomeSubmit.bind(this),
      uploadedFileCloudinaryUrl: '',
      carousel_images: []
    }

    this.onDrop = this.onDrop.bind(this);

  }

  componentWillMount() {
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/home_pages/1")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        carousel_images: data.carousel_images
      })
    })

    this.setState({
      motto: this.props.motto
    })
  }

  onDrop(picture){
      this.setState({
          picture: picture,
      });
    }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleHomeSubmit = (event) => {
    event.preventDefault();
    const postMotto = this.state.motto
    const body = {"motto": postMotto, "image": this.state.uploadedFileCloudinaryUrl}
    fetch('http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/home_pages/1',{
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
                  "Content-Type": "application/json"
      }
    }).then(results => {
      if (results.status === 204) {
        window.location = "/admin/D4vbeqmsYe5rvy8B"
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      motto: event.target.value
    })
  }

  handleDelete = (event) => {
    //event.target.dataset.id
    fetch('http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/carousel_images/' + event.target.dataset.id,{
      method: "DELETE",
      headers: {
                  "Content-Type": "application/json"
      }
    })
  }

  getImageAdd(){
    if (this.state.uploadedFileCloudinaryUrl === "") {
      return (<Center>
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
          </Center>)
      } else {
        return (<div>
          <p>{this.state.uploadedFile.name}</p>
          <img src={this.state.uploadedFileCloudinaryUrl} />
        </div>)
      }
    }

  render() {

    const current_images = this.state.carousel_images.map((currentValue, index) => {
      return (<div className="col-lg-3">
                <img className="col-lg-12" src={currentValue.image_file_name} />
                <button data-id={currentValue.id} onClick={this.handleDelete}>X</button>
              </div>)
    })


    const imageAdd = this.getImageAdd()

    return (
      <div>
        <Form>
          <h1>Home:</h1>
          <FormGroup>
            <Label for="homepageMotto">Home Page Motto:</Label>
            <Center>
              <div className="col-lg-8">
                <Input type="text" name="motto" id="homepageMotto" onChange={this.handleChange} value={this.state.motto}/>
              </div>
            </Center>
            <br />
          </FormGroup>
          {imageAdd}
          <Button onClick={this.state.handleSubmit}>Save</Button>
          <div className="col-lg-12">
            <br />
          </div>
          {current_images}
        </Form>
      </div>
    )
  }

}


export default HomeForm;
