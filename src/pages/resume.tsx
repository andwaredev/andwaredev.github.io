import React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import Resume from '../components/Resume/Resume';

const ResumePage = (): JSX.Element => (
  <PageLayout>
    <Resume className="mt-5" />
  </PageLayout>
);

export default ResumePage;
