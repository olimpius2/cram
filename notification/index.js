const notification_button = document.getElementById("notification_button")

notification_button.addEventListener("click", function(){
  const myNotification = new Notification('Title', {body:"body"})
  myNotification.onclick = () => {
    console.log('notificaiton clicked!')
  }
})
