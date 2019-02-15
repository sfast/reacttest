import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import DataTable from 'react-jquery-datatable';
import { PageHeading } from '../../../components/PageHeading';


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
		}
	}
 `

const Courses = (props) => {
		const rowId = 'id'	
		const buttons = [
		{name: 'Action', type: 'dropdown', actions: [ 'Action' ] },
		{name: 'Add', type: 'button', action: () => {} },
	]

	let tableColumns = [
		{ title: 'Title', prop: 'title', clickable: true, editable: true },
		{ title: 'Code', prop: 'code', visible: false },
		{ title: 'Location', prop: 'location', defaultContent: 'N/A'},
		{ title: 'Owner', prop: 'owner', defaultContent: 'N/A'},
		{ title: 'Last Access', prop: 'lastAccess', type: 'num-date', defaultContent: 'Never'},
		{ title: 'Users', prop: 'users' },
		{ title: 'Visibility', prop: 'visibility', render: renderVisibility },
		{ title: 'Status', prop: 'status', type: 'html', render: renderStatus }
	];
	// console.log(props.data)

		function renderVisibility (val) {
		return val ? 'Published' : 'Unpublished';
		}

		function renderStatus(val) {
			const clsName = val === 'sync' ? 'badge badge-success' : 'badge badge-danger';
			return `<span class="${clsName}">${val === 'sync' ? 'Synchronized' : 'Require updates'}</span>`;
		}

		function clickHandler (data) {
			console.log("Click on row with _id = ", data[rowId]);
			const { history, location } = props;
			history.push(`${location.pathname}/${ data[rowId]}/content`)
		}

		function editorSaveHandler (data) {
			console.log("Edit on row with _id = ", data[rowId]);
		}

		// function refresh () {
		// 	// let {dispatch} = props;
		// 	// dispatch(fetchCourseUpdatedData());
		// }
	const { data : { loading, error, courses}} = props;
	console.log({ loading, error, courses })
	return (
		<>
			<PageHeading  heading='Courses' buttons={buttons}/> 
			<div className="d-flex align-items-center justify-content-end ml-4 mr-4 mt-4 mb-4">
						<button className="btn btn-sm btn-success" onClick={() => this.refresh()}>Refresh</button>
				</div>
			{ error ? <h3>Error: {error}</h3> :
			<div className='table_wrapper'>
					<DataTable targetId="courses"
						className="container"
						columns={tableColumns}
						dataArray={courses || []}
						loading={loading}
						bulkActions={{
								actionOne: {
										title: 'Action 1',
										action: (id) => {
												console.log('Bulk action 1', id);
										}
								},
								actionTwo: {
										title: 'Action 2',
										action: (id) => {
												console.log('Bulk action 2', id);
										}
								}
						}}
						rowActions={{
								actionOne: {
										title: 'Action 1',
										action: (id) => {
												console.log('Row action 1', id);
										}
								},
								actionTwo: {
										title: 'Action 2',
										action: (id) => {
												console.log('Row action 2', id);
										}
								}
						}}
						options={{
								baseColor: '#0abde3',
								tooltipBaseColor: '#6c5ce7',
								quickFilter: {
										allow: true,
										condition: {
												key: 'owner',
												value: 'Shushanik Tovmasyan'
										}
								},
								// doNotAllowFilter: true,
								// doNotAllowSearch: true,
								// doNotAllowExport: true,
								// doNotAllowColvis: true,
								// doNotAllowInfo: true,
								// doNotAllowPage: true,
								// sortBy: [2, 'desc']
						}}
						rowId={'_id'}
						clickHandler={clickHandler}
						editorSaveHandler={editorSaveHandler}
					/>
			</div>
			}
		</>
	);  
};


export default graphql(GET_COURSES)(Courses);