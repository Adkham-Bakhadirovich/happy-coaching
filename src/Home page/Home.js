import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ArticleHome from './Article-home'
import BlogHome from './Blog-home'
import ClientsHome from './Clients-home'
import GuideHome from './Guide-home'
import HelpHome from './Help-home'
import HeroHome from './Hero-home'
import SessionHome from './Session-home'
export default function () {
  return (
    <div>
      <Header/>
      <HeroHome/>
      <HelpHome/>
      <ClientsHome/>
      <BlogHome/>
      <GuideHome/>
      <SessionHome/>
      <ArticleHome/>
      <Footer/>
    </div>
  )
}
