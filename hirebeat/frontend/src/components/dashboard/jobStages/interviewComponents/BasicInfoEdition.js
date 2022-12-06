import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";
import { Button, Box, Heading } from '@chakra-ui/react';

export class BasicInfoEdition extends Component {
    state = {
        location: this.props.location,
    }
    handleLocation = (location) => {
        this.setState({ location: location });
    }

    saveUpdate = () => {
        let phone = document.getElementById("phone").value;
        let linkedin = document.getElementById("linkedin").value;
        let data = {
            "job_id": this.props.jobId,
            "email": this.props.email,
            "phone": phone,
            "location": this.state.location,
            "linkedinurl": linkedin,
        }
        console.log(data);
        this.props.updateApplicantBasicInfo(data);
        setTimeout(() => {
            let page = this.props.selectedPage + 1; // selectedPage is 0 indexed
            this.props.getPostedJobs(this.props.user.id, page, this.props.selectedCurrentStage, "", "", "", "", this.props.jobId, this.props.keyWords);
            this.props.disableEdit();
        }, 300)

    }

    render() {
        return (
            <Box bg="bg-surface" borderRadius="md" boxShadow="sm" p='4'>
                <Box mb='4'>
                    <Heading as='h3' size='xs' wordWrap='break-word' wordBreak='break-word'>{this.props.name}</Heading>
                </Box>
                <div style={{ marginTop: "1%", display: "flex", alignItems: "center", marginBottom: "1vw" }}>
                    <i className="bx bx-phone bx-sm"></i>
                    <input id="phone" className="basic-info-input" defaultValue={this.props.phone} style={{ fontSize: "0.8vw" }}></input>
                </div>
                <div className="mb-2" style={{ marginTop: "1%", display: "flex", alignItems: "center", marginBottom: "1vw" }}>
                    <i className="bx bx-location-plus bx-sm"></i>
                    <Autocomplete
                        id="location"
                        className="basic-info-input"
                        style={{ width: "100%", fontSize: "0.8vw" }}
                        language="en"
                        apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                        onPlaceSelected={(place, inputRef, autocomplete) => {
                            this.handleLocation(place.formatted_address);
                        }}
                        defaultValue={this.props.location}
                    />
                </div>
                <div className="mb-2" style={{ marginTop: "1%", display: "flex", alignItems: "center", marginBottom: "1vw" }}>
                    <i className="bx bxl-linkedin-square bx-sm"></i>
                    <input id="linkedin" className="basic-info-input" defaultValue={this.props.linkedin} style={{ fontSize: "0.8vw" }}></input>
                </div>
                <div className="d-flex justify-content-between" style={{ marginTop: "1vw", paddingBottom: "1vw" }}>
                    <Button borderRadius='sm' colorScheme='blue' size='sm' onClick={this.saveUpdate}>Save</Button>
                    <Button borderRadius='sm' colorScheme='gray' size='sm' onClick={this.props.disableEdit}>Cancel</Button>
                </div>
            </Box>
        )
    }
}

export default BasicInfoEdition;