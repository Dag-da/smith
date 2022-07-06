import React from 'react'
import PageTitle from "../../PageTitle"
import SectionTitle from '../../SectionTitle'

export default function Homepage() {
  const contents = {
    title: "Justin Bieber",
    suptitle: "Développeur full stack",
    sectionTitleStyle: "",
    sectionTitleText: "Description"
  }
  return (
    <>
    <PageTitle titleText={contents.title} supTitleText={contents.suptitle} />
    <SectionTitle sectionTitleStyle={contents.sectionTitleStyle} sectionTitleText={contents.sectionTitleText} />
    </>
  )
}
