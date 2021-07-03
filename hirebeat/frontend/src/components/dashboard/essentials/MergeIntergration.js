import React, { useCallback } from "react";
// In your React project folder, run:
// npm install --save @mergeapi/react-merge-link
import { useMergeLink } from "@mergeapi/react-merge-link";

const MergeIntergration = (props) => {

    const onSuccess = useCallback((public_token) => {
        // Send public_token to server (Step 3)
        var data = {
            "public_token": public_token,
            "user_id": props.user.id
        };
        props.retrieveMergeAccountToken(data);
    }, []);

    const { open, isReady } = useMergeLink({
        linkToken: props.link_token, // Replace ADD_GENERATED_LINK_TOKEN with the token retrieved from your backend (Step 1)
        onSuccess,
    });

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <button className="default-btn1" disabled={!isReady} onClick={open} style={{ paddingLeft: "25px" }}>
                Start Intergration
            </button>
        </div>
    );
};

export default MergeIntergration;