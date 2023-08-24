import React from 'react'
import ShowItems from '../ShowItems/ShowItems'

const HomeComponent = () => {
    const folders = ["New folder"," New folder 2"]
    const files = ["New file"," New file 2"]
  return (
    <div className="col-md-12 w-100">
        <ShowItems title="Create Folders" items={folders} />
        <ShowItems title="Create Files" items={files} />
    </div>
  )
}

export default HomeComponent