import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function SetNewPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    console.log(token);
  },)
  
  return (
    <div>SetNewPassword : {token}</div>
  )
}