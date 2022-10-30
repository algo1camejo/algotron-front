import React from 'react'
import { useNavigate } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from 'src/components/buttons';

interface eyeProps {
    id : number
}


export const DetailButton = ({id} : eyeProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(id.toString())
  }
  return (
    <IconButton
      label="Ver Corrección"
      icon={faEye}
      onClick={handleNavigate}
    />
  )
}