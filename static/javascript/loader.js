function hideAll(Adiv) {
         var text = "";
         var i;

         for (i = 1; i < 4; i++) {
             var text = ""
             text += "mydiv" + i;
             document.getElementById(text).style.visibility = "hidden";
         }
         document.getElementById(Adiv).style.visibility = "visible";
     }

     function showAll(Adiv) {
         var text = "";
         var i;

         for (i = 1; i < 4; i++) {
             var text = ""
             text += "mydiv" + i;
             document.getElementById(text).style.visibility = "visible";
         }

     }