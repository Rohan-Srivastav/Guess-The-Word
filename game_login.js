function add_user(){

    player_1 = document.getElementById("player1_inp").value;
    player_2 = document.getElementById("player2_inp").value;

    p1_inp = document.getElementById("player1_inp").value;
    p2_inp = document.getElementById("player2_inp").value;



    if( p1_inp == "" && p2_inp == ""){

        document.getElementById("p1_h3").innerHTML = '<i>' + '<b>' + "Please Enter Your Name " + '</b>' + '</i>';
        document.getElementById("p2_h3").innerHTML = '<i>' + '<b>' + "Please Enter Your Name " + '</b>' + '</i>';
    }



    else if( p2_inp == ""){

        document.getElementById("p2_h3").innerHTML = '<i>' + '<b>' + "Please Enter Your Name " + '</b>' + '</i>';
        document.getElementById("p1_h3").innerHTML = " Player 1 Login For The Game ";
    }




    else if( p1_inp == "" ){

        document.getElementById("p1_h3").innerHTML = '<i>' + '<b>' + "Please Enter Your Name " + '</b>' + '</i>';
        document.getElementById("p2_h3").innerHTML = " Player 2 Login For The Game ";
    }



     else{
    
        localStorage.setItem("player1", player_1);
        localStorage.setItem("player2", player_2);
    
        window.location = "game_page.html";
    }


}
