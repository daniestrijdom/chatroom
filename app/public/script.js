$(function() {
  var socket = io.connect();

  var $messageForm = $("#messageForm");
  var $message = $("#message");
  var $chat = $("#chat");
  var $messageArea = $("#messageArea");
  var $userFormArea = $("#userFormArea");
  var $userForm = $("#userForm");
  var $users = $("#users");
  var $username = $("#username");

  $messageForm.submit(function(e) {
    e.preventDefault();
    socket.emit("send message", $message.val());
    $message.val("");
  });

  socket.on("new message", function(data) {
    $chat
      .append(
        '<div class="message" style="background-color:' +
          data.color +
          '"><strong>' +
          data.user +
          ": </strong>" +
          data.msg +
          "</div><br>"
      )
      .animate({ scrollTop: $chat.prop("scrollHeight") }, 1);
  });

  $userForm.submit(function(e) {
    e.preventDefault();
    socket.emit("new user", $username.val(), function(data) {
      if (data) {
        $userFormArea.hide();
        $messageArea.css("visibility", "visible");
      }
    });
    $username.val("");
  });

  socket.on("get users", function(data) {
    var html = "";

    for (var i = 0; i < data.length; i++) {
      html +=
        '<li class="online-users" style="background-color:' +
        data[i].color +
        '">' +
        data[i].username +
        "</li>";
    }
    $users.html(html);
  });

  $("textarea").keypress(function(e) {
    if (e.which == 13) {
      $("#messageForm").submit();
      return false;
    }
  });
});
