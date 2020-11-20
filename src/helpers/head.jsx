import React, { useEffect } from 'react'

export default function Head(props) {
  useEffect(() => {
    document.title = 'Table App | ' + props.title
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.description || '')
  }, [props])
  return <></>
}
