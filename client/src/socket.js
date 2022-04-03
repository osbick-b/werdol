
import { io } from "socket.io-client";

import { setCorrectWord } from "./redux/correctWord/slice";


export let socket;

// =============================================================================
export const init = (store) => {
    if (!socket) {
        socket = io.connect();

        //? -- Have server emitting a word for single player

        // //? Event Listener --"playerSetCorrectWord"
        // socket.on("playerSetCorrectWord", (word) => {
        //     console.log("HEY!! nice to hear from you!", word);
        // });
        //     Event Listener  -- 01 from SERVER
        //     socket.on("chatLatestMessages", (messages) => {
        //         store.dispatch(latestMessagesLoaded(messages));
        //     });

        //     Event Listener  -- 02 from SERVER
        //     socket.on("displayNewMsg", (msg) => {
        //         store.dispatch(newMsgStored(msg));});
    }
};
