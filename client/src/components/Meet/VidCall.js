import * as React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEth } from "../../contexts/EthContext";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

const VidCall = () => {
  // const roomID = "1111";
  const {
    state: { accounts, contract, ROOMID },
    dispatch,
  } = useEth();
  let myMeeting = async (element) => {
    // generate Kit Token
    const doctorDetailsAppointment = await contract.methods
      .getDoctorAppointment(accounts[0])
      .call({ from: accounts[0] });
    console.log("doctorDetailsAppointment, ", doctorDetailsAppointment);
    // console.log("doctorDetailsAppointment", doctorDetailsAppointment);
    // let newAppointments = [];
    // doctorDetailsAppointment.forEach((app, indexx) => {
    //   newAppointments.push({ ...app, indexx });
    // });
    // const ROOMID = await contract
    const appID = 1180853265;
    const serverSecret = "45541ed5b9466e888973f9dd039ab6a0";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      ROOMID,
      randomID(5),
      "Anonyomous"
    );
    console.log("idhar pauch gya ! !!!!");
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            ROOMID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return <div className="myCallContainer" ref={myMeeting}></div>;
};
export default React.memo(VidCall);
