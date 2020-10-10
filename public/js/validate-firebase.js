firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.querySelector('#auth-message').innerText = 'Auth Successful'
      document.querySelector('#user-email').innerText = `Email: ${user.email}`
    } else {
      // No user is signed in.
      window.location.href = '/'
    }
});