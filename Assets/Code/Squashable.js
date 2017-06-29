var inClapZone : boolean = false;
var squashedImage : Sprite;

function OnTriggerEnter2D (other: Collider2D) {
  if(other.name == "clap zone") {
    inClapZone = true;
  }
}

function OnTriggerExit2D (other: Collider2D) {
  if(other.name == "clap zone") {
    inClapZone = false;
  }
}

function TryToSquash () {
  if(inClapZone) {
    gameObject.SendMessage("Squash");
  }
}

function Squash() {
  GetComponent.<AudioSource>().Play();
  GameObject.Find("/text/score").SendMessage("Increment");
  GetComponent.<Renderer>().sprite = squashedImage;
  gameObject.tag = "Untagged";
  Destroy(this);  
}