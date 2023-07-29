		// function that saves input in text area 1, calls function and outputs it in text area 2
        async function savevar(){
            // Get the value of textarea1
            const text = document.getElementById("textarea1").value;
          // creates the prompt
            const prompt = `Write 25 interview questions for this given job description: ${text}`;
          
          // calls chatGPT function and saves it in answer
          const answer = await getChatGPTResponse(prompt);
          
            // display the value in textarea2	
            document.getElementById("textarea2").value = answer;
          
          checkTextArea();
      }
      
      //-----------------------------------------------------------------------
      
      // Set up API credentials 
      
      const API_KEY = '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';
      const API_URL = 'https://api.openai.com/v1/completions';

      // functio to make API request
      async function getChatGPTResponse(prompt) {
          
          console.log("inside");

            const response = await fetch(API_URL, {
              method: 'POST',
              headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
              },
              body: JSON.stringify({
                    model: 'text-davinci-003',
                    prompt: prompt,
                    max_tokens: 500,
                    temperature: 0      
              })
            });

            const data = await response.json();

            // Extract text from response
            const answer = data.choices[0].text;
            // returns answer
            return answer;
      }
      //---------------------------------------------------------------------
      //below are functions to add the loading feature
      
      function showElement(){
          const elementToShow = document.getElementById("elementToShow");
          elementToShow.style.display = "inline";
      }
      function hideElement(){
          const elementToShow = document.getElementById("elementToShow");
          elementToShow.style.display = "none";
          
          const submittbuttn = document.getElementById("submitbttn");
          submittbuttn.style.display = "none";
      }
      function checkTextArea(){
          const textarea2 = document.getElementById("textarea2");
          if(textarea2.value.trim() !== ""){
              hideElement();
          } else{
              showElement();
          }
      }