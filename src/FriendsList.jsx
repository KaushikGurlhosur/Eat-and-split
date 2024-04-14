import Friend from "./Friend";

/* eslint-disable react/prop-types */
function FriendsList({ initialFriends, onSelectFriend, selectedFriend }) {
  const friends = initialFriends;

  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onSelection={onSelectFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
