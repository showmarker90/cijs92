import React, { memo } from "react";

const PureComponent = ({ user }) => {
  console.log("re-render");
  return <div>PureComponent {JSON.stringify(user)}</div>;
};

export default memo(PureComponent, (prevProps, nextProps) => {
  return prevProps.user.username === nextProps.user.username;
});
