  enchant();  //宣言

  window.onload = function() {
    var game = new Game(320,320);
    game.fps = 24;
    game.preload('space3.gif','icon0.gif','space1.gif','pad.gif','font2.png');
    game.score = 0;
    
    game.onload = function() {
      //変数宣言
      //var scoreLabel = 0;
      
      var gool = 1800;   
      var itokawa = 0;
      var scoreLabel = new ScoreLabel(8,8);
      var timer = new ScoreLabel(48,48);
      var hit = false;
      var skuma = new Sprite(32, 32);
      var kkuma = new Array();
      var suna = new Array();
      var ukuma = new Array();
      var setkkuma = 0;
      var mx = 0;
      var my = 0;
      var speed = 0;
      var i = 0;
      var enm_y = 0;
      var enm_x = 0;
      var ending = true;
      
      //キャラ関数宣言
      
      
           
      
      
      //バナナ玉
      tamaactiv = new function() {
        //var i1 = 0;
       // do
       // {
          tama = new Sprite(16,16);
          tama.image = game.assets['icon0.gif'];          
          tama.frame = 73;
          tama.time = 0;
          tama.x = 320;
          tama.y = -20;
        //  i1 += 1;
       // } while (10 > i1); 
      };
      
      
      tamas = new function() {
     // var i2 = 0;
       // do
       // {
           this.x = skuma.x;
           this.y = skuma.y;
           this.direction = 0;
           this.moveSpeed = 5;
           game.rootScene.addChild(tama);    
          tama.addEventListener("enterframe", function() {
            
            this.x += 4;
            if ( this.x > 320 ) {
               this.frame = 16;
               this.x = skuma.x;
               this.y = skuma.y;
             };   
          });
         // i2 += 1; 
       // }  while ( 10 > i2 );
      }; 
      
      
      
      ttamaactiv = new function() {
        //var i1 = 0;
       // do
       // {
          ttama = new Sprite(16,16);
          ttama.image = game.assets['icon0.gif'];
          
          ttama.frame = 73;
          ttama.time = 0;
          this.x = 20;
          this.y = -20;
        //  i1 += 1;
       // } while (10 > i1); 
      };
      
      
      ttamas = new function() {

     // var i2 = 0;
       // do
       // {
           this.x = kkuma.x;
           this.y = kkuma.y;
           this.direction = 0;
           this.moveSpeed = 5;
           game.rootScene.addChild(ttama);    
          ttama.addEventListener("enterframe", function() {
            
            {
              if ( enm_y > 0 ) {
                if ( enm_y < 320 ) {
                  this.x -= 1;
                  if ( skuma.y > this.y ) {
                    this.y += 1;
                  } else {
                    this.y -= 1;
                  }
                }
              }
            }        
            if ( this.x < 0 ) {
               this.frame = 15;
               this.x = enm_x;
               this.y = enm_y;
             };

          if ( ending == false ) {
            if (skuma.within(this,32)) {
              game.score += 25;
            };
          
            if (skuma.within(this,16)) {
             hit = true;
            };

            if (hit == true) {
              skuma.frame = 8;
              skuma.x -= 5;
            };

            if ( skuma.x < -20 ) {
              game.end(scoreLabel.score, scoreLabel.score + 'くまーポイント獲得！');
            }
         }
       });
         // i2 += 1; 
       // }  while ( 10 > i2 );

      };
      
      
      
      //駿足君
      ukumaactiv = new function()
      {
        var i3 = 0;
        do
        {
          ukuma[i3] = new Sprite(32,32);
          ukuma[i3].image = game.assets['space3.gif'];
          
          ukuma[i3].frame = 14;
          ukuma[i3].time = 0;
          this.x = - 40;
          this.y = -20;
          
          i3 += 1;
        } while (4 > i3); 
      };
      
      
      ukumas = new function()
      {
      i = 0;
        while ( i < 4 ) {
        
          game.rootScene.addChild(ukuma[i]); 
          //敵の動き方
          
          ukuma[i].addEventListener("enterframe", function()
          {
            clearTimeout();//タイマー停止
            setTimeout(mx = Math.floor(Math.random() * 300 + 0),4000);
            setTimeout(my = Math.floor(Math.random() * 300 + 0),4000);
            setTimeout(speed = Math.floor(Math.random() * 5 + 0),30);
            if (  this.x > 320 ) {
              this.frame = 15;
              this.x = -300 + mx;
              this.y = my;
              this.direction = 0;
              this.moveSpeed = 3;
              if ( setkkuma < 6 )
              {
                game.rootScene.addChild(this);
              }
            };

            if (itokawa < gool ) {
              if (tama.within(this,16)) {
                this.frame = 18;
                tama.x = skuma.x;
                tama.y = skuma.y;
                game.score += 100;
              }
            }
            
            if (this.frame == 18) {
              this.x -= 5;
            } else {
              this.x += speed;
              enm_x = this.x;  
              enm_y = this.y;
            } 
            if (this.x < -20) {
              this.frame = 15;
              this.x = -300 + mx;
              this.y = my;
            }

            if ( ending == false ) {
              if (skuma.within(this,30)) {
                hit = true;
              };
              if (hit == true) {
                skuma.frame = 8;
                skuma.x -= 5;
              };

              if ( skuma.x < -20  ) {
                game.end(scoreLabel.score, scoreLabel.score + 'くまーポイント獲得！');
              }
            }
          });
          
      
          i += 1;
        };// while (4 > i);
      };   
      
      //白くま君
      playskuma = new function() {
            
        skuma.image = game.assets['space3.gif'];
        skuma.x = 10;
        skuma.y = 160;
        skuma.frame = 5;
   
        game.rootScene.addChild(skuma); 
     
        skuma.addEventListener("enterframe", function(){
          
        
        if (game.input.left) {
            if (this.x > 0 ) {
              this.x -= 3;
            }
          }
        if (game.input.right) {
           if (this.x < 300) {
             this.x += 1;
           } 
          }
        if (game.input.up)
          {
            if (this.y > 0) {
              this.y -= 2;
            }
          }
        if (game.input.down) {
            if (this.y < 300) {
              this.y += 2;
            }
          };
          
          if (this.frame != 8) {
            this.frame = this.age % 2 + 6;
          }  
        });
      };
      //黒くま君
      kkumaactiv = new function() {
        while ( setkkuma < 6 ) {
          kkuma[setkkuma] = new Sprite(32,32);
          kkuma[setkkuma].image = game.assets['space3.gif'];
          
          kkuma[setkkuma].frame = 14;
          kkuma[setkkuma].time = 0;
          setkkuma += 1;
          this.x = - 40;
          this.y = -20;
        };// while (6 > setkkuma);
      };
      
      kkumas = new function() {
      i = 0;
        if ( itokawa < gool ) {
        while ( i < 6 ) {
          game.rootScene.addChild(kkuma[i]); 
          //敵の動き方
          
          kkuma[i].addEventListener("enterframe", function() {
            clearTimeout();//タイマー停止
            setTimeout(mx = Math.floor(Math.random() * 300 + 0),4000);
            setTimeout(my = Math.floor(Math.random() * 300 + 0),4000);
            setTimeout(speed = Math.floor(Math.random() * 3 + 0),30);

            if (  this.x < 0 ) {
              this.frame = 4;
              this.x = 320 + mx;
              this.y = my;
              this.direction = 0;
              this.moveSpeed = 3;
              if ( setkkuma < 6 ) {
                game.rootScene.addChild(this);
              }
            };
          if (itokawa < gool ) {
            if (tama.within(this,16)) {
              this.frame = 3;
              tama.x = skuma.x;
              tama.y = skuma.y;
              game.score += 50;
            };
          }
          if (this.frame == 3) {
            this.x -= 5;
          } else {
            this.x -= speed;
            enm_x = this.x;
            enm_y = this.y;
          }
          if ( ending == false ) {
            if (skuma.within(this,30)) {
             hit = true;
            };

            if (hit == true) {
              skuma.frame = 8;
              skuma.x -= 5;
            };
            if ( skuma.x < -20  ) {
              game.end(scoreLabel.score, scoreLabel.score + 'くまーポイント獲得！');
            }
          }
          });
          i += 1;
        };// while (6 > i);
        };
      };
      
      //いと●わ
      itokawaactiv = new function() {
        //var i1 = 0;
       // do
       // {
          itokawas = new Sprite(63,60);
          itokawas.image = game.assets['space1.gif'];
          itokawas.x = -100;
          itokawas.y = -100;
          itokawas.frame = 100;
          itokawas.time = 0;
        //  i1 += 1;
       // } while (10 > i1); 
      };
      
      
      
      
      itokawass = new function() {
     // var i2 = 0;
       // do
       // {
           this.x = 320;
           this.y = 320 / 2;
           this.direction = 10;
           this.moveSpeed = 1;
           game.rootScene.addChild(itokawas); 
           itokawas.addEventListener("enterframe", function() {
            if ( skuma.within(this,60) ) {
              //エンディング処理
              ending = true;
              //if (skuma.within(this,60))
              {
                if ( itokawa == gool ) {
                  game.score += 10000;
                  game.rootScene.removeChild(tama);
                  delete tama;
                  game.rootScene.removeChild(ttama);
                  delete ttama;
                
                  game.rootScene.removeChild(skuma);
                  delete skuma;
                
                  //game.rootScene.removeChild(itokawas);
                  //delete itokawas;
                  itokawas.y = 400;
                   game.rootScene.removeChild(pad);
                  delete pad;
                  itokawa += 1;
                
                  i = 0;
                  while (i < 6) {
                    game.rootScene.removeChild(kkuma[i]);
                    delete kkuma[i];
                    i += 1;
                  };// while ( i < 6 );
                  
                  i = 0;
                  while ( i < 4 ) {
                    game.rootScene.removeChild(ukuma[i]);
                    delete ukuma[i];
                    i += 1;
                  };// while ( i < 4 );
                };  
                //エンディング処理
                //地面を表示し、そこにくま達を走り回らせる
                //そこにS・くまを着地させる。
                
                //地面カラー
                game.rootScene.backgroundColor = 'rgb(150,150,150)';
                
                //砂表示 
                i = 0;
                while ( i < 100 ) {
                  suna = new Sprite(16,16);
                  suna.image = game.assets['font2.png'];          
                  suna.frame = 14;
                  suna.x = Math.random() * 320 + 0;
                  suna.y = Math.random() * 320 + 0;
                  game.rootScene.addChild(suna); 
                  i += 1;
                 };// while (100 > i);
                 
                 
                 //脇役くまたち
                 
                 i = 0;
                 while ( i < 8 ) {
                   kkuma[i] = new Sprite(32,32);
                   kkuma[i].image = game.assets['space3.gif'];
          
                   kkuma[i].frame = 9;
                   game.rootScene.addChild(kkuma[i]);
                   i += 1;
                 };// while ( i < 8 );

                 i = 0;
                 while ( i < 3 ) {
                   kkuma[i].addEventListener("enterframe", function() {
                     if (this.x == 0) {
                       this.x = Math.random() * 100 + 0;
                       this.y = Math.random() * 320 + 0;
                     } else {
                       if ( this.x < 320 ) {
                         this.frame = this.age % 2 + 1;
                         this.x += 1;
                         this.y -= 1;
                       } else {
                         this.x = 0;
                         this.y = Math.random() * 320 + 0;
                       }                         
                     }                     
                   });    
                   i += 1;
                 };// while ( i < 3 );
                 
                 while ( i < 6 ) {
                   kkuma[i].addEventListener("enterframe", function()
                   {
                     
                     if (this.x == 0) {
                       this.x = Math.random() * 100 + 0;
                       this.y = Math.random() * 320 + 0;
                     } else {
                       if ( this.x < 320 ) {
                         this.dirction = 1;
                         this.frame = this.age % 2 + 1;
                         this.x += 1;
                         this.y += 1;
                       } else {
                         this.x = 0;
                         this.y = Math.random() * 320 /3 + 0;
                       }
                     }                     
                   });    
                   i += 1;
                 };// while ( i < 6 );
                 
                 i = 0;
                 while (i < 2 ) {
                   ukuma[i] = new Sprite(32,32);
                   ukuma[i].image = game.assets['space3.gif'];
          
                   ukuma[i].frame = 9;
                   game.rootScene.addChild(ukuma[i]);
                   i += 1;
                 };// while ( i < 2 );
                 i = 0;
                 while ( i < 2 ) {
                   ukuma[i].addEventListener("enterframe", function()
                   {
                     
                     if (this.x == 0)
                     {
                       this.x = 10;//Math.random() * 320 + 0;
                       this.y = Math.random() * 320 + 0;
                     } else
                     {
                       if ( this.x < 320 )
                       {
                         this.frame = this.age % 2 + 16;
                         this.x += 2;
                       } else
                       {
                         this.x = 0;
                       }                         
                     }                     
                   });    
                   i += 1;
                 };// while ( i < 2 );
                 
                   
                 //Ｓ・くま
                 skuma.image = game.assets['space3.gif'];
                 skuma.x = 0;
                 skuma.y = 40;
                 skuma.frame = 5;
                 game.rootScene.addChild(skuma); 
                 skuma.addEventListener("enterframe", function(){
                   if ( skuma.y != 320 /2 ) {
                     skuma.x += 1;
                     skuma.y += 1;
                   } else {
                     skuma.x += 1;
                   }
                   
                   if ( skuma.x > 320 ) {
                     game.end(scoreLabel.score, scoreLabel.score + 'くまーポイント獲得！');
                   }  
                 });
                //game.end(game.score); 
              };
            } else {
              this.x -= 1;
              if ( this.x < 0 ) {
                 if ( itokawa == gool ) {
                   this.frame = 1;
                   this.x = 320;
                   this.y = 320 / 2;
                 };    
               };
             }     
           });
            
         // i2 += 1; 
       // }  while ( 10 > i2 );
      }; 
   
   
   
      game.rootScene.addEventListener("enterframe", function() {
        
        scoreLabel.score = game.score;
        if ( itokawa < gool ) {
          itokawa += 1;
        };  
        timer.score = itokawa;
      });         
    
      game.rootScene.backgroundColor = 'black';
      
      var pad = new Pad();
      pad.x = 220;
      pad.y = 220;
      game.rootScene.addChild(pad);
        
      
      game.rootScene.addChild(scoreLabel);
      //game.rootScene.addChild(timer);
    } 
    game.start();	//ゲーム開始
  }
  
 
