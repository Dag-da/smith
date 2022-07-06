import React from 'react'
import PageTitle from "../../PageTitle"
import SectionTitle from '../../SectionTitle'

export default function PortfolioPage() {
  const contents = {
    title: "",
    suptitle: "",
    sectionTitleStyle: "",
    sectionTitleText: '',
  }
  return (
    <>
    <PageTitle title={contents.title} supTitleText={contents.suptitle} />
    <SectionTitle sectionTitleStyle={contents.sectionTitleStyle} sectionTitleText={contents.sectionTitleText} />
    </>
  )
}
