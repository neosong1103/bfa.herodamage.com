// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getSpecVariation } from '../../../utils/wow'
// Components
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

const RelatedContainer = styled.div`
  border: 1px solid ${({theme}) => theme.palette.divider};
  display: table;
  margin: auto;
  text-align: center;
`

const RelatedSimulationTypes = ({data: {relatedSimulationTypes}, simulationType, t}) => {
  if (relatedSimulationTypes && relatedSimulationTypes.edges.length > 1) {
    return (
      <div>
        {relatedSimulationTypes.edges.map((edge, index) => {
          const {node: {context, path}} = edge
          const {simulationType: nodeSimulationType} = context
          return (
            <Button key={index} variant="contained" color="primary" disabled={simulationType === nodeSimulationType}
              component={Link} to={path} style={{margin: '4px 8px'}}>
              {t(nodeSimulationType)}
            </Button>
          )
        })}
      </div>
    )
  } else {
    return (null)
  }
}

RelatedSimulationTypes.propTypes = {
  data: PropTypes.object.isRequired,
  simulationType: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
}

const RelatedTiers = ({data: {relatedTiers}, t, tier}) => {
  if (relatedTiers && relatedTiers.edges.length > 1) {
    return (
      <div>
        <Divider/>
        {relatedTiers.edges.map((edge, index) => {
          const {node: {context, path}} = edge
          const {tier: nodeTier} = context
          return (
            <Button key={index} variant="contained" color="primary" disabled={tier === nodeTier}
              component={Link} to={path} style={{margin: '4px 8px'}}>
              {t(nodeTier)}
            </Button>
          )
        })}
      </div>
    )
  } else {
    return (null)
  }
}

RelatedTiers.propTypes = {
  data: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  tier: PropTypes.string.isRequired
}

const RelatedSpecs = ({data: {relatedSpecs}, spec, variation, t}) => {
  if (relatedSpecs && relatedSpecs.edges.length > 1) {
    return (
      <div>
        <Divider/>
        {relatedSpecs.edges.map((edge, index) => {
          const {node: {context, path}} = edge
          const {spec: nodeSpec, variation: nodeVariation} = context
          return (
            <Button key={index} variant="contained" color="primary"
              disabled={spec === nodeSpec && variation === nodeVariation}
              component={Link} to={path} style={{margin: '4px 8px'}}>
              {getSpecVariation(t, nodeSpec, nodeVariation, false)}
            </Button>
          )
        })}
      </div>
    )
  } else {
    return (null)
  }
}

RelatedSpecs.propTypes = {
  data: PropTypes.object.isRequired,
  spec: PropTypes.string.isRequired,
  variation: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
}

const RelatedFightStyles = ({data: {relatedFightStyles}, fightStyle, t}) => {
  if (relatedFightStyles && relatedFightStyles.edges.length > 1) {
    return (
      <div>
        <Divider/>
        {relatedFightStyles.edges.map((edge, index) => {
          const {node: {context, path}} = edge
          const {fightStyle: nodeFightStyle} = context
          return (
            <Button key={index} variant="contained" color="primary" disabled={fightStyle === nodeFightStyle}
              component={Link} to={path} style={{margin: '4px 8px'}}>
              {t(nodeFightStyle)}
            </Button>
          )
        })}
      </div>
    )
  } else {
    return (null)
  }
}

RelatedFightStyles.propTypes = {
  data: PropTypes.object.isRequired,
  fightStyle: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
}

const RelatedSimulations = ({data, fightStyle, variation, simulationType, spec, t, tier}) => (
  <RelatedContainer>
    <RelatedSimulationTypes data={data} simulationType={simulationType} t={t}/>
    <RelatedTiers data={data} tier={tier} t={t}/>
    <RelatedSpecs data={data} spec={spec} variation={variation} t={t}/>
    <RelatedFightStyles data={data} fightStyle={fightStyle} t={t}/>
  </RelatedContainer>
)

RelatedSimulations.propTypes = {
  data: PropTypes.object.isRequired,
  fightStyle: PropTypes.string.isRequired,
  variation: PropTypes.string.isRequired,
  simulationType: PropTypes.string.isRequired,
  spec: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  tier: PropTypes.string.isRequired
}

export default RelatedSimulations
