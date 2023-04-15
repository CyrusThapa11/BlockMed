const actions = {
  init: "INIT",
  login: "LOGIN",
  logout: "LOGOUT",
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
    default:
      return { ...state };
  }
};

export { actions, initialState, reducer };
