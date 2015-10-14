var animal = "zeedonk";

//Note that you can have multiple patterns,
//and that break commands are not used.
switch (animal) {
  case "zebra", "donkey":
    trace("zeedonkish");
  case "zeedonk":
    trace("zeedonk");
  default:
    trace ("not zeedonk");
}