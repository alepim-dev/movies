import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";


import Pagination from "../../components/Pagination";
import { MoviePage } from "../../types/movie";
import { BASE_URL } from "../../utils/request";

function Listing (){

    const [pageNumber,setPageNumber] = useState(0);

    const[page,setPage] = useState<MoviePage>({
        content: [],
        last:true,
        totalPages: 0,
        totalElements: 0,
        size: 0,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });
    
        useEffect(()=>{
            axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
            .then(response => {
                const data = response.data as MoviePage;
                
                setPage(data);
            });
        },[pageNumber]);

    //     const movie = {
    //     id: 1,
    //     image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    //     title: "The Witcher",
    //     count: 2,
    //     score: 4.5
    // };

    return(
        <>
        <Pagination/>
        <div className="container">

        <div className="row">
        

            {page.content.map(movie => {
                return (
                    <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3">
                     <MovieCard movie= {movie}/>
                        </div>
                )
            })}
        
            
       
       
        </div>
        </div>

       
        </>
    );
}

export default Listing;