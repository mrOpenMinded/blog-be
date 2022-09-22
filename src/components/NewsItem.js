import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, dateTime, source } = this.props;//destructuring of javascript ele
        return (
            <div className="my-2">
                <div className="card" >
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:'1'}}>{source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    {/* style={{width: "18rem"}} */}
                    <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/img/2022/09/17/1600x900/modiii_1663423522785_1663423531691_1663423531691.PNG"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(dateTime).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
