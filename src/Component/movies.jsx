import React, { Component } from 'react';
import {getMovies } from '../fakeMovieService';

class Movies extends Component {
    state = { 
        movies: getMovies()
     }

    handleDelete = movie => {
         //creats new array with all movies except movies passed to delete
         const movies = this.state.movies.filter(m =>m._id !== movie._id);
        this.setState({ movies }); // passed this object to state movie object to assign new movie array
        
     };

    render() { 
        //count = this.state.movies.length;  
        const {length: count} = this.state.movies; //counts the total no. of movie in currently in movie objet 
    //if count is 0 the print no movie
    //else return total no of movies and print table
 
        if (count === 0)
        return <p> There is no movie in this database</p>;
//if there are more than one element then we put all elements in one <div> or <React.Fragment>
       return (
       <React.Fragment>
           <p>Showing {count} movies in the database.</p>

       <table className="table">

            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie =>(
                         <tr key={movie._id}>
                         <td>{movie.title}</td>
                         <td>{movie.genre.name}</td>
                         <td>{movie.numberInStock}</td>
                         <td>{movie.dailyRentalRate}</td>
                         <td>
                             <button 
                                 onClick={() => this.handleDelete(movie)}
                                 className="btn btn-danger btn-sm"
                             >
                                 Delete
                             </button>
                        </td>
                     </tr>
                ))}
               
            </tbody>
        </table>
        </React.Fragment>
       )
    }
}
 
export default Movies;