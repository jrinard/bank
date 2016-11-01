function BankAccount(name, deposit) {
  this.userName = name;
  this.balance = deposit;
}

function clearFields(){
  $("#userName").val("");
  $("#deposit").val("");
  $("#withdrawalAmount").val("");
  $("#depositAmount").val("");
}


BankAccount.prototype.withdraw = function(withdrawalAmount) {
  var balance = this.balance - withdrawalAmount;
  return balance;
}

BankAccount.prototype.deposit = function(depositAmount) {
  var balance = this.balance + depositAmount;
  return balance;
}


$(document).ready(function() {
  $("form#create").submit(function(event) {
    event.preventDefault();
    var name = $("#userName").val();
    var input = parseInt($("#deposit").val());

    if (name === "") {
      alert("Please fill all fields");
    } else {

      $(".userName").text(name);

      var initialBalance = new BankAccount(name, input);
      var balance = initialBalance.balance;
      $(".output").text(balance);
      $("#result").show();
      clearFields();

      $("#withdrawal-button").submit(function(event){
        event.preventDefault();
        var withdraw = parseInt($("#withdrawalAmount").val());
        var output = initialBalance.withdraw(withdraw);
        initialBalance.balance = output;
        $(".output").text(output);
        clearFields();
      });

      $("#deposit-button").submit(function(event){
        event.preventDefault();
        var deposit = parseInt($("#depositAmount").val());
        var output = initialBalance.deposit(deposit);
        initialBalance.balance = output;
        $(".output").text(output);
        clearFields();
      });
    }
  });
});
