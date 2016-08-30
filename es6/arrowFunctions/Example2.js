// with arrow functions you have access to scope above
var deliveryBoy = {
  name: "Vincenzo",
  handleMessage: function (message,handler) {
    handler(message);
  },
  recive: function () {
    this.handleMessage("Hello, ", message => console.log(message + this.name));
  }
}

deliveryBoy.recive();
