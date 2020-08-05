import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader
                title="Estes são os proffys disponíveis."
                description=""
            />
        </div>
    )
}

export default TeacherList;