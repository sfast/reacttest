import React from 'react';
import { DetailsPageHeader } from '../../../components/PageHeading';
import TabContent from '../../../components/TabContent';

const CourseDetails = (props) => {
  function goBack(){
    props.history.push('/portal/courses');    
  }

  const detailbuttons = [
    {name: 'Action', type: 'dropdown', actions: [ 'Hide', 'Export', 'Update', 'Copy' ] },
    {name: 'Preview Course', type: 'button', action: () => {}  },
  ]

  const additionalInfo = [
    {
      title: 'Status',
      text: 'Hidden'
    },
    {
      title: 'Last Modified',
      text: '13 Feb  2019 21:25'
    },
    {
      title: 'Owner',
      text: 'VL Admin'
    },
    {
      title: 'VLUUs',
      text: '1'
    }
  ] 

  const backButton = {
      name: 'Courses',
      action: goBack
  }

  return (
      <>
        <DetailsPageHeader 
          heading='dave_test' 
          backButton={backButton} 
          buttons={detailbuttons} 
          additionalInfo={additionalInfo}
        />
        <TabContent 
          {...props}
          tabs={[
            {
              tab: 'Content',
              tabContent: (
                  <div>
                    <h1>
                      Content
                    </h1>
                  </div>
              )
            },
            {
              tab: 'VMs',
              tabContent: (
                <div>
                  <h1>
                    Vms
                  </h1>
                </div>
            )
            },
            {
              tab: 'Configuration',
              tabContent: (
                <div>
                  <h1>
                    Configuration
                  </h1>
                </div>
            )
            },
            {
              tab: 'Access',
              tabContent: (
                <div>
                  <h1>
                    Access
                  </h1>
                </div>
            )
            },
            {
              tab: 'Enrollments',
              tabContent: (
                <div>
                  <h1>
                    Enrollments
                  </h1>
                </div>
            )
            }
          ]}         
        />
      </>
  );
};

export default CourseDetails;