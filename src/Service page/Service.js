import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ArticleHome from '../Home page/Article-home'
import HelpService from './Help-service'
import HeroService from './Hero-service'
import KnowService from './Know-service'
import QuestionService from './Question-service'
import TransformService from './Transform-service'

export default function () {
  return (
    <div>
      <Header/>
      <HeroService/>
      <HelpService/>
      <TransformService/>
      <KnowService/>
      <QuestionService/>
      <ArticleHome/>
      <Footer/>
    </div>
  )
}
