const actions = {
  init: "INIT",
  login: "LOGIN",
  logout: "LOGOUT",
  doctorInView: "DOCTOR_IN_VIEW",
  patientInView: "PATIENT_IN_VIEW",
  changeDoctorSideBarState: "CHANGE_DOCTOR_SIDEBAR_STATE",
  changePatientSideBarState: "CHANGE_PATIENT_SIDEBAR_STATE",
  recordInView: "RECORD_IN_VIEW",
  addROOMID: "ADD_ROOM_ID",
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
  recordInView: null,
  ROOMID: null,
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
    case actions.recordInView:
      return { ...state, recordInView: data };
    case actions.changeDoctorSideBarState:
      return { ...state, changeDoctorSideBarState: data };
    case actions.changePatientSideBarState:
      return { ...state, changePatientSideBarState: data };
    case actions.addROOMID:
      return { ...state, ROOMID: data };
    case actions.logout:
      return { ...state, role: null, ethID: null, email: null };
    default:
      return { ...state };
  }
};

export { actions, initialState, reducer };
