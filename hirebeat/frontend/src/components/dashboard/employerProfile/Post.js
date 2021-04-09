import React, { Component } from "react";
import ShowMoreText from 'react-show-more-text';
import { confirmAlert } from 'react-confirm-alert';
import ReactPaginate from 'react-paginate';

export class Post extends Component {
    state = {
        count: this.props.count,
        offset: 0,
        pageCount: Math.ceil(this.props.employerPost.total / 2),
        newPost: [],
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 2);

        this.setState({ offset: offset }, () => {
            this.props.getEmployerPost(this.props.userId, offset);

        });
        setTimeout(() => {this.setState({
            count: this.props.count});}, 300);
    };

    exceedError = () => {
        confirmAlert({
          title: "Maximum Post Reached",
          message: "You can add five posts at most at one time.",
          buttons: [
            {
              label: 'Ok'
            }
          ]
        });
    };

    addPost = () => {
        let size = this.state.newPost.length;
        if (size < 5) {
            this.setState(prevState => ({
                newPost: [...prevState.newPost, 1]
            }));
        } else {
            return this.exceedError();
        }

    }

    saveUpdate = (postId, textId) => {
        let text = document.getElementById(textId).value;
        let data = {
            post_id: postId,
            content: text
        };
        this.props.updateEmployerPost(data);
        setTimeout(() => {this.props.getEmployerPost(this.props.userId, 0);}, 300);
        this.props.cancelEditPost();
    }

    deletePost = (postId) => {
        let data = {post_id: postId};
        this.props.deleteEmployerPost(data);
        setTimeout(() => {this.props.getEmployerPost(this.props.userId, 0);}, 300);
        setTimeout(() => {this.setState({pageCount: Math.ceil(this.props.employerPost.total / 2)});}, 500);
        this.props.cancelEditPost();
    }

    savePost = () => {
        let len = this.state.newPost.length;
        for (let i = 0; i < len; i++) {
            let textId = "add" + i;
            let text = document.getElementById(textId).value;
            if (text != "" && text != null) {
                let data = {
                    user_id: this.props.userId,
                    content: text
                };
                this.props.addEmployerPost(data);
            }
        }
        setTimeout(() => {this.props.getEmployerPost(this.props.userId, 0);}, 300);
        setTimeout(() => {this.setState({pageCount: Math.ceil(this.props.employerPost.total / 2)});}, 500);
        // reset newPost
        this.setState({newPost:[]});
    }

    render() {
        return (
            <div>
                {!this.props.isEditPost ?
                    <div style={{padding: "2rem"}}>
                        <div className="row">
                            <div className="col-8">
                                <h3 className="profile-h3">Post</h3>
                            </div>
                            <div className="col-4 profile-edit">
                                <div style={{float: "right"}}>
                                    <i className="bx bx-edit-alt"></i>
                                    <span type="button" onClick={this.props.editPost} style={{marginLeft: "0.5rem"}}>Edit</span>
                                </div>
                            </div>
                        </div>
                        {this.props.employerPost.data.map((p, index) => {
                            return (
                                <PostCard
                                  createdAt={p.created_at.substring(0, 10)}
                                  content={p.content}
                                  postId={p.id}
                                />
                            )
                        })}
                        {this.props.employerPost.total != 0 &&
                            <ReactPaginate
                                  previousLabel={'previous'}
                                  nextLabel={'next'}
                                  breakLabel={'...'}
                                  breakClassName={'break-me'}
                                  pageCount={this.state.pageCount}
                                  marginPagesDisplayed={2}
                                  pageRangeDisplayed={5}
                                  onPageChange={this.handlePageClick}
                                  containerClassName={'pagination'}
                                  activeClassName={'active'}
                            />
                        }
                        <div className="row" style={{marginTop: "1rem"}}>
                            <div className="col-7">
                                <span type="button" className="profile-edit" onClick={this.addPost}>Add Post</span>
                            </div>
                        </div>
                        { this.state.newPost.length != 0 &&
                            this.state.newPost.map((n, index) => {
                                return(
                                    <PostForm2
                                     textId={"add" + index}
                                    />
                                )
                            })
                        }
                        { this.state.newPost.length != 0 &&
                            <div className="row" style={{marginTop: "1rem"}}>
                                <div className="col-7 ml-auto" style={{paddingLeft: "50%"}}>
                                    <span type="button" className="profile-edit" onClick={this.savePost}>Save</span>
                                </div>
                            </div>
                        }
                    </div> :
                    <div style={{padding: "2rem"}}>
                        <div className="row">
                            <div className="col-7">
                                <h3 className="profile-h3">Post</h3>
                            </div>
                            <div className="col-5 profile-edit">
                                <div style={{float: "right"}}>
                                    <span type="button" onClick={this.props.cancelEditPost}>Back</span>
                                </div>
                            </div>
                        </div>
                        {/* map layer */}
                        {this.state.count.map((c, index) => {
                            {return (
                                <EditForm
                                    textId={"update"+ index}
                                    post={this.props.employerPost.data[index]}
                                    saveUpdate={this.saveUpdate}
                                    deletePost={this.deletePost}
                                />
                            );}
                        })
                        }
                    </div>
                }
            </div>
        )
    }
}

const PostCard = (props) => {
    function executeOnClick(isExpanded) {
        console.log(isExpanded);
    };

    return (
        <div>
            <p className="profile-p3" style={{marginBottom: "0.5rem"}}>{props.createdAt}</p>
            <p className="profile-p4" style={{marginBottom: "0.5rem"}}>
                <ShowMoreText
                    /* Default options */
                    lines={2}
                    more='Show more'
                    less='Show less'
                    className='content-css companydata-text2'
                    anchorClass='my-anchor-css-class'
                    onClick={executeOnClick}
                    expanded={false}
                >
                    {props.content}
                </ShowMoreText>
            </p>
        </div>
    );
}

const PostForm2 = (props) => {
    const textId = props.textId
    return (
        <div style={{marginBottom: "2rem"}}>
            <div className="profile-bg2">
                <div style={{padding: "1rem"}}>
                    <div style={{marginTop: "1rem"}}>
                        <textarea id={textId} placeHolder="Please enter your post here" className="profile-input profile-p" style={{width: "100%", height: "4rem"}}></textarea>
                    </div>
                </div>

            </div>
        </div>
    )
}

const EditForm = (props) => {
    const textId = props.textId;
    const post = props.post
    return (
        <div style={{marginBottom: "2rem"}}>
            <div className="profile-bg2">
                <div style={{padding: "1rem"}}>
                    <div className="row">
                        <div className="col-7">
                            <p className="profile-p3" style={{marginBottom: "0.5rem"}}>{post.created_at.substring(0, 10)}</p>
                        </div>
                        <div className="col-5 profile-edit">
                            <div style={{float: "right"}}>
                                <span type="button" onClick={() => props.saveUpdate(post.id, textId)}>Save</span>
                                <i className="bx bx-trash profile-edit" style={{marginLeft: "1rem", color: "#FF0000"}}></i>
                                <span className="profile-edit" type="button" style={{color: "#FF0000"}} onClick={() => props.deletePost(post.id)}>Remove</span>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: "1rem"}}>
                        <textarea id={textId} className="profile-input profile-p" style={{width: "100%", height: "4rem"}} defaultValue={post.content}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;