import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import HackathonForm from '../components/HackathonForm';

const EditHackathon = () => {
  const { id } = useParams();
  const hackathon = useSelector((state: any) =>
    state.hackathons.list.find((hackathon: any) => {
      console.log("hackathon ID=====", id);

      return hackathon.id === Number(id);
    })
  );

  console.log("Edit hackthon =======",hackathon);
  

  return (
    <>
      <Header />
      <HackathonForm hackathon={hackathon} />
    </>
  );
};

export default EditHackathon
