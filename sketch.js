var pos=prompt("Insert the number of infected people");
var neg=prompt("Insert the number of uninfected people");
var mas=prompt("Insert the number of masked people");
var vac=prompt("Insert the number of vaccinated people");
var density=prompt("Insert the density");
var person
var people=[]
var tb,bb,lb,rb
var gamestate=1
var pauserelease=0
function setup() {
  createCanvas(windowWidth-10,windowHeight-10);
  lb=createSprite(0,(windowHeight-10)/2,5,windowHeight-10)
  rb=createSprite(windowWidth-10,(windowHeight-10)/2,5,windowHeight-10)
  tb=createSprite((windowWidth-10)/2,0,windowWidth-10,5)
  bb=createSprite(windowWidth/2,windowHeight-10,windowWidth*2,5)


  for(i=0;i<pos;i++){
  person=createSprite(random(0,windowWidth),random(0,windowHeight),density,density)
  person.shapeColor="red"
  people.push(person)
  }
  for(i=0;i<neg;i++){
  person=createSprite(random(0,windowWidth),random(0,windowHeight),density,density)
  person.shapeColor="gray"
  people.push(person)
  }
  for(i=0;i<vac;i++){
    person=createSprite(random(0,windowWidth),random(0,windowHeight),density,density)
    person.shapeColor="blue"
    people.push(person)
    }
    for(i=0;i<mas;i++){
      person=createSprite(random(0,windowWidth),random(0,windowHeight),density,density)
      person.shapeColor="yellow"
      people.push(person)
      }
}

function draw() {
  background(30);
  pauserelease--

  if(gamestate==1){
  let l=people.length
for(i=0;i<l;i++){
  if(frameCount%24==0){
  people[i].velocityX=random(-5,5)
  people[i].velocityY=random(-5,5)
  }

  if(people[i].isTouching(tb)){
    people[i].y+=10
  }  
  if(people[i].isTouching(bb)){
    people[i].y-=10
  }
  if(people[i].isTouching(lb)){
    people[i].x+=10
  }
  if(people[i].isTouching(rb)){
    people[i].x-=10

  }


  for(j=0;j<l;j++){
    if(people[i].isTouching(people[j])){
      //g-r
      if(people[i].shapeColor=="gray"&&people[j].shapeColor=="red"){
        let c=Math.round(random(1,4))
        if(c==1){}
        else{
        people[i].shapeColor="red"
        }
      }
      //b-g
      if(people[i].shapeColor=="blue"&&people[j].shapeColor=="gray"){
        let c=Math.round(random(1,2))
        if(c==1){
        people[j].shapeColor="blue"
        }
      }
      //b-r
      if(people[i].shapeColor=="blue"&&people[j].shapeColor=="red"){
        let c=Math.round(random(1,10))
        if(c==1||c==2){     
        people[i].shapeColor="purple"
        }
        if(c==1||c==3||c==4||c==5||c==6){
          people[j].shapeColor="purple"
        }
      }
      //g-p
      if(people[i].shapeColor=="gray"&&people[j].shapeColor=="purple"){
        let c=Math.round(random(1,4))
        if(c==1){}
        if(c==2){
          people[i].shapeColor=="blue"
        }
        if(c==3){
          people[i].shapeColor=="red"
        }
        if(c==4){
          people[i].shapeColor=="purple"
        }
       
      }
      //b-p
      if(people[i].shapeColor=="blue"&&people[j].shapeColor=="purple"){
        let c=Math.round(random(1,10))
        if(c==1){
          people[i].shapeColor="purple"
        }
    
        
      }
//g-y
      if(people[i].shapeColor=="gray"&&people[j].shapeColor=="yellow"){
        let c=Math.round(random(1,2))
        if(c==1){
          people[i].shapeColor="yellow"
        }
    
        
      }
//b-y
      if(people[i].shapeColor=="blue"&&people[j].shapeColor=="yellow"){
        let c=Math.round(random(1,2))
        if(c==1){
          people[i].shapeColor="green"
        }
        let d=Math.round(random(1,2))
        if(d==1){
          people[j].shapeColor="green"
        }
      }
//r-y
        if(people[i].shapeColor=="red"&&people[j].shapeColor=="yellow"){
          let c=Math.round(random(1,2))
          if(c==1){
            people[i].shapeColor="orange"
          }
          let d=Math.round(random(1,3))
          if(d==1){
            people[j].shapeColor="orange"
          }
      }
      //p-y
      if(people[i].shapeColor=="purple"&&people[j].shapeColor=="yellow"){
        let c=Math.round(random(1,2))
        if(c==1){
          people[i].shapeColor="brown"
        }
        let d=Math.round(random(1,5))
        if(d==1){
          people[j].shapeColor="brown"
        }
    }
        //o-y
        if(people[i].shapeColor=="orange"&&people[j].shapeColor=="yellow"){
          let c=Math.round(random(1,5))
          if(c==1){
            people[j].shapeColor="orange"
          }
      }
        //g-y
        if(people[i].shapeColor=="green"&&people[j].shapeColor=="yellow"){
          let d=Math.round(random(1,2))
          if(d==1){
            people[j].shapeColor="green"
          }
      }
              //br-y
              if(people[i].shapeColor=="brown"&&people[j].shapeColor=="yellow"){
                let d=Math.round(random(1,4))
                if(d==1){
                  people[j].shapeColor="brown"
                }
                if(d==2){
                  people[j].shapeColor="yellow"
                }
                if(d==3){
                  people[j].shapeColor="green"
                }
            }

             //o-r
             if(people[i].shapeColor=="orange"&&people[j].shapeColor=="red"){
              let d=Math.round(random(1,2))
              if(d==1){
                people[j].shapeColor="orange"
              } 
          }
                 //o-p
                 if(people[i].shapeColor=="orange"&&people[j].shapeColor=="purple"){
                  let d=Math.round(random(1,4))
                  if(d==1){
                    people[j].shapeColor="brown"
                  } 
                  if(d==2){
                    people[i].shapeColor="brown"
                  } 
                  if(d==3){
                    people[i].shapeColor="brown"
                    people[j].shapeColor="brown"
                  } 
              }
              //o-b
                if(people[i].shapeColor=="orange"&&people[j].shapeColor=="blue"){
                let d=Math.round(random(1,6))
                if(d==1){
                  people[j].shapeColor="brown"
                } 
                if(d==2){
                  people[i].shapeColor="brown"
                } 
                if(d==3){
                  people[j].shapeColor="purple"
                }
            }
                          //o-g
                          if(people[i].shapeColor=="orange"&&people[j].shapeColor=="green"){
                            let d=Math.round(random(1,15))
                            if(d==1){
                              people[j].shapeColor="brown"
                            } 
                            if(d==2){
                              people[i].shapeColor="brown"
                            } 
                        }
      
             //g-r
             if(people[i].shapeColor=="green"&&people[j].shapeColor=="red"){
              let d=Math.round(random(1,15))
              if(d==1){
                people[i].shapeColor="brown"
              } 
              let c=Math.round(random(1,4))
              if(c==1){
                people[j].shapeColor="orange"
              } 
              if(c==2){
                people[j].shapeColor="purple"
              } 
              if(c==3){
                people[j].shapeColor="brown"
              } 
          }
                 //g-p
                 if(people[i].shapeColor=="green"&&people[j].shapeColor=="purple"){
                  let d=Math.round(random(1,15))
                  if(d==1){
                    people[i].shapeColor="brown"
                  } 
                  let c=Math.round(random(1,2))
                  if(c==1){
                    people[i].shapeColor="brown"
                  } 
              }
              //g-b
                if(people[i].shapeColor=="green"&&people[j].shapeColor=="blue"){
                let d=Math.round(random(1,2))
                if(d==1){
                  people[j].shapeColor="green"
                } 
                           }
                   //br-r
             if(people[i].shapeColor=="brown"&&people[j].shapeColor=="red"){
              let d=Math.round(random(1,4))
              if(d==1){
                people[j].shapeColor="brown"
              } 
              if(d==2){
                people[j].shapeColor="purple"
              }
              if(d==3){
                people[j].shapeColor="orange"
              }
             
          }
                 //br-p
                 if(people[i].shapeColor=="brown"&&people[j].shapeColor=="purple"){
                  let d=Math.round(random(1,2))
                  if(d==1){
                    people[j].shapeColor="brown"
                  } 
                  
              }
                  //r-p
                  if(people[i].shapeColor=="red"&&people[j].shapeColor=="purple"){
                    let d=Math.round(random(1,2))
                    if(d==1){
                      people[i].shapeColor="purple"
                    } 
                    
                }
                     
                let r=Math.round(random(1,96))
                if(r==1){
                  if(people[i].shapeColor=="red"){
                  people[i].shapeColor="gray"
                  }
                }
                let r2=Math.round(random(1,18))
                if(r2==1){
              
                  if(people[i].shapeColor=="purple"){
                    people[i].shapeColor="blue"
                    }
                   
                }
                let r3=Math.round(random(1,96))
                if(r3==1){
              
                  if(people[i].shapeColor=="orange"){
                    people[i].shapeColor="blue"
                    }
                }
    
                let r4=Math.round(random(1,9))
                if(r4==1){
                if(people[i].shapeColor=="brown"){
                  people[i].shapeColor="blue"
                  }
                }
              
     
                
                
              
                





              }
      }


     
        








    }
  }
                //pause
                if(keyDown("p")&&pauserelease<=0){
                  gamestate=gamestate*-1
                  pauserelease=8
                }






if(gamestate==-1){
  for(i=0;i<people.length;i++){
    people[i].velocityX=0
    people[i].velocityY=0
  }
}

drawSprites();

}