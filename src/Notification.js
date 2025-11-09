// Notifications.js
function Notifications() {
  const notifications = 3; // change ce nombre pour tester

  return (
    <div>
      {notifications > 0 && <p> Vous avez des notifications</p>}
    </div>
  );
}

export default Notifications;