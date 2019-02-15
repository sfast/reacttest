import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { DetailsPageHeader } from '../../../components/PageHeading';
import TabContent from '../../../components/TabContent';

const GET_COURSE = gql`
  query {
    course(id: $id) @client {
      _id,
			title,
			code,
			location,
			owner,
			lastAccess,
			users,
			visibility,
			status,
		}
  }
`

const CourseDetails = (props) => {
  console.log(props)
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

export default graphql(
  GET_COURSE,
  {
    options: (props) => ({ variables: { id: props.match.params.id } })
  }
)(CourseDetails);