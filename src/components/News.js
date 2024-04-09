import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newitem from './Newitem'

export class News extends Component {
  static defaultProps={
    country:'in',
    category:'gerneral'
  }
  static propTypes = {
    country:PropTypes.string,
    category:PropTypes.string

  }
  constructor()
  {
   super();
   this.state=
   {
    articles:[],
    page:1
   }
    
  }
  async componentDidMount()
  {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=yourapikey&page=1`;
    let data=await fetch(url)
    let parsedData=await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})

  }
  handlePrevious=async()=>
  {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=yourapikey&page=${this.state.page -1}`;
    let data=await fetch(url)
    let parsedData=await data.json()
    console.log(parsedData)
    this.setState(
      {
        articles: parsedData.articles,
        page: this.state.page -1
      }
    )
  }
   handleNext=async()=>
  {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=yourapikey&page=${this.state.page +1}`;
    let data=await fetch(url)
    let parsedData=await data.json()
    console.log(parsedData)


    this.setState(
      {
        articles: parsedData.articles,
        page: this.state.page +1
      }
    )
  }
  render() {
    return (
        <>
         <div className="container my-3">
         <h2 >TOP HEADLINES</h2>
         <div className="row">
          {this.state.articles.map((element)=>
          {
            return (<div className="col-md-6" key={element.url}>
            <Newitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>)
          }
          
          )}
           </div>
          </div>
         <div class="d-flex bd-highlight mb-3 my-6">
    <div class="p-2 bd-highlight"><button disabled={this.state.page<=1}type="button" class="btn btn-primary" onClick={this.handlePrevious}>&larr; Previous</button></div>
    <div class="ms-auto p-2 bd-highlight"><button type="button" class="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button></div>
    </div>
         
   
         
      
      </>
    )
     
  }
}

export default News