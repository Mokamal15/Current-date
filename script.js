
    function displayCurrentDate() {
        var currentDate = getCurrentDate();
        var currentDateElement = document.getElementById('current-date');
        currentDateElement.textContent = "Current date is: " + currentDate;
      }
      
      function getCurrentDate() {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
        var day = ("0" + currentDate.getDate()).slice(-2);
      
        var formattedDate = year + "-" + month + "-" + day;
        return formattedDate;
      } 

