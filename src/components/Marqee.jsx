

var Marqee = ({imagesUrl}) => {

    
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
       {imagesUrl.map((url) => <img src={url} className=""/>)}
    </div>
  )
}

export default Marqee 