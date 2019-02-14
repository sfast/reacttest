export default `
    type Branding {
        logo: String!,
        themeColor: String!,
        login {
            container {
                backgroundImage: String,
                backgroundColor: String!
            }
            modal {
                backgroundImage: String,
                backgroundColor: String!
            }
            links {
                color: String!
            }
        }
    }
    type Company {
        name: String!
        openRegistration: Bool!
        branding: Branding
    }
    
    type Auth {
        isAuth: Bool!
    }
    
    type CompleteRegisterPage {
        checkingUsername: Bool!
        usernameApproved: Bool!
        usernameError: String!
    }
    
    type ForgotPage {
        emailSent: Bool!
        resetEmail: String!
    }
    
    type ResetPage {
        passwordChanged: Bool!
        username: String!
    }
    
    type MfaPage {
        authenticator: String!
        invalid: Bool!
    }
    
    type Query {
        comapny: Company,
        auth: Auth,
        completeRegisterPage: CompleteRegisterPage,
        forgotPage: ForgotPage,
        resetPage: ResetPage,
        mfaPage: MfaPage
    }
    
`;