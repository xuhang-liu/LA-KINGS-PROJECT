import React, { useEffect, useState } from "react";
import { IconText } from "./../DashboardComponents";
import { useSelector, useDispatch } from "react-redux";
import { getEmailPreferences, getEmailTemplates, updateEmailPreferences } from './../../../redux/actions/email_preference_actions';

const EmailPreference = (props) => {
    const templates = useSelector(state => state.email_preference_reducers.templates);
    const preferences = useSelector(state => state.email_preference_reducers.preferences);

    const [preferenceData, setPreferenceData] = useState([]);

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

    return <div class="container">
        <div className="row" >
            <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                <IconText
                    textDisplayed={"Email Preference"}
                    textSize={"24px"}
                    textColor={"#090D3A"}
                    iconMargin={"3px"}
                />
            </div>
            <div className="chart-bg1 container">
                {templates.length &&
                    <form style={{ marginBottom: "3%" }} onSubmit={savePreferences}>
                        {
                            templates.map((template) => {
                                const selectedPreference = preferenceData.filter((item) => +item.email_template_id === +template.id);
                                const templateNameIntermediate = template.template.replace(/([A-Z])/g, " $1");
                                const templateName = templateNameIntermediate.charAt(0).toUpperCase() + templateNameIntermediate.slice(1);
                                return <div class="form-group row" style={{ marginBottom: "-1rem" }}>
                                    <label for={template.id} className="col-sm-3 col-form-label">{templateName}</label>
                                    <div class="col-sm-6">
                                        <input type="checkbox" id={template.id} className="form-control" style={{ width: "20px", height: "20px", marginTop: "1.1rem" }} checked={selectedPreference.length > 0 ? selectedPreference[0].status : template.status} onChange={setFormData} />
                                    </div>
                                </div>

                            })
                        }
                        <button
                            type="submit"
                            className="default-btn"
                            style={{ paddingLeft: "25px", marginTop: "1rem", textDecoration: "none" }}
                        >
                            Save Preferences
                        </button>
                    </form>
                }
                {(!templates || templates.length === 0)  &&
                    <h3>No Email Templates Found</h3>
                }
            </div>
        </div>
    </div>;
}

export default EmailPreference;