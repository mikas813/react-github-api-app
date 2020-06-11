import React, {useContext, useState} from 'react';
import {AlertContext} from '../context/alert/alertContext';
import {GithubContext} from '../context/github/githubContext';

export const Search = () => {

  const [value, setValue] = useState('');
  const alert = useContext( AlertContext );
  const github = useContext(GithubContext);

  const onSubmit = (e) => {
    if (e.key !== 'Enter') {
      return
    }
    github.clearUsers()
    if (value.trim()) {
      github.search(value.trim())
      alert.hide()
    } else {
      alert.show('Fill in username!')
    }
  };

  return (
    <div className='form-group'>
      <input
        onKeyPress={onSubmit}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        className='form-control'
        placeholder='Fill in nickname...'
      />
    </div>
  );
};