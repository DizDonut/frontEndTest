/*
  openTab function controls the ability to toggle the tabs on the company sidebar
  @param e is the event parameter
  @param tabName is the name of the tab selected
*/
function openTab(e, tabName) {
  var i, j, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (j = 0; j < tablinks.length; j++) {
    tablinks[j].className = tablinks[j].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display="block";
  e.currentTarget.className += " active";

}

const data = [
  {
    "name": "Big Guy Financial",
    "apy": 0.75,
    "earnings": 376.41
  },
  {
    "name": "Dewey, Cheatam & Howe",
    "apy": 0.01,
    "earnings": 5.00
  },
  {
    "name": "URBank",
    "apy": 0.87,
    "earnings": 436.89
  },
  {
    "name": "First Onion",
    "apy": 0.01,
    "earnings": 5.00
  },
  {
    "name": "Bank of Everywhere",
    "apy": 0.01,
    "earnings": 5.00
  }
];


$(document).ready(function() {

   let table = $("#dynamicTable");
   // generating table
   .forEach(element => {table.prepend(`<tr> <td>${element.name}</td>
                   <td>${element.apy.toFixed(2)}%</td>
                   <td>$${element.earnings.toFixed(2)}</td>
               </tr>`);
             },
           );

    table.prepend(` <tr>
                   <td></td>
                   <td><sub>Annual Percentage Yeld </sub></td>
                   <td><sub>Est. Earnings for 1 Year* </sub></td>
                  </tr>`);

}


  $('button.loginWindow').click(function() {

    var loginBox = $(this).attr('href');
    $(loginBox).fadeIn(300);
    var popMargTop = ($(loginBox).height() + 24) /2;
    var popMargLeft = ($(loginBox).width() + 24) / 2;
    $(loginBox).css({
      'margin-top': -popMargTop,
      'margin-left': -popMargLeft
    });
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300)
    return false;
  });
  $('a.close, #mask').on('click', function() {
    $('#mask , .loginPopup').fadeOut(300, function() {
      $('#mask').remove();
    });
    return false;
  });
})
