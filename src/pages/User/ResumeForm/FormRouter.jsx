

import React from 'react';
import { useParams } from 'react-router-dom';
import ResumeFormOne from './ResumeFormOne/ResumeFormOne';
import ResumeFormTwo from './ResumeFormTwo/ResumeFormTwo';


const FormRouter = () => {
    const { templateId } = useParams();
    console.log('Current templateId:', templateId);
    const forms = {
        template1: ResumeFormOne,
        template2: ResumeFormTwo,
    };

    const SelectedForm = forms[templateId];


    if (!SelectedForm) {
        return <div>Error: Template not found</div>;
    }


    return <SelectedForm templateId={templateId} />;
};

export default FormRouter;