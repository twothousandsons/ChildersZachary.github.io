   async function getBooks(){
            try{
                const response = await fetch('./db.json');
                const data = await response.json();
                
                
                const footer = document.querySelector("footer");

                for (let book of data.books){
                    console.log(book)
                    
                    const single_book_div = document.createElement("div");
                   
                    single_book_div.innerHTML = `
                    <h2> Title: ${book.title}  </h2> 
                    <h3> Year: ${book.year} </h3>`;
                   

                    single_book_div.classList.add('single_book')
                    

                    footer.append(single_book_div)
                    
                }
            }
            catch(error){
            
                console.log("Error in fetch;")
            }
        }
        getBooks();
       