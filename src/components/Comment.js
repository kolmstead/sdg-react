import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />      
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        Blah Blah: {props.bobby}
      </div>
    </div>
  );  
}



function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        Text: {props.text}
      </div>
      <div className="Comment-date">
        Date: {formatDate(props.date)}
      </div>
      <div className="a-class-name" id="later">
        Alfred: {props.showMe}
      </div>
    </div>
  );
}
  
export { Comment, Avatar };

// Refactor this per React apps
// try to get stuff from localStorage from sdg app
// what about id in React?