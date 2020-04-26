import React from 'react'
import {Link} from "react-router-dom"
import { Card, Tag } from 'antd'
import { colors } from '../utils/colors'

const {Meta} = Card;

const Filter = ({ baseUrl, title, options, selected }) => (
  <Card style={{ margin: '8px' }}>
    <Meta title={title}/>
    <br/>
    {Object.values(options).map((item, i) => {
      const active = selected.includes(item)
      const color = active
        ? colors.primaryLight
        : null
      const next = [...selected]
      if (active) next.splice(next.indexOf(item), 1)
      else next.push(item)

        return (
        <Link to={`${baseUrl}?selected=${encodeURIComponent(JSON.stringify(next))}`}>
          <Tag key={i} color={color}>{item}</Tag>
        </Link>
        )
    })}
</Card>
)

export default Filter