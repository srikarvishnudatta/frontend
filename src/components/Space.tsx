type SpaceType = {
    height:string;
}
function Space({height}:SpaceType) {
  return (
    <div style={{height}}></div>
  )
}

export default Space