/**
 * route handlers.
 * @author Getie Balew <https://github.com/GetieBalew24>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
