$('.drop-down').click(function() {
    $(this).children('.troop').slideToggle(1300);
    $(this).children('.show').slidetoggle(1400);
});

$(document).ready(function() {
    $("#design-image").click(function() {
        $("#design-image").slideDown('').hide('');
        $("#design").show('');
    });
    $("#design").click(function() {
        $("#design").slideUp('');
        $("#design-image").slideDown('');
    });

});

$(document).ready(function() {
    $("#development-image").click(function() {
        $("#development-image").slideDown('').hide('');
        $("#development").show('');
    });
    $("#development").click(function() {
        $("#development").slideUp('');
        $("#development-image").slideDown('');
    });
});

$(document).ready(function() {
    $("#product-image").click(function() {
        $("#product-image").slideDown('').hide('');
        $("#product").show('');
    });
    $("#product").click(function() {
        $("#product").slideUp('');
        $("#product-image").slideDown('');
    });
});

$(document).ready(function() {
    $("#first").mouseover(function() {
        $("#tile1").show();
    }).mouseout(function() {
        $("#tile1").hide();
    });
});
$(document).ready(function() {
    $("#second").mouseover(function() {
        $("#tile2").show();
    }).mouseout(function() {
        $("#tile2").hide();
    });
});
$(document).ready(function() {
    $("#third").mouseover(function() {
        $("#tile3").show();
    }).mouseout(function() {
        $("#tile3").hide();
    });
});

$(document).ready(function() {
    $("#fourth").mouseover(function() {
        $("#tile4").show();
    }).mouseout(function() {
        $("#tile4").hide();
    });
});
$(document).ready(function() {
    $("#fifth").mouseover(function() {
        $("#tile5").show();
    }).mouseout(function() {
        $("#tile5").hide();
    });
});
$(document).ready(function() {
    $("#sixth").mouseover(function() {
        $("#tile6").show();
    }).mouseout(function() {
        $("#tile6").hide();
    });
});
$(document).ready(function() {
    $("#seventh").mouseover(function() {
        $("#tile7").show();
    }).mouseout(function() {
        $("#tile7").hide();
    });
});
$(document).ready(function() {
    $("#eigth").mouseover(function() {
        $("#tile8").show();
    }).mouseout(function() {
        $("#tile8").hide();
    });
});

$(document).ready(function() {
    $("form").submit(function(event) {
        var name = $("#text").val();
        var email = $("#email").val();
        var message = $("textarea#comment").val();
        if ($("#text").val() && $("#email").val() && $("textarea#comment").val()) {

            alert("Please make sure you fill in all the details before submitting the form.");
        } else {
            alert("Hello " + name + " ,we have received your message " + (message) + ".Thank you for reaching out to us. We will contact you through the email address you have provided.  " + email);

        }
    })
})



// var unirest = require("unirest")
// ;
// var req = unirest("POST", "https://rapidapi.p.rapidapi.com/addWorkflowEmailSubscriber");

// req.headers({
//     "x-rapidapi-host": "MailChimpdimashirokovV1.p.rapidapi.com",
//     "x-rapidapi-key": "5956bb5e81msh1392e70fa6f87bbp1d3377jsn19eb3558d940",
//     "useQueryString": true
// });


// req.end(function(res) {
//     if (res.error) throw new Error(res.error);

// console.log(res.body);
// });