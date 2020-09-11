
export const createOffer = async (connection, localStream, userToCall, doOffer, database, username) => {
  try {

  } catch (exception) {
    console.error(exception)
  }
}

export const initiateLocalStream = async () => {
  try {

  } catch (exception) {
    console.error(exception)
  }
}
export const initiateConnection = async () => {
  try {
    // create a connection
    // using Google public stun server

  } catch (exception) {
    console.error(exception)
  }
}

export const listenToConnectionEvents = (conn, username, remoteUsername, database, remoteVideoRef, doCandidate) => {
  // listen for ice candidates

  // when a remote user adds stream to the peer connection, we display it

}

export const sendAnswer = async (conn, localStream, notif, doAnswer, database, username) => {
  try {
    // add the localstream to the connection
    // set the remote and local descriptions and create an answer

    // create an answer to an offer

    // send answer to the other peer

  } catch (exception) {
    console.error(exception)
  }
}

export const startCall = (yourConn, notif) => {
  // it should be called when we
  // received an answer from other peer to start the call
  // and set remote the description

}

export const addCandidate = (yourConn, notif) => {
  // apply the new received candidate to the connection

}
