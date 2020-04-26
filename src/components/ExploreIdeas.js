import React from 'react'
import { Row, Col } from 'antd'
import PageLayout from './PageLayout'
import BusinessCard from './BusinessCard'
import businesses from '../data/businesses.json'
import PageIntro from './PageIntro'
import {useLocation} from "react-router"
import Filter from './Filter'

const ExploreIdeas = () => {
  const selectedString = new URLSearchParams(useLocation().search).get("selected") || "[]"
  const selectedArray = JSON.parse(selectedString)
  console.log(selectedArray)
  return (
  <PageLayout>
    <PageIntro
      title="Search among OwnEmployed's business ideas!"
      summary="Our entrepreneurs share their stories behind how they've started and grown profitable online businesses.
      Follow others and make a connection!"
      actions={[{ text: "Add Your Product", onClick: () => {}}]}
      />
    <Row>
      <Col span={6}>
        <Filter
          baseUrl="/projects"
          options={['Volunteering', 'stuff', 'me']}
          selected={selectedArray}
          title='Filter Projects by Tag'
          />
      </Col>
      <Col span={18}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto' }}>
          {Object.values(businesses).map((business) => (<BusinessCard key={business.id} business={business}/>))}
        </div>
      </Col>
    </Row>

  </PageLayout>
)
}
export default ExploreIdeas
