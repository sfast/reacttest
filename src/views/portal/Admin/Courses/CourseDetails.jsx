import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import DataTable from 'react-jquery-datatable';
import { DetailsPageHeader } from '../../../../components/PageHeading';
import TabContent from '../../../../components/TabContent';

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

export const GET_COURSES = gql`
	query GetCourses{
		courses @client{ 
			_id,
			title,
			code,
			location,
			owner,
			lastAccess,
			users,
			visibility,
			status,
			__typename,
		}
	}
`
const CourseDetails = (props) => {
  function goBack(){
    props.history.push('/portal/courses');    
  }


  function renderVisibility (val) {
    return val ? 'Published' : 'Unpublished';
  }

  function renderStatus(val) {
    const clsName = val === 'sync' ? 'badge badge-success' : 'badge badge-danger';
    return `<span class="${clsName}">${val === 'sync' ? 'Synchronized' : 'Require updates'}</span>`;
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

  let tableColumns = [
    { title: 'Title', prop: 'title'},
    { title: 'Code', prop: 'code', visible: false },
    { title: 'Location', prop: 'location', defaultContent: 'N/A'},
    { title: 'Owner', prop: 'owner', defaultContent: 'N/A'},
    { title: 'Last Access', prop: 'lastAccess', type: 'num-date', defaultContent: 'Never'},
    { title: 'Users', prop: 'users' },
    { title: 'Visibility', prop: 'visibility', render: renderVisibility },
    { title: 'Status', prop: 'status', type: 'html', render: renderStatus }
  ];
  let { data : { loading, error, courses}} = props;
  courses = courses ? courses.slice(0, 3): [];
  console.log({ loading, error, courses})
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
                    { error ? <h3>Error: {error.message}</h3> :
                      <DataTable targetId="min-courses"
                        className="container"
                        columns={tableColumns}
                        dataArray={courses}
                        loading={loading}
                        options={{
                          quickFilter: {
                            allow: true,
                            condition: {
                              key: 'owner',
                              value: 'Shushanik Tovmasyan'
                            }
                          },
                          doNotAllowSearch: true,
                          doNotAllowExport: true,
                          doNotAllowInfo: true,
                          doNotAllowPage: true,
                          sortBy: [2, 'desc']
                        }}
                        rowId={'_id'}
                    /> }
                  </div>
              )
            },
            {
              tab: 'VMs',
              tabContent: (
                <div>
                  { error ? <h3>Error: {error.message}</h3> :
                      <DataTable targetId="min-courses"
                        className="container"
                        columns={tableColumns}
                        dataArray={courses}
                        loading={loading}
                        options={{
                          quickFilter: {
                            allow: true,
                            condition: {
                              key: 'owner',
                              value: 'Shushanik Tovmasyan'
                            }
                          },
                          doNotAllowSearch: true,
                          doNotAllowExport: true,
                          doNotAllowInfo: true,
                          doNotAllowPage: true,
                          sortBy: [2, 'desc']
                        }}
                        rowId={'_id'}
                    /> }
                </div>
            )
            },
            {
              tab: 'Configuration',
              tabContent: (
                <div>
                  { error ? <h3>Error: {error.message}</h3> :
                      <DataTable targetId="min-courses"
                        className="container"
                        columns={tableColumns}
                        dataArray={courses}
                        loading={loading}
                        options={{
                          quickFilter: {
                            allow: true,
                            condition: {
                              key: 'owner',
                              value: 'Shushanik Tovmasyan'
                            }
                          },
                          doNotAllowSearch: true,
                          doNotAllowExport: true,
                          doNotAllowInfo: true,
                          doNotAllowPage: true,
                          sortBy: [2, 'desc']
                        }}
                        rowId={'_id'}
                    /> }
                </div>
            )
            },
            {
              tab: 'Access',
              tabContent: (
                <div>
                  { error ? <h3>Error: {error.message}</h3> :
                      <DataTable targetId="min-courses"
                        className="container"
                        columns={tableColumns}
                        dataArray={courses}
                        loading={loading}
                        options={{
                          quickFilter: {
                            allow: true,
                            condition: {
                              key: 'owner',
                              value: 'Shushanik Tovmasyan'
                            }
                          },
                          doNotAllowSearch: true,
                          doNotAllowExport: true,
                          doNotAllowInfo: true,
                          doNotAllowPage: true,
                          sortBy: [2, 'desc']
                        }}
                        rowId={'_id'}
                    /> }
                </div>
            )
            },
            {
              tab: 'Enrollments',
              tabContent: (
                <div>
                  { error ? <h3>Error: {error.message}</h3> :
                      <DataTable targetId="min-courses"
                        className="container"
                        columns={tableColumns}
                        dataArray={courses}
                        loading={loading}
                        options={{
                          quickFilter: {
                            allow: true,
                            condition: {
                              key: 'owner',
                              value: 'Shushanik Tovmasyan'
                            }
                          },
                          doNotAllowSearch: true,
                          doNotAllowExport: true,
                          doNotAllowInfo: true,
                          doNotAllowPage: true,
                          sortBy: [2, 'desc']
                        }}
                        rowId={'_id'}
                    /> }
                </div>
            )
            }
          ]}         
        />
      </>
  );
};

export default graphql(
  GET_COURSES
)(CourseDetails);

//  GET_COURSE,
//  {
//  options: (props) => ({ variables: { id: props.match.params.id } })
//  }