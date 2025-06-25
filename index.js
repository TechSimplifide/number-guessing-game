let score = document.querySelector(".score");
      let result = document.querySelector(".result");
      let btn = document.querySelector(".btn");
      let randomNumber = Math.ceil(Math.random() * 10) + 1;
      //   console.log(randomNumber);
      let SCORE = 0;

      btn.addEventListener("click", () => {
        let inputVal = document.querySelector("#input-field").value;
       if(isNaN(inputVal)){
         alert('please enter only numeric value')
       }
        else if (inputVal <= 0 || inputVal > 11 || inputVal.value == "") {
          alert("please enter a valid number");
          return;
        }

        if (inputVal == randomNumber) {
          result.innerHTML = `Nice you have given the correct answer!!`;
          result.style.color = "green";
          result.style.fontSize = "larger";
          result.style.fontWeight = "600";
          score.innerHTML = `Score:${(SCORE += 1)}`;
          document.querySelector("#input-field").value = "";
          randomNumber = Math.ceil(Math.random() * 10) + 1;
          result.value = "";
        } else if (inputVal > randomNumber) {
          result.innerHTML = `To high`;
          result.style.color = "red";
          result.style.fontSize = "larger";
          result.style.fontWeight = "600";
          document.querySelector("#input-field").value = "";
          result.value = "";
        } else if (inputVal < randomNumber) {
          result.innerHTML = `To low`;
          result.style.color = "red";
          result.style.fontSize = "larger";
          result.style.fontWeight = "600";
          document.querySelector("#input-field").value = "";
          result.value = "";
        }
      });
