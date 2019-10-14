$(document).ready(function () {
    var jsonURL = "./js/brands.json";
    let counter = 0;
    let arrLogos = [];

    $.getJSON(jsonURL, function (json)
    {
        var NumberToDisplay = 6;
        var imgList= "";    //displays total here
        var printPos = 0;   //random value storage
        var usedElements = [];  //save random value and display
        $.each(json.brands, function () {
            arrLogos[counter] ='<li><a href="' + this.url + '"><img alt= "' + this.name + '" title= "' + this.name + '" src= "' + this.imgPath + '"></a></li>';
            counter++;
        });

        counter = 0;    //refresh re-displays 6 images randomly
        while(counter < NumberToDisplay ){
            printPos = randomnumber=Math.floor(Math.random()*28);   //random value - num equal to num of SVG in folder +1
            if(usedElements.indexOf(printPos)===-1){    //avoids duplicates
                usedElements[counter] = printPos;   
                imgList += arrLogos[printPos];     
                counter++;    
            }
        }
        $('#brands').append(imgList);
    });

});
