<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home Page</title>
  </head>
  <body>
    <% if (user) {%>
    <h1>Welcome to the app, <%= user.username %>!</h1>
    <nav>
      <a href="/auth/sign-out">Sign out</a>
    </nav>
    <% } else { %>
    <h1>Welcome to the app, guest!</h1>
    <nav>
      <a href="/auth/sign-up">Sign up</a>
      <a href="/auth/sign-in">Sign in</a>
    </nav>
    <% } %>
  </body>
</html>