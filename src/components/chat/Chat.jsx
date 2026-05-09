import React from 'react'

function Chat() {
  const { targetUserId } = useParams();
  console.log("Target User ID:", targetUserId); // Debugging log
  return (
    <div>Chat</div>
  )
}

export default Chat