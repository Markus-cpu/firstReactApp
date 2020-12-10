
export type InitialStateType = {
    id: number
    fullName: string
    email: string
    phoneNumber: string
}

let inintialState: InitialStateType = {
        id: 1,
        fullName: 'Markus-cpu',
        email: 'markbass82@gmail.com',
        phoneNumber: '+7999-888-77-77'
};

const contactReducer =(state = inintialState, action: any): InitialStateType => {
    return state;
};

export default  contactReducer;