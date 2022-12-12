import React from 'react';
import { Stack } from '@chakra-ui/react';
import { SourcingRequestList } from "../jobStages/SourcingRequestList";

export const AISourcing = (props) => {
    return (
        <React.Fragment>
            <Stack py='5'>
                <SourcingRequestList
                    job={props.job.job_details}
                    user={props.user}
                    profile={props.profile}
                    employerProfileDetail={props.employerProfileDetail}
                />
            </Stack>
        </React.Fragment>
    )
}