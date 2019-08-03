let titles = [];
let getData = (name,pageNumber = 1) => {
        
        fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${name}&page=${pageNumber}`,{
            method:"GET",
        }).then((res)=>{
            res.json().then((data) => {
                console.log(data);
                if( data.page > data.total_pages) {
                    titles.sort();       // not optimised
                    console.log(titles); // can use promises OR async await to return titles
                    return;
                }

                if (data.data.length != 0) {

                    data.data.forEach((movie) => {
                       if (titles.indexOf(movie.Title) == -1) {
                           titles.push(movie.Title); 
                       }
                    });

                    getData(name,pageNumber+1);

                }           

            });
        }).catch((err)=>console.log(err));
    
}

getData("Waterworld 4: History of the Islands");