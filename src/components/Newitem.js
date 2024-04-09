import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Newitem extends Component {


  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div >
        <div className="card" >
  <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newitem