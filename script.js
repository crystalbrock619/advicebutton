let $type = $("#type");
let $newButton = $("<button>");
$newButton.addClass("button");
$($type).on("change", function(){
  if($type.val() === "PQ"){
      $newButton.text("Let's Get Positive!");
  }else if ($type.val() === "EQ"){
      $newButton.text("Let's Get Empowered!");
  }else if ($type.val() === "MEB"){
      $newButton.text("Find the Answer!");
  };
  $("body").append($newButton);
});
var $result = $("#result");
function onButtonClick() {
  let resultValues;
  let answer;
  var $name = $("#name");
  let $type = $("#type");
  if ($type.val() === "PQ") {
    answer = Math.floor(Math.random() * 11);
    resultValues = ["Life may not be the party we hoped for, but while we are here we should dance!", "Troubles are temporary. This too shall pass.", "The universe rewards the decisive.", "Sometimes the worst things that happen in our lives put us on the path to the best things that happen in our lives.", "Always remind people of their worth. One small act could mean the world to them.", "Life is like photography. You need the negatives to develop.", "Through judging, we separate. Through understanding, we grow.", "Where you are headed is more important that what you've left behind.", "A lot of what weighs you down isn't yours to carry.", "Don't overlook life's small joys while searching for the big ones.", "Perception is a key component to gratitude, and gratitude is a key component of joy."];
  } else if ($type.val() === "EQ") {
    answer = Math.floor(Math.random() * 8);
    resultValues = ["Do what you can, with what you have, where you are.", "Believe in your inner potential. Quiet strength is still strength.", "Your gut knows what's up. Trust it.", "Be brave enough to say 'This is not what I want.'", "You can't make someone change their pattern, but you can stop participating in it.", "The only people who get upset when you set boundaries are the ones who benefited from you having none.", "None of us are getting out of here alive, so stop treating yourself like an afterthought.", "You deserve to be loved without having to hide the parts of yourself you think are unlovable.", "The signs you ignore in the beginning just end up being the reasons you leave later."];
  } else if ($type.val() === "MEB") {
    answer = Math.floor(Math.random() * 8);
    resultValues = ["Yes, definitely.", "You can rely on it.", "Without a doubt.", "Most likely.", "Hmm...I'm not sure!", "Yikes! Nope.", "Try again later.", "very doubtful."];
  }
result.textContent = ($name).val()+": "+ resultValues[answer];
}
$($newButton).on("click", onButtonClick);