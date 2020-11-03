import React, { Component } from "react";
import PropTypes from "prop-types";
import ReviewWindow from "./ReviewWindow";


export class MediaList extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    render() {
        let index = this.props.index;
        let videos = this.props.data[0];
        let sentences = this.props.data[1];
        let subcategories = this.props.data[2];
        let review_count = this.props.review_count;
        return (
            <div>
                <ReviewWindow
                    q_types={videos[index].q_type}
                    q_category={videos[index].q_category}
                    q_description={videos[index].q_description}
                    video={videos[index]}
                    loaded={true}
                    sentences={sentences[index]}
                    subcategories={subcategories[index]}
                    review_count={review_count}
                />
            </div>
        );
    }
};

export default MediaList;