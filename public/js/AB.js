function validate()
            {
                let title = document.getElementById("title");
                let author = document.getElementById("author");
                let genre = document.getElementById("genre");
                            
                let regexp1 = /^([a-zA-Z0-9\.!-?'&]+)$/
                    
                let regexp2 = /^([a-zA-Z\.'-]+)$/

                let regexp3 = /^([a-zA-Z]+)$/
                        
                let validateFlag = true;
                                                     // validation 'test'
                                                     
                        if(regexp1.test(title.value))
                        {                                   //if test passed
                            document.getElementById("error1").textContent = "Valid";
                        }
                        else
                        {                                   //if test failed
                            document.getElementById("error1").textContent = "Invalid-Enter a Valid Book Title";
                            validateFlag = false;
                        }
                                                                
                        if(regexp2.test(author.value))
                        {
                            document.getElementById("error2").textContent = "Valid";
                        }
                        else
                        {
                            document.getElementById("error2").textContent = "Invalid-Enter a Valid Author Name";
                            validateFlag = false;
                        }
                        
                        if(regexp3.test(genre.value))
                        {
                            document.getElementById("error3").textContent = "Valid";
                        }
                        else
                        {
                            document.getElementById("error3").textContent = "Invalid-Enter a Valid Genre";
                            validateFlag = false;
                        }
                return validateFlag;
            }