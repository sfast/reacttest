import gql from 'graphql-tag';

const typedefs =  gql`
	
	type Course {
		name: String
		openRegistration: Bool
		branding: String
		_id: String
		title: String
		code: String,
		location: String
		owner: String
		lastAccess: String
		users: Int
		visibility: Boolean
		status: String
	}

	type Query {
		courses: [Course]
		course(id: String!): [Course]
	}

	schema {
		query: Query
	}

`
export default typedefs;
