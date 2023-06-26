export const RecursiveComponent = ({ data }) => {
  return (
    <div style={{ paddingLeft: '20px' }}>
      {data.map((parent) => {
        return (
          <div key={parent.name}>
            <span>{parent.name}</span>
            {/* Base Condition and Rendering recursive component from inside itself */}
            <div>
              {parent.children && <RecursiveComponent data={parent.children} />}
            </div>
          </div>
        )
      })}
    </div>
  )
}
