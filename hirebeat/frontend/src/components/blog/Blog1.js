import React from "react";
import { Link } from 'react-router-dom';

const blogtitle="7 Ways to Conduct Interview Practice Online";
const author="by Owen Williams |";
const date="January 01, 2018 |";
const readtime="5 mins read";
const title1="Title 1";
const title2="Title 2";
const text1Line1="Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus. Phasellus tempor nisl ligula, id cursus nunc tincidunt nec.";
const text1Line2="Morbi id orci eu nulla ultricies finibus eu non purus. Aliquam erat volutpat. Curabitur iaculis orci mauris, eu laoreet ante ultrices non. Nam tempor elit nec lobortis vestibulum. Aenean in neque vel justo fermentum lacinia ut a velit. Ut non dui rhoncus sapien varius venenatis non in justo. Phasellus mattis, orci eu finibus rutrum, turpis enim laoreet mauris, vitae imperdiet tellus libero vitae mauris. Ut blandit, nibh et iaculis ullamcorper, odio turpis semper mi, et aliquam ex orci sit amet quam.";
const text1Line3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus. Phasellus tempor nisl ligula, id cursus nunc tincidunt nec.";
const text2Line1="Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus. Phasellus tempor nisl ligula, id cursus nunc tincidunt nec.";
const text2Line2="Morbi id orci eu nulla ultricies finibus eu non purus. Aliquam erat volutpat. Curabitur iaculis orci mauris, eu laoreet ante ultrices non. Nam tempor elit nec lobortis vestibulum. Aenean in neque vel justo fermentum lacinia ut a velit. Ut non dui rhoncus sapien varius venenatis non in justo. Phasellus mattis, orci eu finibus rutrum, turpis enim laoreet mauris, vitae imperdiet tellus libero vitae mauris. Ut blandit, nibh et iaculis ullamcorper, odio turpis semper mi, et aliquam ex orci sit amet quam.";
const text2Line3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus. Phasellus tempor nisl ligula, id cursus nunc tincidunt nec.";



export default function Blog1() {
  return (
      <div
          className="container-fluid"
          style={{
            padding: 0,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
      >
        <div className="blog-top-title">{blogtitle}</div>
        <div>
          <img className="blog-top-image" src="https://hirebeat-assets.s3.amazonaws.com/blog/Mask+Group.png"/>
        </div>
        <div className="blog-top-author">{author}</div>
        <div className="blog-top-date">{date}</div>
        <div className="blog-top-readtime">{readtime}</div>
        <img className="blog-icon-linkin" src="https://hirebeat-assets.s3.amazonaws.com/blog/floating_LinkedIn_hover.png"/>
        <img className="blog-icon-facebook" src="https://hirebeat-assets.s3.amazonaws.com/blog/Group+2.png"/>
        <img className="blog-icon-twitter" src="https://hirebeat-assets.s3.amazonaws.com/blog/floating_Twitter_hover.png"/>
        <div className="blog-mid-title1">{title1}</div>
        <div className="blog-mid-text1">
          <a>{text1Line1}</a><br/><br/><a>{text1Line2}</a><br/><br/><a>{text1Line3}</a>
        </div>
        <div className="blog-mid-title2">{title2}</div>
        <div className="blog-mid-text2">
          <a>{text2Line1}</a><br/><br/><a>{text2Line2}</a><br/><br/><a>{text2Line3}</a>
        </div>
        <div className="blog-border"></div>
        <div className="blog-similarblog">Similar Blogs</div>
        <div className="blog-bottom-box1">
          <div><img className="blog-bottom-box1-pic" src="https://hirebeat-assets.s3.amazonaws.com/blog/facebook-logo-2015-blue-1920+1.png"></img></div>
          <div className="blog-bottom-box1-title">Facebook Technical Interview Questions to Crack Coding Interview</div>
          <div className="blog-bottom-box1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          <div className="blog-bottom-box1-tag">#interview</div>
          <div className="blog-bottom-box1-date">Aug 1, 2020</div>
          <Link to="/blog1" className="blog-bottom-box1-link">Read more</Link>
        </div>


        <div className="row footer footer-blog1" style={{marginLeft: "0px", marginRight: "0px", marginTop: "145rem"}}>
          <div className="col footer-align">
            <Link style={{textDecoration: "none"}} to="/company" >
              <p style={{color: "#FFFFFF"}}>About</p>
            </Link>
            <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/company" >
              <p style={{color: "#FFFFFF"}}>Contact</p>
            </Link>
            <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/privacy" >
              <p style={{color: "#FFFFFF"}}>Privacy</p>
            </Link>
            <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/term" >
              <p style={{color: "#FFFFFF"}}>Terms</p>
            </Link>
          </div>
          <div className="col footer-align">
            <img style={{width:"2.375rem", marginLeft: "20%", marginRight: "1.25rem"}} src="https://hirebeat-assets.s3.amazonaws.com/facebook.png" alt="facebook icon"/>
            <img style={{width:"2.375rem", marginRight: "1.25rem"}} src="https://hirebeat-assets.s3.amazonaws.com/linkedin.png" alt="linkedin icon"/>
            <img style={{width:"2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/ins.png" alt="instagram icon"/>
          </div>
        </div>
      </div>
  );
}