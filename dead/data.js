window.onload = function() { 
    this.console.log("fu")
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/",
        dataType: "json",
        success: function(data) {
            {$(".jojo")[0].innerHTML = data[1].Content
            $(".jojo")[1].innerHTML = data[2].Content
            $(".jojo")[2].innerHTML = data[3].Content
            $(".jojo")[3].innerHTML = data[4].Content}

            {$(".img")[0].src = data[1].Photo
            $(".img")[1].src = data[2].Photo
            $(".img")[2].src = data[3].Photo
            $(".img")[3].src = data[4].Photo}

            {$(".jojohead")[0].innerHTML = data[1].Head
            $(".jojohead")[1].innerHTML = data[2].Head
            $(".jojohead")[2].innerHTML = data[3].Head
            $(".jojohead")[3].innerHTML = data[4].Head}

            {$(".button")[0].innerHTML = data[1].Head
            $(".button")[1].innerHTML = data[2].Head
            $(".button")[2].innerHTML = data[3].Head
            $(".button")[3].innerHTML = data[4].Head}

            carousel()
        },
        error: function(err) {
            console.log(err)
        }
    }) 
}
