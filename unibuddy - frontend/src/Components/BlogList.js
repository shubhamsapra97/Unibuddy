import React,{Component} from 'react';
import Post from './Post.jsx';

//export default props =>
//  <div>
//    Add your code to render the blog list here!
//  </div>;

class BlogList extends Component {
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log(this.props.data);
    }
    
    render() {
        return (
            <div className="post-container">
                
                {
                    this.props.data.length > 0 ?
                    
                    this.props.data.map((val, index) => {
                        return <Post key={val.id} postData={val} />
                    })
                      
                    :
                    
                    'No Child Categories'
                }
            
            </div>
        );
    }
    
}

export default BlogList;
