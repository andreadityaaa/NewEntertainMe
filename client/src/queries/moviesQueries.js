import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query {
    movies{
      _id,
      title,
      overview,
      poster_path,
      popularity,
      tags,
    }
  }
`

export const GET_ONE_MOVIE = gql`
  query ($selectedId: String) {
    movie(_id: $selectedId){
      _id,
      title,
      overview,
      poster_path,
      popularity,
      tags,
    }
  }
`

export const ADD_MOVIE = gql`
  mutation ($newOne: MovieInput) {
    addMovie(movie: $newOne){
      _id,
      title,
      overview,
      poster_path,
      popularity,
      tags,
    }
  }
`