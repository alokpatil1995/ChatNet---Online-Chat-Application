// UserItemList.js
import React from "react";
import UserListItem from "./UserListItem";

// import UserListItem from "./UserListItem"; // Make sure to provide the correct path to UserListItem

const UserItemList = ({ searchResult, handleFunction }) => {
  return (
    <>
      {searchResult.map((user) => (
        <UserListItem
          key={user._id}
          user={user}
          handleFunction={handleFunction}
        />
      ))}
    </>
  );
};

export default UserItemList;
