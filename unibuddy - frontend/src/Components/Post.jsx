import React,{Component} from 'react';

class Post extends Component {
    
    constructor(props) {
        super(props);
        this.data = this.props.postData;
        this.state = {
            likes: 0
        }
    }
    
    componentDidMount() {
        console.log(this.data);
    }
    
    incremementLike = () => {
        this.setState((prevState) => {
            return {
               likes: prevState.likes + 1 
            }
        },() => {
            console.log(this.data.id);
            console.log(this.state.likes)
        });
    }
    
    render() {
        return (
            <div className="post">
                
                <div className="post-header">
                    <img className="profile-pic"
                        src={this.data.author.profilePhoto}
                        alt={this.data.title}
                    />
                    <div className="author_details">
                        <span>{this.data.author.firstName}</span>
                        <span>{this.data.author.degree.name}</span>
                    </div>
                    <input 
                        type="button"
                        className="like-button" 
                        onClick={this.incremementLike}
                        value="Like"
                    />
                </div>
            
                <div className="crop-blog-pic">
                    <img className="blog-pic"
                        src={this.data.image}
                        alt="image"
                    />
                </div>
                <span className="blog-title">{this.data.title}</span>
                <span className="blog-text">{this.data.text}</span>
                
                <div className="blog-extras">
                    <div className="blog-extras-details">
                        <span>{this.data.topic.name}</span>
                        <span>{this.data.readingTime} min read</span>
                    </div>
                    <div className="blog-extras-count">
                        <span>{this.data.numberOfViews} views</span>
                        <span>{this.state.likes} likes</span>
                    </div>
                </div>
                
            </div>
        );
    }
    
}

export default Post;
