import React from "react";
import HackathonForm from "../components/HackathonForm";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateHackathon = () => {
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

export default CreateHackathon;
