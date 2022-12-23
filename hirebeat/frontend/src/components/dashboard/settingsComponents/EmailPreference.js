import React, { useEffect, useState } from "react";
import { IconText } from "./../DashboardComponents";
import { useSelector, useDispatch } from "react-redux";
import { getEmailPreferences, getEmailTemplates, updateEmailPreferences } from './../../../redux/actions/email_preference_actions';
import { Text, Box, Stack } from '@chakra-ui/react';

const EmailPreference = (props) => {
    const templates = useSelector(state => state.email_preference_reducers.templates);
    const preferences = useSelector(state => state.email_preference_reducers.preferences);

    const [preferenceData, setPreferenceData] = useState([]);
    const [disabled, setDisabled] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmailTemplates());
        dispatch(getEmailPreferences(props.userId));
    }, [dispatch]);

    useEffect(() => {
        const initialPreference = [];
        if (preferences) {
            preferences.map((preference) => {
                initialPreference.push({
                    email_template_id: +preference.template.id,
                    status: preference.status
                });
            });
        }
        setPreferenceData(initialPreference);
    }, [preferences]);

    const checkIfFormIsDirty = (request1, request2) => {
        return request1.filter(object1 => {
            return request2.some(object2 => {
                return (object1.email_template_id === object2.email_template_id && object1.status !== object2.status);
            });
        });
    }

    const setFormData = (event) => {
        const existingElement = preferenceData.findIndex((item) => item.email_template_id === +event.target.id);
        let updatedPreference;
        if (existingElement !== -1) {
            const filteredTemplates = preferenceData.filter((item) => item.email_template_id !== +event.target.id);
            updatedPreference = [
                ...filteredTemplates,
                {
                    email_template_id: +event.target.id,
                    status: event.target.checked
                }
            ]

        } else {
            updatedPreference = [
                ...preferenceData,
                {
                    email_template_id: +event.target.id,
                    status: event.target.checked
                }
            ];
        }
        const result = checkIfFormIsDirty(preferences, updatedPreference);
        setDisabled(result.length > 0 ? false : true);
        setPreferenceData(updatedPreference);
    }

    const savePreferences = (event) => {
        event.preventDefault();
        const requestBody = {
            user_id: props.userId,
            templates: preferenceData
        }

        dispatch(updateEmailPreferences(requestBody));
        setPreferenceData([]);
        alert('Preferences updated successfully');
    }

    return <div>
        <Text fontSize='xl' color="muted" mt='5'>Email Preference</Text>
        <Box
            bg="bg-surface"
            boxShadow='sm'
            borderRadius="lg"
            p={{
                base: '4',
                md: '6',
            }}
        >
            <Stack spacing='2'>
                {templates.length &&
                    <form style={{ marginBottom: "3%" }} onSubmit={savePreferences}>
                        {

                            templates.map((template) => {
                                const selectedPreference = preferenceData.filter((item) => +item.email_template_id === +template.id);
                                const templateNameIntermediate = template.template.replace(/([A-Z])/g, " $1");
                                const templateName = templateNameIntermediate.charAt(0).toUpperCase() + templateNameIntermediate.slice(1);
                                return <div class="form-group row" style={{ marginBottom: "-1rem" }}>
                                    <Text for={template.id} fontSize='md' color="muted" mt='4' pl='4'>{templateName}</Text>
                                    <div class="col-sm-6">
                                        <input type="checkbox" id={template.id} className="form-control" style={{ width: "20px", height: "20px", marginTop: "1.1rem" }} checked={selectedPreference.length > 0 ? selectedPreference[0].status : template.status} onChange={setFormData} />
                                    </div>
                                </div>

                            })
                        }
                        <button
                            type="submit"
                            className={disabled ? "disabled-btn" : "default-btn"}
                            style={{ paddingLeft: "25px", marginTop: "2rem", textDecoration: "none" }}
                            disabled={disabled}
                        >
                            Save Preferences
                        </button>
                    </form>
                }
                {(!templates || templates.length === 0) &&
                    <h3>No Email Templates Found</h3>
                }
            </Stack>
        </Box>
    </div>;
}

export default EmailPreference;