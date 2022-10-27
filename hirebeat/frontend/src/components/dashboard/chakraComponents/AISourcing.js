import React from 'react';
import { Stack } from '@chakra-ui/react';
import { SourcingRequestList } from "../jobStages/SourcingRequestList";

export const AISourcing = (props) => {
    return (
        <React.Fragment>
            <div className="container-fluid py-5 px-3">
                <Stack>
                    <SourcingRequestList
                        job={props.job.job_details}
                        user={props.user}
                        profile={props.profile}
                        employerProfileDetail={props.employerProfileDetail}
                    />
                </Stack>
            </div>
        </React.Fragment>
    )
}