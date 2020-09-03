import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  // FormHelperText,
} from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Enter Username: ") || "unknown user");
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs);
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault(); // prevent reloading on submit
    db.collection("messages").add({
      text: message,
      username: username || "unknown user",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100"
        alt="logo"
      />
      <h1>Messaging Group</h1>
      <h3>Welcome {username}👋🏻</h3>
      <form className="app__form">
        <FormControl className="app__form-control">
          <InputLabel>Message</InputLabel>
          <Input
            className="app__input"
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!message}
            type="submit"
            color="primary"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map((singleMessage) => (
          <Message
            message={singleMessage.data()}
            currentUser={username}
            key={singleMessage.id}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
