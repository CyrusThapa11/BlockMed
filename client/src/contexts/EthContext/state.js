const actions = {
  init: "INIT",
  login: "LOGIN",
  logout: "LOGOUT",
  doctorInView: "DOCTOR_IN_VIEW",
  changeDoctorSideBarState: "CHANGE_DOCTOR_SIDEBAR_STATE",
  changePatientSideBarState: "CHANGE_PATIENT_SIDEBAR_STATE",
};

const initialState = {
  artifact: null,
  web3: null,
  accounts: null,
  networkID: null,
  contract: null,
  role: null,
  email: null,
  doctorSideBarState: 0,
  patientSideBarState: 0,
  adminSideBarState: 0,
  hospitalSideBarState: 0,
  ethID: null,
  doctorInView: null,
  patientInView: null,
};

const reducer = (state, action) => {
  const { type, data } = action;
  console.log("type", type);
  console.log("data", data);
  switch (type) {
    case actions.init:
      return { ...state, ...data };
    case actions.login:
      return { ...state, ...data };
    case actions.doctorInView:
      return { ...state, doctorInView: data };
    case actions.patientInView:
      return { ...state, patientInView: data };
    case actions.changeDoctorSideBarState:
      return { ...state, changeDoctorSideBarState: data };
    case actions.changePatientSideBarState:
      return { ...state, changePatientSideBarState: data };
    default:
      return { ...state };
  }
};

export { actions, initialState, reducer };