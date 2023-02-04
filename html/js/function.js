$(document).ready(function(){
  
      window.addEventListener('message', function( event ) {      
        if (event.data.type == 'openGeneral') {
         $('body').fadeIn();  
        } 

        if (event.data.type == 'balanceHUD') {
            balance = event.data.balance
            $('#balance-label').text(numberWithCommas(balance) + " $")  
            $('#balance-label2').text(numberWithCommas(balance) + " $")  
        } 
        console.log(event.data)

        $(document).keyup(function(e) {
            if (e.key === "Escape") {

              
              $('body').fadeOut();
              $.post('http://Minty_Banking/NUIFocusOff', JSON.stringify({}));

            }
        });
      });

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    $(".deposit-accept").click(function() {
        $.post('http://Minty_Banking/deposit', JSON.stringify({amount: $("#deposit-amount").val()}));
    });

    $(".deposit-cancel").click(function() {
        $('body').fadeOut();
        $.post('http://Minty_Banking/NUIFocusOff', JSON.stringify({}));
    });

    $(".withdraw-accept").click(function() {
        $.post('http://Minty_Banking/withdrawl', JSON.stringify({amount: $("#withdraw-amount").val()}));
    });

    $(".withdraw-cancel").click(function() {
        $('body').fadeOut();
        $.post('http://Minty_Banking/NUIFocusOff', JSON.stringify({}));
    });
      

    $(".transfer-accept").click(function() {
        $.post('http://Minty_Banking/transfer', JSON.stringify({
            to: $("#transfer-id").val(),
            amountt: $("#transfer-amount").val()
        }));
    });

    $(".transfer-cancel").click(function() {
        $('body').fadeOut();
        $.post('http://Minty_Banking/NUIFocusOff', JSON.stringify({}));
    });
      
   
  
  
  
    
    
     
    
    
    
      
    
      
    });