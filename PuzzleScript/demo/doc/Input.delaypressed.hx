    function update(){
      //if you hold a, should trigger once every 5 frames
      if (Input.delaypressed(Key.A,5)){
        Debug.log(Game.time);
      }
    }