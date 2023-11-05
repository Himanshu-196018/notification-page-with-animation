import { useState, useEffect } from "react";
import { data } from "./data/notification";
import GroupNotify from "./components/GroupNotify";
import ReactToPost from "./components/ReactToPost";
import Request from "./components/Request";
import PrivateMessage from "./components/PrivateMessage";
import Comment from "./components/Comment";

const App = () => {
  const [unreadNotification, setUnreadNotification] = useState(0);
  const [notificationData, setNotificationData] = useState(data);

  function getNumber() {
    let count = 0;
    data.forEach((ele) => {
      if (!ele.read) count++;
    });
    return count;
  }

  function getComponent(ele) {
    switch (ele.type) {
      case "group-related":
        return <GroupNotify data={ele} />;
      case "react-to-post":
        return <ReactToPost data={ele} />;
      case "request":
        return <Request data={ele} />;
      case "private-message":
        return <PrivateMessage data={ele} />;
      case "comment":
        return <Comment data={ele} />;
    }
  }

  useEffect(() => {
    setUnreadNotification(getNumber());
  }, []);

  return (
    <main>
      <header>
        <div>
          <h1>Notifications</h1>
          <span>{unreadNotification}</span>
        </div>
        <button type="button">Mark all as Read</button>
      </header>
      <ul>
        {notificationData.map((ele) => (
          <li key={ele.key}>{getComponent(ele)}</li>
        ))}
      </ul>
    </main>
  );
};

export default App;