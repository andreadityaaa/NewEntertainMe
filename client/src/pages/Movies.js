import React from 'react'
import { GET_MOVIES } from '../queries/moviesQueries'
import { useQuery } from '@apollo/client'
import { Card } from '../components/Card'
import { useLocation } from 'react-router-dom'


export const Movies = () => {
  const {pathname} = useLocation()
  const { loading, error, data } =  useQuery(GET_MOVIES)

  if(loading){
    return <p> loading ..</p>
  }

  if(error){
    return <p> {JSON.stringify(error)} </p>
  }

  return (
    <>
      <div className="row mb-5">
      <div className="col-10">
        <h1 style={{color: '#DFDFDF', fontSize:23}}>Movies List</h1>
      </div>
      </div>
      <div className="row">
      {
        data.movies.map( movie => {
          return (
            <div className="col-3" key={movie._id}> 
              <Card data={movie} path={pathname} key={movie._id}/>
            </div>
            )
          })
      }
      </div>
    </>
  )
}