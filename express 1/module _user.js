const user=(req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head><title>Raunak Sharma Form</title></head>");
  res.write("<body>");

  res.write("<h2>User Registration Form</h2>");

  res.write('<form method="POST" action="/submit">');

  res.write('Name: <input type="text" name="username"><br><br>');

  res.write('Email: <input type="email" name="email"><br><br>');

  res.write("Gender: ");
  res.write('<input type="radio" name="gender" value="male"> Male ');
  res.write('<input type="radio" name="gender" value="female"> Female ');
  res.write('<input type="radio" name="gender" value="other"> Other <br><br>');

  res.write('Age: <select name="age">');
  res.write('<option value="18">18</option>');
  res.write('<option value="19">19</option>');
  res.write('<option value="20">20</option>');
  res.write('<option value="21">21</option>');
  res.write('<option value="22">22</option>');
  res.write("</select><br><br>");

  res.write('<button type="submit">Submit</button>');

  res.write("</form>");
  res.write("</body>");
  res.write("</html>");

  res.end();
}

export default user;