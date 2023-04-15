import React, { useReducer, useCallback, useEffect } from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";

function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const init = useCallback(async (artifact) => {
    // console.log("artifact", artifact);
    if (artifact) {
      // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
      // console.log("Web3", Web3);
      const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
      // console.log("web3,", web3);
      const accounts = await web3.eth.requestAccounts();
      console.log("accounts", accounts);
      const networkID = await web3.eth.net.getId();
      // console.log("networkID", networkID);
      const { abi } = artifact;

      let address, contract;
      try {
        address = artifact.networks[networkID].address;
        // console.log("address", address);
        contract = new web3.eth.Contract(abi, address);
      } catch (err) {
        console.error(err);
      }
      dispatch({
        type: actions.init,
        data: { artifact, web3, accounts, networkID, contract },
      });
    }
  }, []);

  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact = require("../../contracts/HealthManagement.json");
        init(artifact);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);
    };

    events.forEach((e) => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach((e) => window.ethereum.removeListener(e, handleChange));
    };
  }, [init, state.artifact]);

  return (
    <EthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </EthContext.Provider>
  );
}

export default EthProvider;
