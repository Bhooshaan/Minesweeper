var mat =new Array(10);
        var count=0;
        var score=0;
        for(var i=0;i<10;i++){
            mat[i]=new Array(10);
            for(var j=0;j<10;j++){
                mat[i][j]=0;
            }
        }
        while (count<15){
            var a=Math.floor(Math.random() * 100) + 1;
            var x=Math.floor((a-1)/10);
            var y=(a-1)%10;
            if (mat[x][y]==0){
                mat[x][y]=1;
                count++;
            }
        }
        function openmine(ID){
            var b=parseInt(ID);
            var c=Math.floor((b-1)/10);
            var d=(b-1)%10;
            var bomb=0;
            if (mat[c][d]==1){
                for(var i=0;i<10;i++){
                    for(var j=0;j<10;j++){
                        var m1=i*10;
                        var m2=m1+j+1;
                        if (mat[i][j]==1){
                            document.getElementById(m2.toString()).innerHTML="💥";
                            document.getElementById(m2.toString()).onclick="";
                        }
                        document.getElementById(m2.toString()).onclick="";
                    }
                }
                document.getElementById(ID).style.backgroundColor="red";
                document.getElementById("smiley").innerHTML="🙁";
                console.log("Game over");
                alert("Game Over.You lost!");
            }
            else{
                score++;
                document.getElementById("score").innerHTML="Score :"+ score.toString();
                if(score==85){
                    alert("Game Over. You won!");
                }
                for(var i=c-1;i<=c+1;i++){
                    for(var j=d-1;j<=d+1;j++){
                        if (i>=0 && i<=9 && j<=9 && j>=0){
                            if(!(i==c && j==d)){
                                if (mat[i][j]==1){
                                    bomb++;
                                }
                            }
                        }
                    }
                }
                if (bomb==0){
                    document.getElementById(ID).style.backgroundColor="lavenderblush";
                    document.getElementById(ID).disabled=true;
                    for(var i=c-1;i<=c+1;i++){
                        for(var j=d-1;j<=d+1;j++){
                            if (i>=0 && i<=9 && j<=9 && j>=0){
                                if(!(i==c && j==d)){
                                    var n1=(i*10);
                                    var n2=n1+1+j;
                                    var s=n2.toString();
                                    if (document.getElementById(s).disabled==false){
                                        openmine(s);
                                    }
                                }
                            }
                        }
                    }
                }
                else{
                    document.getElementById(ID).innerHTML= bomb.toString();
                    document.getElementById(ID).style.backgroundColor="lavenderblush";
                    document.getElementById(ID).disabled=true;
                }
            }
        }