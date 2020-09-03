import React, { forwardRef } from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@material-ui/core";

const Message = forwardRef(({ message, currentUser }, ref) => {
  const isUser = currentUser === message.username;
  return (
    <div ref={ref} className={isUser ? "right-message" : "left-message"}>
      <p className={isUser ? "sender-name" : "reciever-name"}>
        {message.username}
      </p>
      <Card className="message">
        <CardContent>
          <Typography color="textSecondary" variant="h5" component="h2">
            {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
