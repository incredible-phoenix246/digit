import React from 'react'
import { Params } from '../layout'
import ServicePage from '.'
import { services } from '../services-data'

export function generateStaticParams(): { id: string }[] {
  return services.map((service) => ({
    id: service.id,
  }))
}



const ServiceMain = async ({ params }: { params: Params }) => {
  const id = (await params).id
  return <ServicePage id={id} />
}

export default ServiceMain
