import React from 'react';
import {Link} from 'react-router-dom';

export const Card = ({user}) => {
  return (
    <div className='card'>
      <img src={user.avatar_url}  className='card-img-top' alt={user.login}/>

      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <Link to={'/profile/' + user.login} className='btn btn-info' >Open</Link>
      </div>
    </div>
  );
};